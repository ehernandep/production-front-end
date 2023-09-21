import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";

function ParcelasForm() {
  const [formData, setFormData] = useState({
    terrain_name: "",
    terrain_area: 0,
    partition_count: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      await axios.post(
        "https://5ihs68xar4.execute-api.us-east-1.amazonaws.com/dev/parcelas",
        formData
      );
      alert("Data saved successfully");
      setFormData({
        terrain_name: "",
        terrain_area: 0,
        partition_count: 0,
      });
    } catch (error) {
      console.error("Error saving data: ", error);
    }
  };

  return (
    <Box padding={5}>
      <TextField
        label='Terrain Name'
        name='terrain_name'
        value={formData.terrain_name}
        onChange={handleChange}
      />
      <TextField
        label='Terrain Area'
        name='terrain_area'
        type='number'
        value={formData.terrain_area}
        onChange={handleChange}
      />
      <TextField
        label='Partition Count'
        name='partition_count'
        type='number'
        value={formData.partition_count}
        onChange={handleChange}
      />
      <Button variant='contained' onClick={handleSubmit}>
        Save
      </Button>
    </Box>
  );
}

export default ParcelasForm;
