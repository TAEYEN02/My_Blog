import { Box } from "@mui/material";

const drawerWidth = 240;

const ResponsiveContainer = ({ sidebarOpen, children }) => {
  return (
    <Box
      sx={{
        transition: "all 0.3s",
        width: "auto",
        height: '100%',       
        bgcolor: "#fff",
        borderRadius: 2,
        p: 2,
        ml: sidebarOpen ? `${drawerWidth}px` : 0,
        mr: "auto",
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </Box>
  );
};

export default ResponsiveContainer;
