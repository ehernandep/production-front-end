import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";

function SemillasForm() {
  const [formData, setFormData] = useState({
    product: "",
    description: "",
    sowing_time: "",
    climate: "",
    other_info: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      await axios.post(
        "https://qxi3urvfog.execute-api.us-east-1.amazonaws.com/dev/semillas",
        formData
      );
      alert("Data saved successfully");
      setFormData({
        product: "",
        description: "",
        sowing_time: "",
        climate: "",
        other_info: "",
      });
    } catch (error) {
      console.error("Error saving data: ", error);
    }
  };
  console.log(formData)
  return (
    <Box padding={5}>
      <TextField
        label='Producto'
        name='product'
        value={formData.product}
        onChange={handleChange}
      />
      <TextField
        label='Descripcion'
        name='description'
        value={formData.description}
        onChange={handleChange}
      />
      <TextField
        label='Tiempo Siembra'
        name='sowing_time'
        value={formData.sowing_time}
        onChange={handleChange}
      />
      <TextField
        label='Clima Ideal'
        name='climate'
        value={formData.climate}
        onChange={handleChange}
      />
      <TextField
        label='Info Adicional'
        name='other_info'
        value={formData.other_info}
        onChange={handleChange}
      />
      <Button variant='contained' onClick={handleSubmit}>
        Save
      </Button>
    </Box>
  );
}

export default SemillasForm;
