
import Sidebar from '../specific/Sidebar'
import { Drawer } from "@mui/material";
import { useState } from "react";
import { IoMenuOutline, IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { globalStyles } from "../../theme";
import Navbar from "./Navbar"


const Layout = ({ children }) => {

  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
    <Navbar/>
      <style>{globalStyles}</style>
      <div style={{ display: "flex", height: "100vh", overflow: "hidden", background: "#0d0f14" }}>
        
        <div style={{ display: "none", position: "fixed", top: 12, right: 12, zIndex: 50 }} className="admin-mobile-btn">
          <style>{`@media(max-width:768px){.admin-mobile-btn{display:block!important}}`}</style>
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobile(!isMobile)}
            style={{
              width: 40, height: 40, borderRadius: 10, border: "1px solid #1e2330",
              background: "#13161e", color: "#e8eaf0", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
            }}
          >
            {isMobile ? <IoClose /> : <IoMenuOutline />}
          </motion.button>
        </div>

        
        <aside style={{ width: 230, flexShrink: 0, borderRight: "1px solid #1e2330", background: "#13161e", display: "none", overflowY: "auto" }} className="admin-sidebar">
          <style>{`@media(min-width:769px){.admin-sidebar{display:block!important}}`}</style>
          <Sidebar />
        </aside>

        
        <main style={{ flex: 1, overflowY: "auto", background: "#0d0f14" }}>
          <div style={{ padding: "24px", minHeight: "100%" }}>
            {children}
          </div>
        </main>

        
        <Drawer
          open={isMobile}
          onClose={() => setIsMobile(false)}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { width: 240, background: "#13161e", borderRight: "1px solid #1e2330" },
          }}
        >
          <Sidebar onClose={() => setIsMobile(false)} />
        </Drawer>
      </div>
    </>
  );
};

export default Layout;