import React, { useState } from "react";
import Navbar from "../component/Navbar";
import { Box, IconButton, AppBar, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

const MainLayout = ({ children, title }) => {
  const [open, setOpen] = useState(true); // 사이드바 열림 상태

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* AppBar 상단 바 - 토글 버튼 포함 */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          ml: open ? `${drawerWidth}px` : 0, // 사이드바 열리면 밀기
          width: open ? `calc(100% - ${drawerWidth}px)` : "100%",
          transition: "all 0.3s",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>

      {/* 사이드바 */}
      {open && <Navbar />}

      {/* 메인 콘텐츠 영역 */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: "64px", // AppBar 높이만큼 띄우기 (기본 MUI AppBar 높이)
          width: open ? `calc(100% - ${drawerWidth}px)` : "100%",
          transition: "all 0.3s",
          height: "calc(100vh - 64px)", // 뷰포트 높이에서 AppBar 높이 뺌
          overflow: "auto", // 필요하면 스크롤
        }}
      >
        {React.cloneElement(children, { sidebarOpen: open })}
      </Box>
    </Box>
  );
};

export default MainLayout;
