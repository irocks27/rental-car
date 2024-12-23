import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import carBackground from "../images/bgImage.jpg";
import Search from "./Search";
//import NavigationBar from "./NavigationBar";

function Dashboard() {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    return (
        <Box>
            {/* Navigation Bar */}
            

            {/* Hero Section */}
            <Box
                sx={{
                    backgroundImage: `url(${carBackground})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white",
                    textAlign: "center",
                    py: isMobile ? 5 : 10,
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant={isMobile ? "h6" : "h5"}
                    sx={{ fontWeight: "bold", mb: 2 }}
                >
                    Drive anywhere, anytime with New Zealand's largest car-sharing marketplace
                </Typography>
               
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#e32424",
                        color: "white",
                        "&:hover": { backgroundColor: "#c21c1c" },
                        px: 4,
                        py: 1.5,
                    }}
                >
                    Get Started
                </Button>
            </Box>

            {/* Search Section */}
            <Box
                sx={{
                    px: isMobile ? 2 : 10,
                    py: 5,
                    backgroundColor: "#f9f9f9",
                    textAlign: "center",
                }}
            >
                <Search />
            </Box>
        </Box>
    );
}

export default Dashboard;
