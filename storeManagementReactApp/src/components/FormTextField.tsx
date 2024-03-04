import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

interface FormTextFieldProps{
    formTextFieldId: string;
    formTextFieldLabel: string;
    formTextFieldValue: string;
    formTextFieldClassName: string;
    formTextFieldType?: "text" | "password";
    handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormTextField({formTextFieldId, formTextFieldLabel, formTextFieldValue, formTextFieldClassName, formTextFieldType, handleOnChange}: FormTextFieldProps) {
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(event.target.value);
  // };

  return (
    <Box
      sx={{
        '& > :not(style)': { m: 1},
      }}
    >
      <TextField 
        id={formTextFieldId} 
        label={formTextFieldLabel} 
        className={formTextFieldClassName}
        variant="outlined" 
        name={formTextFieldId}
        value={formTextFieldValue}
        onChange={handleOnChange}
        type={formTextFieldType}
        fullWidth
      />
    </Box>
  );
}
