import { format } from "date-fns";
import { motion } from "framer-motion";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { MdAdminPanelSettings, MdGroups } from "react-icons/md";
import { LayoutLoaderDashboard } from "../components/layout/Loaders";
import { DoughnutChart, LineChart } from "../components/specific/Charts";
import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import ActionCard from "../components/specific/ActionCard";
import { BsCurrencyDollar } from "react-icons/bs";
import { expense, income } from "../utils/sampleData";
import { BREAKDOWN } from "../utils/sampleData";

const cardStyle = {
  background: "#13161e",
  border: "1px solid #1e2330",
  borderRadius: 16,
  padding: 20,
  boxShadow: "none",
};


const total = BREAKDOWN.reduce((s, i) => s + i.value, 0);

const fmt = (n) =>
  n.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  },[])

  const ActionCards = (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 8 }}>
      {[
        { title: "Net Balance",    value: fmt(101000), icon: <BsCurrencyDollar />,          color: "#63dcbe" },
        { title: "Total Income",   value: fmt(200000), icon: <MdGroups />,                  color: "#e05c7a" },
        { title: "Total Expenses", value: fmt(100000), icon: <BiSolidMessageSquareDetail />, color: "#a78bfa" },
        { title: "Total Expenses", value: fmt(100000), icon: <BiSolidMessageSquareDetail />, color: "#a78bfa" },
      ].map((w, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ flex: "1 1 200px", minWidth: 180 }}
        >
          <ActionCard {...w} />
        </motion.div>
      ))}
    </div>
  );

  return isLoading ? (
    <LayoutLoaderDashboard />
  ) : (
    <Layout>
      <div style={{ maxWidth: 1200 }}>

        <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 24 }}>

          {/* ── Line chart card ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ ...cardStyle, flex: "1 1 400px", minWidth: 0, height: 350 }}
          >
            <p style={{
              color: "#8890a8", fontFamily: "'DM Mono',monospace",
              fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12,
            }}>
              Balance Trend
            </p>
            <LineChart income={income} expense={expense} />
          </motion.div>

          {/* ── Doughnut card ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              ...cardStyle,
              flex: "1 1 340px",
              minWidth: 0,
              height: 350,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",       // nothing escapes the card
            }}
          >
            {/* heading */}
            <p style={{
              color: "#8890a8", fontFamily: "'DM Mono', monospace",
              fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em",
              marginBottom: 16, flexShrink: 0,
            }}>
              Spending Breakdown
            </p>

            {/* body: legend left, chart right */}
            <div style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: 20,
              minHeight: 0,           // lets flex children shrink inside fixed-height parent
            }}>

              {/* LEFT — legend rows */}
              <div style={{
                flex: 1,
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 2,
              }}>
                {BREAKDOWN.map((item) => {
                  const pct = Math.round((item.value / total) * 100);
                  return (
                    <div
                      key={item.label}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "6px 0",
                        borderBottom: "1px solid #1e2330",
                        width:"70%"
                      }}
                    >
                      {/* color swatch */}
                      <span style={{
                        width: 10,
                        height: 10,
                        borderRadius: 3,
                        background: item.color,
                        flexShrink: 0,
                      }} />

                      {/* label */}
                      <span style={{
                        flex: 1,
                        color: "#c8cedd",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 12,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}>
                        {item.label}
                      </span>

                      {/* percentage */}
                      <span style={{
                        color: "#5a607a",
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 11,
                        flexShrink: 0,
                      }}>
                        {pct}%
                      </span>
                    </div>
                  );
                })}
              </div>

              <div style={{
                width: 190,
                height: 190,
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <DoughnutChart
                  labels={BREAKDOWN.map((i) => i.label)}
                  value={BREAKDOWN.map((i) => i.value)}
                />
              </div>

            </div>
          </motion.div>

        </div>

        {ActionCards}

      </div>
    </Layout>
  );
};

export default Dashboard;