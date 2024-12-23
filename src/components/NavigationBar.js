import React, { useState } from "react";
import {
    Box,
    Button,
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setDrawerOpen(open);
    };

    const renderDrawerMenu = () => (
        <List>
            {["HOME", "ABOUT", "CARS", "CONTACT"].map((text, index) => (
                <ListItem button key={index}>
                    <Link to={text === "HOME" ? "/" : `/${text.toLowerCase()}`} style={{ textDecoration: "none", color: "inherit" }}>
                        <ListItemText primary={text} />
                    </Link>
                </ListItem>
            ))}
        </List>
    );

    return (
        <AppBar position="static" sx={{ backgroundColor: "black", boxShadow: "none" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                {isMobile ? (
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                ) : (
                    <Box sx={{ display: "flex", gap: 3 }}>
                        <Button color="inherit" component={Link} to="/">
                            HOME
                        </Button>
                        <Button color="inherit" component={Link} to="/about">
                            ABOUT
                        </Button>
                        <Button color="inherit" component={Link} to="/cars">
                            CARS
                        </Button>
                        <Button color="inherit" component={Link} to="/contact">
                            CONTACT
                        </Button>
                    </Box>
                )}
            </Toolbar>

            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    {renderDrawerMenu()}
                </Box>
            </Drawer>
        </AppBar>
    );
};

export default NavigationBar;
