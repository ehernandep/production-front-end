import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

import axios from "axios";

function CultivoSegForm() {
  const [formData, setFormData] = useState({
    partitionedterrain_id: "",
    product_name: "",
    sowing_date: "",
    harvest_date: "",
    details: "",
    terrain_id: "",
  });

  const [terrainOptions, setTerrainOptions] = useState([]);
  const [seeds, setSeeds] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      await axios.post(
        "https://mifugu2yrd.execute-api.us-east-1.amazonaws.com/dev/seguimiento_parcelas",
        formData
      );
      alert("Data saved successfully");
      setFormData({
        partitionedterrain_id: "",
        product_name: "",
        sowing_date: "",
        harvest_date: "",
        details: "",
        terrain_id: "",
      });
    } catch (error) {
      console.error("Error saving data: ", error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://5ihs68xar4.execute-api.us-east-1.amazonaws.com/dev/parcelas"
        );
        const responseData = response.data;
        setTerrainOptions(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    async function fetchSeeds() {
      try {
        const response = await axios.get(
          "https://qxi3urvfog.execute-api.us-east-1.amazonaws.com/dev/semillas"
        );
        const responseData = response.data;
        setSeeds(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchSeeds();
    fetchData();
  }, []);

  const uniqueTerrainOptions = [];

  terrainOptions?.forEach((option) => {
    const isUnique = !uniqueTerrainOptions.some(
      (uniqueOption) => uniqueOption.terrain_name === option.terrain_name
    );

    if (isUnique) {
      uniqueTerrainOptions.push(option);
    }
  });
  const partitionedTerrainOptions = [];
  uniqueTerrainOptions.forEach((data) => {
    if (data.partitioned_terrain && data.partitioned_terrain.length > 0) {
      data.partitioned_terrain.forEach((partition) => {
        const partitionedTerrain = `${data.terrain_name}_${partition.partitioned_terrain_id}`;
        const partitionedterrainid = partition.partitioned_terrain_id;

        partitionedTerrainOptions.push({
          partitionedTerrain,
          partitionedterrainid,
        });
      });
    }
  });

  return (
    <Box padding={5}>
      <FormControl fullWidth>
        <InputLabel>Partitioned Terrain</InputLabel>
        <Select
          name='partitionedterrain_id'
          value={formData.partitionedterrain_id}
          onChange={handleChange}
        >
          {partitionedTerrainOptions?.map((option) => (
            <MenuItem
              key={option.partitionedterrainid}
              value={option.partitionedterrainid}
            >
              {option.partitionedTerrain}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Producto</InputLabel>
        <Select name='product_name' value={formData.product_name} onChange={handleChange}>
          {seeds?.map((option) => (
            <MenuItem key={option.product} value={option.product}>
              {option.product}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label='Fecha Siembra'
        name='sowing_date'
        value={formData.sowing_date}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label='Cosecha Name'
        name='harvest_date'
        value={formData.harvest_date}
        onChange={handleChange}
        fullWidth
      />

      <TextField
        label='Details'
        name='details'
        value={formData.details}
        onChange={handleChange}
        fullWidth
      />
      <FormControl fullWidth>
        <InputLabel>Terrain</InputLabel>
        <Select
          name='terrain_id'
          value={formData.terrain_id}
          onChange={handleChange}
        >
          {uniqueTerrainOptions?.map((option) => (
            <MenuItem key={option.terrain_id} value={option.terrain_id}>
              {option.terrain_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant='contained' onClick={handleSubmit}>
        Save
      </Button>
    </Box>
  );
}

export default CultivoSegForm;
