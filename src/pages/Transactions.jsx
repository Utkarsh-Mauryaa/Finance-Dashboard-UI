import { useEffect, useState } from "react";
import { LayoutLoaderAdmin } from "../components/layout/Loaders";
import Table from "../components/specific/Table";
import Layout from "../components/layout/Layout";
import { TRANSACTIONS } from "../utils/sampleData";
import { useSelector } from "react-redux";
import AddTransactionDialog from "../components/specific/AddTransactionDialog";
import { motion } from "framer-motion";
import { MdAdd } from "react-icons/md";

const STORAGE_KEY = "fin_transactions";

const loadRows = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : TRANSACTIONS;
  } catch {
    return TRANSACTIONS;
  }
};

const saveRows = (rows) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(rows));
};

const Transactions = () => {
  const [isLoading, setIsLoading]   = useState(true);
  const [rows, setRows]             = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  const isAdmin = useSelector((state) => state.adminCheck.isAdmin);

  useEffect(() => {
    const t = setTimeout(() => {
      setRows(loadRows());
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!isLoading) saveRows(rows);
  }, [rows, isLoading]);

  const handleRowUpdate = (updatedRow) => {
    setRows((prev) => prev.map((r) => (r.id === updatedRow.id ? updatedRow : r)));
    return updatedRow;
  };

  const handleAdd = (newTransaction) => {
    setRows((prev) => [newTransaction, ...prev]);
  };

  const columns = [
    { field: "id",       headerName: "ID",       width: 200, headerClassName: "table-header" },
    { field: "date",     headerName: "Date",     width: 200, headerClassName: "table-header" },
    {
      field: "amount", headerName: "Amount", width: 150, headerClassName: "table-header",
      editable: isAdmin,
      renderCell: (params) => (
        <span className="text-light-text dark:text-dark-text font-['Syne'] font-semibold">
          {params.row.amount}
        </span>
      ),
    },
    {
      field: "category", headerName: "Category", width: 200, headerClassName: "table-header",
      editable: isAdmin,
      renderCell: (params) => (
        <span className="text-light-text dark:text-dark-text font-['Syne'] font-semibold">
          {params.row.category}
        </span>
      ),
    },
    {
      field: "type", headerName: "Type", width: 200, headerClassName: "table-header",
      editable: isAdmin,
      renderCell: (params) => (
        <span
          className="font-['DM_Mono'] text-[13px] font-semibold"
          style={{ color: params.row.type === "Income" ? "#63dcbe" : "#e05c7a" }}
        >
          {params.row.type}
        </span>
      ),
    },
  ];

  return (
    <Layout>
      {isLoading ? (
        <LayoutLoaderAdmin />
      ) : (
        <>
          {isAdmin && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4"
            >
              <button
                onClick={() => setDialogOpen(true)}
                className="
                  flex items-center gap-2 px-[18px] py-[9px] rounded-[10px]
                  border-none bg-gradient-to-r from-accent-green to-[#3bb8f5]
                  text-dark-bg font-['Syne'] font-extrabold text-[13px]
                  cursor-pointer transition-opacity duration-150
                  hover:opacity-90
                "
              >
                <MdAdd size={18} />
                Add Transaction
              </button>
            </motion.div>
          )}

          <Table
            heading="All Transactions"
            columns={columns}
            rows={rows}
            processRowUpdate={handleRowUpdate}
          />

          <AddTransactionDialog
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
            onAdd={handleAdd}
          />
        </>
      )}
    </Layout>
  );
};

export default Transactions;