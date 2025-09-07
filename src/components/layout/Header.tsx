import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  alpha,
  Container,
} from "@mui/material";
import { Brightness4, Brightness7, Menu, Close } from "@mui/icons-material";
import { motion } from "framer-motion";
import type { Page } from "../../types/index";

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({
  currentPage,
  setCurrentPage,
  isDarkMode,
  toggleTheme,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems: { page: Page; label: string }[] = [
    { page: "home", label: "Home" },
    { page: "about", label: "About" },
    { page: "projects", label: "Projects" },
    { page: "contact", label: "Contact" },
  ];

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  const NavButton = ({ page, label }: any) => {
    const isActive = currentPage === page;

    return (
      <Box
        component={motion.div}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        sx={{
          position: "relative",
          mx: 1,
          cursor: "pointer",
        }}
        onClick={() => setCurrentPage(page)}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: isActive ? 600 : 400,
            color: isActive ? "primary.main" : "text.primary",
            px: 2,
            py: 1,
            borderRadius: 2,
            transition: "all 0.3s ease",
            "&:hover": {
              color: "primary.main",
              backgroundColor: alpha(theme.palette.primary.main, 0.08),
              boxShadow:
                alpha(theme.palette.primary.main, 0.2) + " 0px 4px 10px",
            },
          }}
        >
          {label}
        </Typography>
        {isActive && (
          <Box
            component={motion.div}
            layoutId="activeTab"
            sx={{
              position: "absolute",
              bottom: -4,
              left: 0,
              right: 0,
              height: 3,
              backgroundColor: "primary.main",
              borderRadius: 3,
            }}
          />
        )}
      </Box>
    );
  };

  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        elevation={2}
        sx={{
          backdropFilter: "blur(12px)",
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)"
              : "linear-gradient(135deg, #E0E7FF 0%, #C7D2FE 30%, #A5B4FC 60%, #C7D2FE 100%)",
          borderBottom: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{ justifyContent: "space-between", px: { xs: 1, sm: 2 } }}
          >
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => setCurrentPage("home")}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
                fontWeight: 700,
                fontSize: { xs: 22, sm: 26, md: 30 },
                color: theme.palette.mode === "dark" ? "#E0E7FF" : "#1E3A8A",
                letterSpacing: 0.8,
                fontFamily: "'Fira Code', monospace", // code font for dev aesthetic
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  color: theme.palette.mode === "dark" ? "#A5B4FC" : "#3B82F6",
                  textShadow: "0 2px 10px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Typography
                component="span"
                sx={{
                  color: "primary.main",
                  fontWeight: "700",
                  fontSize: "30px",
                }}
              >
                {"<"}
              </Typography>
              Suraj.dev
              <Typography
                component="span"
                sx={{
                  color: "primary.main",
                  fontWeight: "700",
                  fontSize: "30px",
                }}
              >
                {"/>"}
              </Typography>
            </Box>

            {/* Navigation */}
            {isMobile ? (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  onClick={toggleTheme}
                  color="inherit"
                  sx={{ mr: 1 }}
                >
                  {isDarkMode ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
                <IconButton color="inherit" onClick={handleDrawerToggle}>
                  <Menu />
                </IconButton>
              </Box>
            ) : (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ display: "flex" }}>
                  {navItems.map(({ page, label }) => (
                    <NavButton key={page} page={page} label={label} />
                  ))}
                </Box>

                <motion.div
                  onClick={toggleTheme}
                  initial={false}
                  animate={{
                    rotate: isDarkMode ? 180 : 0,
                    scale: 1.2,
                    color: isDarkMode
                      ? theme.palette.warning.main
                      : theme.palette.grey[700],
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  style={{ cursor: "pointer", marginLeft: 16 }}
                >
                  {isDarkMode ? (
                    <Brightness7 sx={{ fontSize: 26 }} />
                  ) : (
                    <Brightness4 sx={{ fontSize: 26 }} />
                  )}
                </motion.div>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: "transparent", // make it transparent
            backgroundImage:
              theme.palette.mode === "dark"
                ? "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)"
                : "linear-gradient(135deg, #E0E7FF 0%, #C7D2FE 30%, #A5B4FC 60%, #C7D2FE 100%)",
            boxShadow: "0 0 20px rgba(0,0,0,0.3)",
            backdropFilter: "blur(12px)", // same as header
          },
        }}
        sx={{
          "& .MuiBackdrop-root": {
            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)"
                : "linear-gradient(135deg, #E0E7FF 0%, #C7D2FE 30%, #A5B4FC 60%, #C7D2FE 100%)",
            backdropFilter: "blur(4px)",
          },
        }}
      >
        {/* Header with close button and theme toggle */}
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Navigation
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={toggleTheme} color="inherit" sx={{ mr: 1 }}>
              {isDarkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>

            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                backgroundColor: alpha(theme.palette.background.paper, 0.2),
                "&:hover": {
                  backgroundColor: alpha(theme.palette.primary.main, 0.15),
                },
              }}
            >
              <Close />
            </IconButton>
          </Box>
        </Box>

        {/* Navigation List with improved styling */}
        <List sx={{ p: 2 }}>
          {navItems.map(({ page, label }) => {
            const isActive = currentPage === page;

            return (
              <ListItem
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  handleDrawerToggle();
                }}
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  px: 2,
                  py: 1.5,
                  backgroundColor: isActive
                    ? alpha(theme.palette.primary.main, 0.15)
                    : "transparent",
                  border: isActive
                    ? `1px solid ${alpha(theme.palette.primary.main, 0.3)}`
                    : "1px solid transparent",
                  "&:hover": {
                    backgroundColor: alpha(
                      theme.palette.primary.main,
                      isActive ? 0.25 : 0.08
                    ),
                    transform: "translateX(4px)",
                  },
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                }}
              >
                <ListItemText
                  primary={label}
                  primaryTypographyProps={{
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "primary.main" : "text.primary",
                  }}
                />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
