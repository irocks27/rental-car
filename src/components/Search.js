import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    TextField,
    MenuItem,
    Button,
    Grid,
    useMediaQuery,
    CircularProgress,
    Checkbox,
    FormControlLabel,
} from "@mui/material";
import { CalendarToday, AccessTime } from "@mui/icons-material";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const carOptions = [
    { value: "Sedan", label: "Sedan" },
    { value: "RV/Suv", label: "RV/Suv" },
    { value: "Hatchback", label: "Hatchback" },
    { value: "Station Wagon", label: "Station Wagon" },
    { value: "Ute", label: "Ute" },
    { value: "Van", label: "Van" },
    { value: "Truck", label: "Truck" },
];

const Search = () => {
    const [fromAddress, setFromAddress] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [cities, setCities] = useState([]);
    const [loadingCities, setLoadingCities] = useState(true);
    const [homeDelivery, setHomeDelivery] = useState(false);

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        debounce: 300,
    });

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "locations"));
                const cityList = querySnapshot.docs.map((doc) => doc.data().name);
                setCities(cityList);
            } catch (error) {
                console.error("Error fetching cities: ", error);
            } finally {
                setLoadingCities(false);
            }
        };

        fetchCities();
    }, []);

    const handleCityChange = (event) => setSelectedCity(event.target.value);

    const handleFromAddressChange = (event) => {
        const input = event.target.value;
        setValue(input);
        setFromAddress(input);
    };

    const handleSuggestionClick = async (suggestion) => {
        const address = suggestion.description;
        setFromAddress(address);
        setValue(address, false);
        clearSuggestions();

        try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            console.log("Selected Address Coordinates:", { lat, lng });
        } catch (error) {
            console.error("Error fetching coordinates:", error);
        }
    };

    const toggleHomeDelivery = (event) => setHomeDelivery(event.target.checked);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
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
                flexWrap: "wrap",
            }}
        >
            {/* Left Banner */}
            <Box
                sx={{
                    backgroundColor: "#e32424",
                    color: "white",
                    p: 3,
                    borderRadius: "8px 0 0 8px",
                    textAlign: isMobile ? "center" : "left",
                    flex: isMobile ? "unset" : 1,
                }}
            >
                <Typography variant={isMobile ? "h6" : "h5"} sx={{ fontWeight: "bold" }}>
                    Search Your Best Cars Here.
                </Typography>
            </Box>

            {/* Search Form */}
            <Grid container spacing={3} sx={{ flex: 3 }}>
                {/* Select City */}
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        select
                        label="Select City"
                        fullWidth
                        size="small"
                        value={selectedCity}
                        onChange={handleCityChange}
                        disabled={loadingCities}
                    >
                        {loadingCities ? (
                            <MenuItem disabled>
                                <CircularProgress size={20} />
                            </MenuItem>
                        ) : (
                            cities.map((city, index) => (
                                <MenuItem key={index} value={city}>
                                    {city}
                                </MenuItem>
                            ))
                        )}
                    </TextField>
                </Grid>

                {/* Location */}
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        label="Location"
                        fullWidth
                        size="small"
                        value={fromAddress}
                        onChange={handleFromAddressChange}
                    />
                    {ready && status === "OK" && (
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            {data.map((suggestion, index) => (
                                <li
                                    key={index}
                                    style={{
                                        cursor: "pointer",
                                        padding: "4px 8px",
                                        backgroundColor: "#f9f9f9",
                                        borderBottom: "1px solid #ddd",
                                    }}
                                    onClick={() => handleSuggestionClick(suggestion)}
                                >
                                    {suggestion.description}
                                </li>
                            ))}
                        </ul>
                    )}
                </Grid>

                {/* Journey Start Date */}
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        label="Journey Start Date"
                        type="date"
                        fullWidth
                        size="small"
                        InputLabelProps={{ shrink: true }}
                        InputProps={{
                            endAdornment: <CalendarToday color="action" fontSize="small" />,
                        }}
                    />
                </Grid>

                {/* Journey End Date */}
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        label="Journey End Date"
                        type="date"
                        fullWidth
                        size="small"
                        InputLabelProps={{ shrink: true }}
                        InputProps={{
                            endAdornment: <CalendarToday color="action" fontSize="small" />,
                        }}
                    />
                </Grid>

                {/* Home Delivery Checkbox */}
                <Grid item xs={12} sm={6} md={4}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={homeDelivery}
                                onChange={toggleHomeDelivery}
                                color="primary"
                            />
                        }
                        label="Home Delivery and Pickup"
                    />
                </Grid>

                {/* FIND CAR Button */}
                <Grid item xs={12} sm={6} md={4}>
                    <Button
                        variant="outlined"
                        fullWidth
                        sx={{
                            borderColor: "#e32424",
                            color: "#e32424",
                            "&:hover": {
                                backgroundColor: "#e32424",
                                color: "white",
                                borderColor: "#e32424",
                            },
                        }}
                    >
                        FIND CAR
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Search;
