import React from "react";
import { Box, Typography, Card, CardContent, Avatar } from "@mui/material";

const teamMembers = [
    {
        name: "Nikhil Sethi",
        role: "CEO & Founder",
        image: "https://via.placeholder.com/150",
    },
    {
        
        name: "Aparna Anand",
        role: "CTO",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Rhythm Hasija",
        role: "Software Engineer",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Pratham Sethi",
        role: "Software Engineer",
        image: "https://via.placeholder.com/150",
    },
];

const About = () => {
    return (
        <Box sx={{ padding: 3 }}>
            <Typography
                variant="h5"
                sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    marginBottom: 3,
                    fontFamily: "Roboto, sans-serif",
                    color: "#FF0000",  // Dark color for the title
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Title shadow for better contrast
                }}
            >
                About Us
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    textAlign: "left", // Align the text left
                    marginBottom: 3,
                    color: "text.secondary",
                    fontSize: "1.1rem", // Slightly bigger text for readability
                }}
            >
                Founded in the heart of New Zealand, our car rental marketplace was born out of a simple yet ambitious vision: to make car rentals more accessible, affordable, and sustainable for everyone. With the rise of the sharing economy and a growing desire for flexible travel options, we set out to disrupt the traditional car rental industry. Our marketplace offers a peer-to-peer car rental service that allows individuals to rent out their vehicles and access cars whenever and wherever they need them. Whether you're a traveler looking for a short-term rental or a local needing a car for the weekend, we've got you covered.
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    textAlign: "left", // Align the text left
                    marginBottom: 3,
                    color: "text.secondary",
                    fontSize: "1.1rem",
                }}
            >
                Our journey started with a small team of passionate Kiwis who believed in the power of community and technology to create meaningful change. From the bustling streets of Auckland to the scenic drives along the South Island, we wanted to offer a platform that connects people, reduces costs, and promotes sustainability. 
                <br/><br/>
                As we grow, we are committed to providing top-quality vehicles, exceptional customer service, and an easy-to-use platform that makes renting a car simple and secure. Our goal is to empower people to explore New Zealand and beyond, without the hassle and expense of traditional car rental services.
            </Typography>

            <Typography variant="h5" sx={{ textAlign: "center", marginBottom: 3 }}>
                Meet the Team
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 2,
                }}
            >
                {teamMembers.map((member, index) => (
                    <Card
                        key={index}
                        sx={{
                            width: 250,
                            textAlign: "center",
                            boxShadow: 2,
                            borderRadius: 2,
                            padding: 2,
                        }}
                    >
                        <Avatar
                            src={member.image}
                            alt={member.name}
                            sx={{
                                width: 100,
                                height: 100,
                                margin: "0 auto",
                                marginBottom: 2,
                            }}
                        />
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                {member.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ color: "text.secondary", marginTop: 1 }}
                            >
                                {member.role}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default About;
