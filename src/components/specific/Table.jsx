import { DataGrid } from "@mui/x-data-grid";
import { GlobalStyles } from "@mui/material";

// Portal-rendered elements (column menus, filter panels) are children of <body>,
// which is a child of <html>. Since Layout now puts .dark on <html>, these
// portals correctly inherit dark CSS variables — no hardcoded hex needed.
const PortalStyles = () => (
  <GlobalStyles styles={{
    ".MuiDataGrid-menuList": { background: "var(--surface2) !important", padding: "4px !important" },
    ".MuiDataGrid-menuList.MuiList-root": { background: "var(--surface2) !important" },
    "div[role='tooltip'] .MuiPaper-root, div[role='presentation'] .MuiPaper-root": {
      background: "var(--surface2)",
      border: "1px solid var(--border)",
      borderRadius: "10px",
      boxShadow: "var(--shadow-modal)",
    },
    ".MuiDataGrid-menuList .MuiMenuItem-root": {
      color: "var(--text) !important",
      fontFamily: "'Syne', sans-serif !important",
      fontSize: "13px !important",
      borderRadius: "6px !important",
      margin: "2px 4px !important",
      padding: "8px 12px !important",
    },
    ".MuiDataGrid-menuList .MuiMenuItem-root:hover": {
      background: "color-mix(in srgb, var(--accent) 8%, transparent) !important",
      color: "var(--accent) !important",
    },
    ".MuiDataGrid-menuList .MuiMenuItem-root .MuiListItemIcon-root": { color: "var(--text-muted) !important", minWidth: "32px !important" },
    ".MuiDataGrid-menuList .MuiMenuItem-root:hover .MuiListItemIcon-root": { color: "var(--accent) !important" },
    ".MuiDataGrid-menuList .MuiDivider-root": { borderColor: "var(--border) !important", margin: "4px 0 !important" },
    ".MuiDataGrid-paper": {
      background: "var(--surface2) !important",
      border: "1px solid var(--border) !important",
      borderRadius: "12px !important",
      boxShadow: "var(--shadow-modal) !important",
      color: "var(--text) !important",
    },
    ".MuiDataGrid-panelContent":  { background: "var(--surface2) !important" },
    ".MuiDataGrid-panelHeader":   { background: "var(--surface2) !important", borderBottom: "1px solid var(--border) !important", paddingBottom: "8px !important" },
    ".MuiDataGrid-panelFooter":   { background: "var(--surface2) !important", borderTop: "1px solid var(--border) !important" },
    ".MuiDataGrid-paper .MuiFormLabel-root, .MuiDataGrid-paper .MuiInputLabel-root": { color: "var(--text-dim) !important", fontFamily: "'DM Mono', monospace !important", fontSize: "12px !important" },
    ".MuiDataGrid-paper .MuiTypography-root":  { color: "var(--text) !important", fontFamily: "'Syne', sans-serif !important" },
    ".MuiDataGrid-paper .MuiInputBase-root":   { color: "var(--text) !important", fontFamily: "'DM Mono', monospace !important", fontSize: "13px !important" },
    ".MuiDataGrid-paper .MuiInput-underline:before":       { borderBottomColor: "var(--border) !important" },
    ".MuiDataGrid-paper .MuiInput-underline:hover:before": { borderBottomColor: "var(--accent) !important" },
    ".MuiDataGrid-paper .MuiInput-underline:after":        { borderBottomColor: "var(--accent) !important" },
    ".MuiDataGrid-paper .MuiSvgIcon-root":   { color: "var(--text-muted) !important" },
    ".MuiDataGrid-paper .MuiNativeSelect-select, .MuiDataGrid-paper .MuiSelect-select": { color: "var(--text) !important", fontFamily: "'DM Mono', monospace !important", fontSize: "13px !important" },
    ".MuiDataGrid-paper .MuiCheckbox-root":               { color: "var(--text-muted) !important" },
    ".MuiDataGrid-paper .MuiCheckbox-root.Mui-checked":   { color: "var(--accent) !important" },
    ".MuiDataGrid-paper .MuiSwitch-switchBase.Mui-checked": { color: "var(--accent) !important" },
    ".MuiDataGrid-paper .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": { backgroundColor: "var(--accent) !important" },
    ".MuiDataGrid-paper .MuiButton-root":       { color: "var(--accent) !important", fontFamily: "'Syne', sans-serif !important", fontSize: "12px !important" },
    ".MuiDataGrid-paper .MuiButton-root:hover": { background: "color-mix(in srgb, var(--accent) 8%, transparent) !important" },
  }} />
);

