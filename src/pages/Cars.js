import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  CircularProgress,
} from "@mui/material";
import { db, collection, getDocs, storage } from "../firebase"; // Import storage correctly
import { getDownloadURL, ref } from "firebase/storage"; // Required for image URLs

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCars = async () => {
      try {
        console.log("Fetching cars from Firestore...");
        const querySnapshot = await getDocs(collection(db, "Cars"));
        const carList = querySnapshot.docs.map((doc) => {
          const car = doc.data();
          return {
            id: doc.id,
            ...car,
            images: Array.isArray(car.images) ? car.images : [], // Ensure images is an array
            imageUrls: [],
          };
        });
  
        console.log("Fetched cars:", carList);
  
        // Fetch image URLs for each car
        const updatedCars = await Promise.all(
          carList.map(async (car) => {
            const imageUrls = await Promise.all(
              car.images.map(async (imageRef) => {
                try {
                  const url = await getDownloadURL(ref(storage, imageRef));
                  return url;
                } catch (err) {
                  console.error(`Error fetching image: ${imageRef}`, err);
                  return null; // Ignore broken URLs
                }
              })
            );
            return { ...car, imageUrls: imageUrls.filter((url) => url !== null) }; // Filter out null URLs
          })
        );
  
        console.log("Cars with images:", updatedCars);
        setCars(updatedCars);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching car data:", err);
        setError("Failed to load car data. Please try again later.");
        setLoading(false);
      }
    };
  
    fetchCars();
  }, []);
  

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" sx={{ textAlign: "center", marginTop: 4 }}>
        {error}
      </Typography>
    );
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" sx={{ textAlign: "center", marginBottom: 3 }}>
        Available Cars
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {cars.map((car) => (
          <Grid item xs={12} sm={6} md={4} key={car.id}>
            <Card sx={{ maxWidth: 345 }}>
              {/* Image Slider */}
              <Box
                sx={{
                  position: "relative",
                  height: 200,
                  overflow: "hidden",
                  borderRadius: "4px",
                  backgroundColor: "#f5f5f5",
                }}
              >
                {car.imageUrls && car.imageUrls.length > 0 ? (
                  <Box
                    sx={{
                      display: "flex",
                      overflowX: "auto",
                      scrollSnapType: "x mandatory",
                    }}
                  >
                    {car.imageUrls.map((url, index) => (
                      <Box
                        key={index}
                        sx={{
                          flex: "0 0 100%",
                          height: "100%",
                          backgroundImage: `url(${url})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          scrollSnapAlign: "center",
                        }}
                      />
                    ))}
                  </Box>
                ) : (
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body2">No Images Available</Typography>
                  </Box>
                )}
              </Box>

              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {car.make} {car.model} ({car.year})
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Pickup & Delivery:{" "}
                  {car.pickDelivery === "yes" ? "Available" : "Not Available"}
                </Typography>
                <Button
                  variant="contained"
                  color="#FF0000"
                  sx={{ marginTop: 2 }}
                >
                  Rent Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Cars;
