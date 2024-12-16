// import React, { useState } from "react";
// import { TextField, Button, MenuItem, Typography, Box, Grid2 } from "@mui/material";

// const Search = () => {
//     const [carType, setCarType] = useState("SUV");

//     const handleCarTypeChange = (event) => {
//         setCarType(event.target.value); // Update the selected car type
//     };

//     return (
//         <Box
//             sx={{
//                 border: "1px solid #ccc",
//                 borderRadius: "16px",
//                 padding: "20px",
//                 margin: "0 auto",
//                 maxWidth: "800px",
//                 backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent white
//                 boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//             }}
//         >
//             <Typography variant="h6" gutterBottom>
//                 Search for Cars
//             </Typography>
//             <Grid2 container spacing={3}>
//                 <Grid2 xs={12} sm={6} md={3}>
//                     <TextField label="Location" variant="outlined" fullWidth placeholder="Enter a city" />
//                 </Grid2>
//                 <Grid2 xs={12} sm={6} md={3}>
//                     <TextField
//                         label="Pickup Date"
//                         type="date"
//                         variant="outlined"
//                         fullWidth
//                         InputLabelProps={{
//                             shrink: true,
//                         }}
//                     />
//                 </Grid2>
//                 <Grid2 xs={12} sm={6} md={3}>
//                     <TextField
//                         label="Dropoff Date"
//                         type="date"
//                         variant="outlined"
//                         fullWidth
//                         InputLabelProps={{
//                             shrink: true,
//                         }}
//                     />
//                 </Grid2>
//                 <Grid2 xs={12} sm={6} md={2}>
//                     <TextField select label="Car Type" variant="outlined" fullWidth value={carType} onChange={handleCarTypeChange}>
//                         <MenuItem value="SUV">SUV</MenuItem>
//                         <MenuItem value="Sedan">Sedan</MenuItem>
//                         <MenuItem value="Hatchback">Hatchback</MenuItem>
//                     </TextField>
//                 </Grid2>
//                 <Grid2 xs={12} sm={6} md={1}>
//                     <Button
//                         variant="contained"
//                         color="primary"
//                         fullWidth
//                         sx={{
//                             height: "100%",
//                             backgroundColor: "#1976d2",
//                             "&:hover": {
//                                 backgroundColor: "#1565c0",
//                             },
//                         }}
//                     >
//                         Search
//                     </Button>
//                 </Grid2>
//             </Grid2>
//         </Box>
//     );
// };

// export default Search;

import React from "react";
import { Box, Typography, TextField, MenuItem, Button, Grid2 } from "@mui/material";
import { CalendarToday, AccessTime } from "@mui/icons-material";

const carOptions = [
    { value: "AC Car", label: "AC Car" },
    { value: "Non-AC Car", label: "Non-AC Car" },
    { value: "Luxury Car", label: "Luxury Car" },
];

const Search = () => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "white",
                boxShadow: 3,
                borderRadius: 2,
                p: 3,
                mx: "auto",
                width: "90%",
                mt: -8,
                gap: 2,
            }}
        >
            {/* Left Banner */}
            <Box
                sx={{
                    backgroundColor: "#e32424",
                    color: "white",
                    p: 3,
                    borderRadius: "8px 0 0 8px",
                    flex: 1,
                    minWidth: "200px",
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Search Your Best Cars Here.
                </Typography>
            </Box>

            {/* Search Form */}
            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    flex: 3,
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                }}
            >
                <Grid2 container spacing={3}>
                    <Grid2 xs={12} sm={6} md={4}>
                        <TextField label="From Address" fullWidth size="small" />
                    </Grid2>
                    <Grid2 xs={12} sm={6} md={4}>
                        <TextField label="To Address" fullWidth size="small" />
                    </Grid2>
                    <Grid2 xs={12} sm={6} md={4}>
                        <TextField select label="Car Type" defaultValue="AC Car" fullWidth size="small">
                            {carOptions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid2>
                </Grid2>
                <Grid2 container spacing={3}>
                    <Grid2 xs={12} sm={6} md={4}>
                        <TextField
                            label="Journey Date"
                            type="date"
                            fullWidth
                            size="small"
                            InputLabelProps={{ shrink: true }}
                            InputProps={{
                                endAdornment: <CalendarToday color="action" fontSize="small" />,
                            }}
                        />
                    </Grid2>
                    <Grid2 xs={12} sm={6} md={4}>
                        <TextField
                            label="Journey Time"
                            type="time"
                            fullWidth
                            size="small"
                            InputLabelProps={{ shrink: true }}
                            InputProps={{
                                endAdornment: <AccessTime color="action" fontSize="small" />,
                            }}
                        />
                    </Grid2>
                    <Grid2 xs={12} sm={6} md={4}>
                        {/* Find Car Button */}
                        <Box>
                            <Button
                                variant="outlined"
                                sx={{
                                    borderColor: "#e32424",
                                    color: "#e32424",
                                    "&:hover": {
                                        backgroundColor: "#e32424",
                                        color: "white",
                                        borderColor: "#e32424",
                                    },
                                    height: "100%",
                                    px: 4,
                                }}
                            >
                                FIND CAR
                            </Button>
                        </Box>
                    </Grid2>
                </Grid2>
            </Box>
        </Box>
    );
};

export default Search;
