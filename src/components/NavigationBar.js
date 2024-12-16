import React from "react";
import { Box, Button, TextField, AppBar, Toolbar, InputAdornment, IconButton, Badge } from "@mui/material";

const NavigationBar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: "black", boxShadow: "none" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", gap: 3 }}>
                    <Button color="inherit">HOME</Button>
                    <Button color="inherit">ABOUT</Button>
                    <Button color="inherit">SERVICE</Button>
                    <Button color="inherit">CARS</Button>
                    <Button color="inherit">GALLERY</Button>
                    <Button color="inherit">SHOP</Button>
                    <Button color="inherit">PAGES</Button>
                    <Button color="inherit">CONTACT</Button>
                </Box>
                {/* Search and Cart */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Search"
                        InputProps={{
                            sx: { backgroundColor: "white", borderRadius: "20px" },
                            endAdornment: <InputAdornment position="end">{/* <Search /> */}</InputAdornment>,
                        }}
                    />
                    <IconButton color="inherit">
                        <Badge badgeContent={2} color="error">
                            {/* <ShoppingCart /> */}
                        </Badge>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavigationBar;
