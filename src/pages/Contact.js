import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send an email or log the data)
        console.log("Form Submitted:", formData);
    };

    // Inline CSS styles
    const styles = {
        contactContainer: {
            maxWidth: "900px",
            margin: "0 auto",
            padding: "40px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            fontFamily: "Arial, sans-serif",
            border: "1px solid #e0e0e0",
        },
        heading: {
            textAlign: "center",
            color: "#d32f2f",  // Red color for the heading
            fontSize: "32px",
            marginBottom: "20px",
        },
        paragraph: {
            textAlign: "center",
            color: "#555",
            fontSize: "18px",
            marginBottom: "40px",
        },
        form: {
            display: "flex",
            flexDirection: "column",
            gap: "20px",
        },
        formGroup: {
            display: "flex",
            flexDirection: "column",
            gap: "8px",
        },
        label: {
            fontWeight: "bold",
            color: "#333",
        },
        input: {
            padding: "12px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            fontSize: "16px",
            transition: "border 0.3s ease",
        },
        inputFocus: {
            borderColor: "#d32f2f",  // Red focus border color
            outline: "none",
        },
        textarea: {
            padding: "12px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            fontSize: "16px",
            resize: "vertical",
            minHeight: "150px",
            transition: "border 0.3s ease",
        },
        submitButton: {
            padding: "12px 24px",
            backgroundColor: "#d32f2f",  // Red background for the button
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontSize: "18px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
        },
        submitButtonHover: {
            backgroundColor: "#b71c1c",  // Darker red on hover
        },
        inputFocusStyle: {
            borderColor: "#d32f2f",  // Red border on focus
        },
    };

    return (
        <div style={styles.contactContainer}>
            <h1 style={styles.heading}>Contact Us</h1>
            <p style={styles.paragraph}>
                Have questions or need assistance? Fill out the form below, and we'll get back to you!
            </p>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="name" style={styles.label}>
                        Full Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="email" style={styles.label}>
                        Email Address:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="phone" style={styles.label}>
                        Phone Number:
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="message" style={styles.label}>
                        Message:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your inquiry"
                        required
                        style={styles.textarea}
                    />
                </div>
                <button
                    type="submit"
                    style={styles.submitButton}
                    onMouseOver={(e) => (e.target.style.backgroundColor = styles.submitButtonHover.backgroundColor)}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#d32f2f")}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;
