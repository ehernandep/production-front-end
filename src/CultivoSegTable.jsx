import { useState, useEffect } from "react";

import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";
const columns = [
  "ID Seguimiento",
  "Producto",
  "Fecha Siembra",
  "Fecha Cosecha",
  "Detalles",
  "ID Terreno",
];

function CultivoSegTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://mifugu2yrd.execute-api.us-east-1.amazonaws.com/dev/seguimiento_parcelas"
        );
        const responseData = response.data;
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  console.log(data);
  return (
    <Box padding={5}>
      <TableContainer component={Paper}>
        <Table aria-label='Material UI Table'>
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell key={index}>{column}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell>{row.following_id}</TableCell>
                <TableCell>{row.product_name}</TableCell>
                <TableCell>{row.sowing_date}</TableCell>
                <TableCell>{row.harvest_date}</TableCell>
                <TableCell>{row.details}</TableCell>
                <TableCell>{row.terrain_id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default CultivoSegTable;
