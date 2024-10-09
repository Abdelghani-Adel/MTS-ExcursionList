import React, { useState } from "react";
import { Box, Button, TextField, Grid, Typography, Card, CardContent } from "@mui/material";

function PaymentCard({ price }) {
  const [formData, setFormData] = useState({
    pax: "1",
    dates: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing logic here
    console.log("Payment Details Submitted:", formData);
  };

  return (
    <Card sx={{ maxWidth: 500, mx: "auto", mt: 5, p: 3, boxShadow: 3 }}>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-xl">Payment Details</h5>
          <p className="text-xl font-bold text-green-600">Total: {formData.pax * price}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <TextField
            fullWidth
            label="PAX"
            name="pax"
            value={formData.pax}
            onChange={handleChange}
            type="number" // Ensures only numbers are accepted
            required
          />
          {/* <TextField
            fullWidth
            label="Preferred Dates"
            name="dates"
            value={formData.dates}
            onChange={handleChange}
            placeholder="Select your trip dates"
            required
          /> */}
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <Box mt={3} display="flex" justifyContent="center">
            <Button variant="contained" color="primary" type="submit">
              Proceed to Payment
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
}

export default PaymentCard;
