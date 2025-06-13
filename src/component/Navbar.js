import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Divider,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

// MUI Icons
import ArticleIcon from "@mui/icons-material/Article";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import PersonIcon from "@mui/icons-material/Person";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CreateIcon from "@mui/icons-material/Create";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 240;

const Navbar = () => {
    const location = useLocation();

    const menuItems = [
        { text: "전체 글", to: "/allPage", icon: <ArticleIcon /> },
        { text: "인기 글", to: "/popular", icon: <WhatshotIcon /> },
        { text: "내가 쓴 글", to: "/myposts", icon: <PersonIcon /> },
        { text: "글쓰기", to: "/write", icon: <CreateIcon /> },
        { text: "My Page", to:"/myPage", icon:<BookmarkIcon/>}
    ];

    const bottomItems = [
        { text: "프로필 관리", to: "/profile", icon: <SettingsIcon /> },
        { text: "로그아웃", to: "/", icon: <LogoutIcon /> },
    ];

    return (
        <Box
            sx={{
                width: drawerWidth,
                height: "100vh",
                bgcolor: "#f9f9f9",
                borderRight: "1px solid #ddd",
                position: "fixed",
                top: 0,
                left: 0,
                pt: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "auto",
            }}
        >
            <Box sx={{flexGrow:1}}>
                <Typography
                    variant="h6"
                    sx={{ m: 2, fontWeight: "bold", fontSize: "1.2rem" }}
                >
                    게시판 메뉴
                </Typography>
                <List>
                    {menuItems.map(({ text, to, icon }) => (
                        <ListItem key={to} disablePadding>
                            <ListItemButton
                                component={Link}
                                to={to}
                                selected={location.pathname === to}
                                sx={{
                                    "&.Mui-selected": {
                                        backgroundColor: "#e0f7fa",
                                        color: "#00796b",
                                        fontWeight: "bold",
                                    },
                                    "&:hover": {
                                        backgroundColor: "#f1f1f1",
                                    },
                                }}
                            >
                                <ListItemIcon sx={{ color: "inherit" }}>{icon}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>

            <Box>
                <Divider />
                <List>
                    {bottomItems.map(({ text, to, icon }) => (
                        <ListItem key={to} disablePadding>
                            <ListItemButton
                                component={Link}
                                to={to}
                                sx={{
                                    pb:3,
                                    "&:hover": {
                                        backgroundColor: "#f1f1f1",
                                    },
                                }}
                            >
                                <ListItemIcon>{icon}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
};

export default Navbar;
