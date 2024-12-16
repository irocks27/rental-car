// import React, { useState } from "react";
// import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, CssBaseline, Box, Button } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import { Link } from "react-router-dom";
// import Search from "./Search";
import carBackground from "../images/bgImage.jpg";

// const drawerWidth = 240;

// const Dashboard = () => {
//     const [isSidebarOpen, setSidebarOpen] = useState(false);

//     const toggleSidebar = () => {
//         setSidebarOpen(!isSidebarOpen);
//     };

//     return (
//         <Box
//             sx={{
//                 display: "flex",
//                 background: `url(${carBackground}) no-repeat center center fixed`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 height: "100vh", // Full viewport height
//                 margin: 0,
//                 overflow: "hidden",
//             }}
//         >
//             <CssBaseline />
//             {/* AppBar */}
//             <AppBar
//                 position="fixed"
//                 sx={{
//                     zIndex: (theme) => theme.zIndex.drawer + 1,
//                     background: "linear-gradient(to right, #1976d2, #2196f3)", // Gradient background
//                     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Shadow for depth
//                 }}
//             >
//                 <Toolbar
//                     sx={{
//                         backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background for contrast
//                         backdropFilter: "blur(5px)", // Optional: Adds blur effect to the background
//                         color: "white",
//                         position: "fixed",
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         zIndex: 1000,
//                     }}
//                 >
//                     <IconButton color="inherit" edge="start" onClick={toggleSidebar} sx={{ marginRight: 2 }}>
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" noWrap component="div">
//                         Car Rental App
//                     </Typography>
//                     <Box sx={{ ml: "auto" }}>
//                         <Button
//                             color="inherit"
//                             sx={{
//                                 backgroundColor: "rgba(255, 255, 255, 0.2)",
//                                 color: "white",
//                                 marginRight: 1,
//                                 padding: "6px 16px",
//                                 borderRadius: "20px",
//                                 textTransform: "none",
//                                 fontWeight: "bold",
//                                 "&:hover": {
//                                     backgroundColor: "rgba(255, 255, 255, 0.3)",
//                                 },
//                             }}
//                         >
//                             Login
//                         </Button>
//                         <Button
//                             variant="outlined"
//                             sx={{
//                                 color: "white",
//                                 borderColor: "white",
//                                 backgroundColor: "rgba(255, 255, 255, 0.2)",
//                                 padding: "6px 16px",
//                                 borderRadius: "20px",
//                                 textTransform: "none",
//                                 fontWeight: "bold",
//                                 "&:hover": {
//                                     backgroundColor: "rgba(255, 255, 255, 0.3)",
//                                     borderColor: "rgba(255, 255, 255, 0.5)",
//                                 },
//                             }}
//                         >
//                             Register
//                         </Button>
//                     </Box>
//                 </Toolbar>
//             </AppBar>

//             {/* Sidebar Drawer */}
//             <Drawer
//                 variant="temporary"
//                 open={isSidebarOpen}
//                 onClose={toggleSidebar}
//                 sx={{
//                     "& .MuiDrawer-paper": {
//                         width: drawerWidth,
//                         boxSizing: "border-box",
//                     },
//                 }}
//             >
//                 <IconButton onClick={toggleSidebar} sx={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
//                     <CloseIcon />
//                 </IconButton>
//                 <List>
//                     <ListItem button>
//                         <ListItemText primary="Home" />
//                     </ListItem>
//                     <ListItem button>
//                         <ListItemText primary="About" />
//                     </ListItem>
//                     <ListItem button>
//                         <ListItemText primary="Contact" />
//                     </ListItem>
//                 </List>
//             </Drawer>

//             {/* Page Content */}
//             <Box
//                 component="main"
//                 sx={{
//                     flexGrow: 1,
//                     p: 3,
//                     marginTop: "64px",
//                 }}
//             >
//                 <Search />
//             </Box>
//         </Box>
//     );
// };

// export default Dashboard;

import React from "react";
import { Box, Typography } from "@mui/material";
import Search from "./Search";
import Header from "./Header";
import NavigationBar from "./NavigationBar";

function Dashboard() {
    return (
        <Box>
            {/* Top Header Bar */}
            <Header />
            {/* Navigation Bar */}
            <NavigationBar />

            <Box
                sx={{
                    backgroundImage: `url(${carBackground})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white",
                    textAlign: "center",
                    py: 10,
                    height: "100vh",
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                    For Rent $70 Per Day
                </Typography>
                <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                    Reserved Now
                </Typography>
            </Box>
            {/* Search Section */}
            <Search />
        </Box>
    );
}

export default Dashboard;
