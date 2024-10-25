import React, { useState } from "react";
import { Box, Button, TextField, Grid, Typography, Card, CardContent } from "@mui/material";

function UserDetails({ price, form, onChange }) {
  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <CardContent>
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl">Passenger Details</h5>
        <p className="text-xl font-bold text-green-600">Total: {form.pax * price}</p>
      </div>

      <form className="space-y-3">
        <TextField
          fullWidth
          label="PAX"
          name="pax"
          value={form.pax}
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
          value={form.name}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          label="Phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
        />

        {/* <Box mt={3} display="flex" justifyContent="center">
            <Button variant="contained" color="primary" type="submit">
              Proceed to Payment
            </Button>
          </Box> */}
      </form>
    </CardContent>
  );
}

export default UserDetails;
