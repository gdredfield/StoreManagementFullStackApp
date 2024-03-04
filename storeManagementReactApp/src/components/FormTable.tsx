import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


interface formTableProps{
    formTableData: [][];
}

const FormTable = ({formTableData}: formTableProps) => {
  
  const headers = Object.keys(formTableData[0]||{}).map((row) => (
                      <TableCell key={row}>{row}</TableCell>
                  ));
                  
  const rows =  formTableData.map((row, rowIndex) => {
              // if(Array.isArray(row)){
                return(
                  <TableRow key={rowIndex}>
                    {Object.keys(row).map((cell)=>(
                      <TableCell key={cell}>{row[cell]}</TableCell>
                    ))}
                  </TableRow>
                );
              // }
              // return null
              });

                
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
              {headers}
            </TableRow>
        </TableHead>
        <TableBody>
          {/* {formTableData.map((row, index) => (
                <TableRow key={index}>
                    <TableCell>{row['userId']}</TableCell>
                    <TableCell>{row['userName']}</TableCell>
                    <TableCell>{row['userEmail']}</TableCell>
                    <TableCell>{row['userPassword']}</TableCell>
                    <TableCell>{row['userBirthDate']}</TableCell>
                    <TableCell>{row['userFirstName']}</TableCell>
                    <TableCell>{row['userLastName']}</TableCell>
                    <TableCell>{row['userAge']}</TableCell>
                </TableRow>     
          ))} */}
          {rows}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default FormTable