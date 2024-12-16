import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Phone, Login, PersonAdd, Language } from "@mui/icons-material";

const Header = () => {
    return (
        <Box>
            {/* Top Header Bar */}
            <Box sx={{ backgroundColor: "#e32424", color: "white", py: 1, px: 2, display: "flex", justifyContent: "space-between" }}>
                <Typography>
                    <Phone sx={{ mr: 1 }} />
                    Need Help? Call: <strong>+321 123 45 978</strong>
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                    <Button color="inherit" startIcon={<Login />}>
                        Login
                    </Button>
                    <Button color="inherit" startIcon={<PersonAdd />}>
                        Register
                    </Button>
                    <Button color="inherit" startIcon={<Language />}>
                        Language
                    </Button>
                </Box>
            </Box>
            {/* Logo & Contact Information */}
            <Box sx={{ backgroundColor: "white", py: 2, px: 3, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {/* Logo */}
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "#e32424" }}>
                    Car Rental
                </Typography>
                {/* Contact Info */}
                <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1e1e1e" }}>
                        New Zealand
                    </Typography>
                    <Typography sx={{ color: "gray" }}>Melbourne City, Australia</Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1e1e1e" }}>
                        Monday to Friday
                    </Typography>
                    <Typography sx={{ color: "gray" }}>9:00am - 6:00pm</Typography>
                </Box>
                {/* Call to Action Button */}
                <Button variant="contained" sx={{ backgroundColor: "#e32424", "&:hover": { backgroundColor: "#c21c1c" } }}>
                    REQUEST A CALL
                </Button>
            </Box>
        </Box>
    );
};

export default Header;
