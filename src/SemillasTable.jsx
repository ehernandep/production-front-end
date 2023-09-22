import { useState, useEffect } from "react";
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
import axios from "axios";
const columns = [
  "ID Semilla",
  "Producto",
  "Descripcion",
  "Clima",
  "Tiempo de Siembra",
  "Otra Informacion",
];
function SemillasTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://qxi3urvfog.execute-api.us-east-1.amazonaws.com/dev/semillas"
        );

        const responseData = response.data;

        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

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
                <TableCell>{row.seed_id}</TableCell>
                <TableCell>{row.product}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.climate}</TableCell>
                <TableCell>{row.sowing_time}</TableCell>
                <TableCell>{row.other_info}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default SemillasTable;
