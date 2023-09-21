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
  "Terrain ID",
  "User ID",
  "Terrain Name",
  "Terrain Area",
  "Partition Count",
];

function ParcelasTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://5ihs68xar4.execute-api.us-east-1.amazonaws.com/dev/parcelas"
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
                <TableCell>{row.terrain_id}</TableCell>
                <TableCell>{row.user_id}</TableCell>
                <TableCell>{row.terrain_name}</TableCell>
                <TableCell>{row.terrain_area}</TableCell>
                <TableCell>{row.partition_count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default ParcelasTable;