const Table = ({ rows, columns, heading, rowHeight = 52, processRowUpdate }) => (
  <div>
    <PortalStyles />

    <div style={{ marginBottom: 20 }}>
      <h2 style={{ color: "var(--text)", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 22, margin: 0 }}>
        {heading}
      </h2>
      <p style={{ color: "var(--text-muted)", fontFamily: "'DM Mono', monospace", fontSize: 12, marginTop: 4 }}>
        {rows.length} record{rows.length !== 1 ? "s" : ""}
      </p>
    </div>

    <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden", height: 560 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowHeight={rowHeight}
        processRowUpdate={processRowUpdate}
        onProcessRowUpdateError={(err) => console.error("Row update error:", err)}
        sx={{
          border: "none",
          color: "var(--text)",
          fontFamily: "'Syne', sans-serif",
          background: "transparent",
          "& .MuiDataGrid-columnHeaders":    { background: "var(--surface2)", borderBottom: "1px solid var(--border)" },
          "& .MuiDataGrid-columnHeader":     { background: "var(--surface2)" },
          "& .MuiDataGrid-columnHeaderTitle": { color: "var(--text-dim)", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em" },
          "& .MuiDataGrid-columnSeparator":  { display: "none" },
          "& .MuiDataGrid-row": {
            borderBottom: "1px solid var(--border-light)",
            "&:hover":       { background: "color-mix(in srgb, var(--accent) 4%, transparent)" },
            "&.Mui-selected": { background: "color-mix(in srgb, var(--accent) 8%, transparent)", "&:hover": { background: "color-mix(in srgb, var(--accent) 10%, transparent)" } },
          },
          "& .MuiDataGrid-cell":              { color: "var(--text)", borderBottom: "none", fontFamily: "'Syne', sans-serif", fontSize: 13 },
          "& .MuiDataGrid-cell:focus":        { outline: "none" },
          "& .MuiDataGrid-cell:focus-within": { outline: "none" },
          "& .MuiDataGrid-footerContainer":   { background: "var(--surface2)", borderTop: "1px solid var(--border)" },
          "& .MuiTablePagination-root":        { color: "var(--text-dim)", fontFamily: "'DM Mono', monospace", fontSize: 12 },
          "& .MuiTablePagination-displayedRows": { color: "var(--text-dim)" },
          "& .MuiTablePagination-selectLabel":   { color: "var(--text-dim)" },
          "& .MuiTablePagination-actions button":       { color: "var(--text-dim)" },
          "& .MuiTablePagination-actions button:hover": { color: "var(--accent)" },
          "& .MuiCheckbox-root":         { color: "var(--text-muted)" },
          "& .MuiCheckbox-root.Mui-checked": { color: "var(--accent)" },
          "& .MuiDataGrid-scrollbar":    { scrollbarColor: "var(--border) transparent" },
          "& .MuiDataGrid-filler":       { background: "var(--surface2)" },
          "& .MuiDataGrid-filler > div": { borderTop: "none" },
          "& .table-header":             { background: "var(--surface2)", color: "var(--text-dim)", fontFamily: "'Syne', sans-serif", fontWeight: 700 },
        }}
      />
    </div>
  </div>
);

export default Table;