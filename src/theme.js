
export const theme = {
  bg: "#0d0f14",
  surface: "#13161e",
  surface2: "#1a1e28",
  border: "#1e2330",
  borderLight: "rgba(255,255,255,0.08)",
  accent: "#63dcbe",
  accentHover: "#4ecfb0",
  accentRose: "#e05c7a",
  text: "#e8eaf0",
  textMuted: "#5a607a",
  textDim: "#8890a8",
};

export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@400;500&display=swap');
  
  :root {
    --bg: #0d0f14;
    --surface: #13161e;
    --surface2: #1a1e28;
    --border: #1e2330;
    --border-light: rgba(255,255,255,0.08);
    --accent: #63dcbe;
    --accent-hover: #4ecfb0;
    --accent-rose: #e05c7a;
    --text: #e8eaf0;
    --text-muted: #5a607a;
    --text-dim: #8890a8;
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Syne', sans-serif;
  }

  .howdy-input {
    width: 100%;
    background: rgba(255,255,255,0.04);
    border: 1px solid var(--border-light);
    border-radius: 12px;
    padding: 11px 16px;
    color: var(--text);
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    font-family: 'DM Mono', monospace;
  }
  .howdy-input::placeholder { color: var(--text-muted); }
  .howdy-input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(99,220,190,0.1); }

  .howdy-label {
    font-size: 11px;
    color: var(--text-muted);
    font-family: 'DM Mono', monospace;
    letter-spacing: 0.08em;
    margin-bottom: 6px;
    display: block;
    text-transform: uppercase;
  }

  .howdy-btn {
    background: var(--accent);
    color: var(--bg);
    border: none;
    border-radius: 10px;
    padding: 11px 22px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    font-family: 'Syne', sans-serif;
    transition: transform 0.15s, box-shadow 0.15s, opacity 0.2s;
    letter-spacing: 0.3px;
    white-space: nowrap;
  }
  .howdy-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(99,220,190,0.25); }
  .howdy-btn:active { transform: translateY(0); }
  .howdy-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; box-shadow: none; }

  .howdy-btn-outline {
    background: transparent;
    color: var(--text);
    border: 1px solid var(--border-light);
    border-radius: 10px;
    padding: 10px 22px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    font-family: 'Syne', sans-serif;
    transition: border-color 0.2s, color 0.2s, transform 0.15s;
  }
  .howdy-btn-outline:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-1px); }

  .howdy-btn-danger {
    background: transparent;
    color: var(--accent-rose);
    border: 1px solid rgba(224,92,122,0.3);
    border-radius: 10px;
    padding: 10px 22px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    font-family: 'Syne', sans-serif;
    transition: background 0.2s, transform 0.15s;
  }
  .howdy-btn-danger:hover { background: rgba(224,92,122,0.1); transform: translateY(-1px); }

  .howdy-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    overflow: hidden;
  }

  .howdy-err {
    color: var(--accent-rose);
    font-size: 11px;
    margin-top: 4px;
    font-family: 'DM Mono', monospace;
  }

  /* MUI overrides for dark theme */
  .MuiDialog-paper {
    background: var(--surface) !important;
    border: 1px solid var(--border) !important;
    border-radius: 20px !important;
    color: var(--text) !important;
  }
  .MuiDialogTitle-root { color: var(--text) !important; font-family: 'Syne', sans-serif !important; }
  .MuiDialogContentText-root { color: var(--text-muted) !important; font-family: 'DM Mono', monospace !important; font-size: 13px !important; }
  .MuiMenu-paper {
    background: var(--surface) !important;
    border: 1px solid var(--border) !important;
    border-radius: 14px !important;
    color: var(--text) !important;
    box-shadow: 0 20px 60px rgba(0,0,0,0.6) !important;
  }
  .MuiMenuItem-root { color: var(--text) !important; font-family: 'Syne', sans-serif !important; }
  .MuiMenuItem-root:hover { background: rgba(99,220,190,0.08) !important; }
  .MuiTooltip-tooltip { background: var(--surface2) !important; color: var(--text) !important; border: 1px solid var(--border) !important; font-family: 'DM Mono', monospace !important; font-size: 11px !important; }
  .MuiDrawer-paper { background: var(--surface) !important; border-right: 1px solid var(--border) !important; }
  .MuiTextField-root input { color: var(--text) !important; font-family: 'DM Mono', monospace !important; }
  .MuiTextField-root .MuiOutlinedInput-notchedOutline { border-color: var(--border-light) !important; }
  .MuiTextField-root .Mui-focused .MuiOutlinedInput-notchedOutline { border-color: var(--accent) !important; }
  .MuiInputLabel-root { color: var(--text-muted) !important; }
  .MuiDataGrid-root { background: var(--surface) !important; color: var(--text) !important; border-color: var(--border) !important; font-family: 'Syne', sans-serif !important; }
  .MuiDataGrid-columnHeader { background: var(--surface2) !important; color: var(--text-dim) !important; }
  .MuiDataGrid-row:hover { background: rgba(99,220,190,0.04) !important; }
  .MuiDataGrid-footerContainer { background: var(--surface2) !important; border-top-color: var(--border) !important; }
  .MuiTablePagination-root { color: var(--text-muted) !important; }
  .MuiIconButton-root { color: var(--text-dim) !important; }
  .MuiCircularProgress-root { color: var(--accent) !important; }
  .table-header { background: var(--surface2) !important; color: var(--text-dim) !important; font-family: 'Syne', sans-serif !important; font-weight: 600 !important; }
`;