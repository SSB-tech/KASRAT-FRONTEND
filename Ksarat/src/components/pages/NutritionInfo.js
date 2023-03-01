import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function NutritionInfo(props) {
    const { carbohydrate, protein, fat, calfromcarb, calfromprotein, calfromfat, perfromcarb, perfromprotein, perfromfat } = props;
    const rows = [
      createData('Carbohydrate', carbohydrate, calfromcarb, perfromcarb),
      createData('Protein', protein, calfromprotein, perfromprotein),
      createData('Fat', fat, calfromfat, perfromfat),
    ];
  
    return (
      <TableContainer component={Paper} align="center">
        <Table sx={{ minWidth: 650 }} aria-label="nutrition table">
          <TableHead>
            <TableRow>
              <TableCell>Nutrition</TableCell>
              <TableCell align="right">Grams</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Percentage</TableCell>
              {/* <TableCell align="right">% Daily Value</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.grams}</TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.percentage}</TableCell>
                {/* <TableCell align="right">{row.dailyValue}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  function createData(name, grams, calories, percentage) {
    return { name, grams, calories, percentage};
  }
  
  export default NutritionInfo;
