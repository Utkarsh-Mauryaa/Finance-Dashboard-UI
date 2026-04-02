import { Skeleton } from "@mui/material";
const skeletonSx = { bgcolor: "rgba(255,255,255,0.05)", borderRadius: 2 };

export const LayoutLoaderAdmin = () => (
  <div style={{ padding: 8 }}>
    {Array.from({ length: 10 }).map((_, i) => (
      <Skeleton key={i} variant="rounded" height={60} sx={{ ...skeletonSx, mb: 1.5 }} />
    ))}
  </div>
);

export const LayoutLoaderDashboard = () => (
  <div style={{ display: "grid", gridTemplateColumns: "230px 1fr", height: "100vh", background: "#0d0f14" }}>
    <style>{`@media(max-width:768px){.lld-sidebar{display:none!important}}`}</style>
    <div className="lld-sidebar" style={{ borderRight: "1px solid #1e2330", padding: 12 }}>
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton key={i} variant="rounded" height={44} sx={{ ...skeletonSx, mb: 1.5 }} />
      ))}
    </div>
    <div style={{ padding: 24 }}>
      <Skeleton variant="rounded" height={64} sx={{ ...skeletonSx, mb: 3 }} />
      <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
        <Skeleton variant="rounded" height={350} sx={{ ...skeletonSx, flex: 2 }} />
        <Skeleton variant="rounded" height={350} sx={{ ...skeletonSx, flex: 1 }} />
      </div>
      <div style={{ display: "flex", gap: 16 }}>
        {[1, 2, 3].map(i => <Skeleton key={i} variant="rounded" height={100} sx={{ ...skeletonSx, flex: 1 }} />)}
      </div>
    </div>
  </div>
);