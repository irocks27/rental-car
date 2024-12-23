import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Login from "./Login"; // Import the Login modal component

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false); // State to manage modal open/close
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleLoginClick = () => {
    setOpenLoginModal(true); // Open the login modal when clicked
  };

  const renderMenu = () => (
    <List>
      <ListItem button onClick={handleLoginClick}> {/* Trigger login modal on click */}
        <ListItemText primary="Login" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Register" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Be a Host" />
      </ListItem>
    </List>
  );

  return (
    <Box>
      {/* Main Header (Logo and Buttons) */}
      <Box
        sx={{
          backgroundColor: "white", // White background for the header
          py: 2,
          px: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Subtle shadow for a modern look
        }}
      >
        {/* Logo Placeholder */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="/images/myles.jpg" // Make sure to update this with the correct path
            alt="Logo"
            style={{
              height: "50px", // Set the height based on your header size
              width: "auto", // Keep the aspect ratio of the image intact
            }}
          />
        </Box>

        {/* Hamburger Menu on Mobile */}
        {isMobile && (
          <IconButton
            edge="end"
            color="inherit"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Navigation Buttons (for larger screens) */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              color="inherit"
              onClick={handleLoginClick} // Trigger modal on button click
              sx={{
                textTransform: "uppercase", // Make text uppercase
                fontWeight: "bold", // Bold text for prominence
                "&:hover": {
                  backgroundColor: "#f2f2f2", // Light hover effect
                  borderRadius: "8px",
                },
              }}
            >
              Login
            </Button>
            <Button
              color="inherit"
              sx={{
                textTransform: "uppercase", // Make text uppercase
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#f2f2f2",
                  borderRadius: "8px",
                },
              }}
            >
              Register
            </Button>
            <Button
              color="inherit"
              sx={{
                textTransform: "uppercase", // Make text uppercase
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#f2f2f2",
                  borderRadius: "8px",
                },
              }}
            >
              Be a Host
            </Button>
          </Box>
        )}
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {renderMenu()}
        </Box>
      </Drawer>

      {/* Login Modal */}
      <Login open={openLoginModal} onClose={() => setOpenLoginModal(false)} />
    </Box>
  );
};

export default Header;
