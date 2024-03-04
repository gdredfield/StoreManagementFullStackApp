import { Paper } from '@mui/material'
import { ReactNode } from 'react'

interface formPaperProps{
    elevation: number;
    formPaperClassName: string;
    children: ReactNode;
}

const FormPaper = ({elevation, children, formPaperClassName}: formPaperProps) => {
  const paperStyle= {padding:'50px 50px', width:'35rem', margin:'20px', display:'flex', flexFlow:'column', alignContent:'center'}
  return (
    <div>
        <Paper elevation={elevation} style={paperStyle} className={formPaperClassName}>
          {children}
        </Paper>
    </div>
  )
}

export default FormPaper