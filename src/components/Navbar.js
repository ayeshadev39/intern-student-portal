import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Box,
  Avatar,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import {
  Home as HomeIcon,
  People,
  PersonAdd,
  Brightness4,
  Brightness7,
  School,
} from "@mui/icons-material";

function Navbar({ darkMode, toggleDarkMode }) {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/", icon: <HomeIcon /> },
    { label: "Students", path: "/students", icon: <People /> },
    { label: "Add Student", path: "/add", icon: <PersonAdd /> },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: darkMode
          ? "rgba(30, 41, 59, 0.9)"
          : "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        color: darkMode ? "#fff" : "#1e293b",
      }}
    >
      <Toolbar>
        <Avatar
          sx={{
            bgcolor: "primary.main",
            mr: 2,
            background: "linear-gradient(135deg, #667eea, #764ba2)",
          }}
        >
          <School />
        </Avatar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: 700,
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Intern Student Portal
        </Typography>

        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              startIcon={item.icon}
              sx={{
                color: location.pathname === item.path ? "primary.main" : "inherit",
                fontWeight: location.pathname === item.path ? 700 : 400,
                borderRadius: 3,
                px: 2,
                transition: "all 0.3s",
                "&:hover": {
                  transform: "translateY(-2px)",
                  bgcolor: "rgba(99, 102, 241, 0.1)",
                },
              }}
            >
              {item.label}
            </Button>
          ))}

          <IconButton onClick={toggleDarkMode} color="inherit">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;