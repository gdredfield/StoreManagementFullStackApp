import Button from '@mui/material/Button';
import React from 'react';

interface buttonProps{
  buttonText: string;
  buttonColor?: 'primary'|'secondary';
  handleOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function FormButton({buttonText, buttonColor, handleOnClick}: buttonProps) {
  return (
    <Button 
      variant="contained"
      color={buttonColor}
      sx={{m: 1, width:'7rem'}}
      onClick={handleOnClick}
    >    
        {buttonText}
      
    </Button>
  );
}
