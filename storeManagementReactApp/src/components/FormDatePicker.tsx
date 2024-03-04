import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/plugin/customParseFormat'

interface formDatePickerProps{
    formDatePickerLabel: string;
    formDatePickerClassName: string;
    handleOnChange: (name: string, value: string) => void;
}

export default function FormDatePicker({formDatePickerLabel, formDatePickerClassName, handleOnChange}: formDatePickerProps) {
    
    // const handleThisOnChange = () => {
    //     // getValue?.((formDateValue?.format('MM/DD/YYYY') ?? ''))
    //     handleOnChange(formDateValue?.format('MM/DD/YYYY') ?? '')
    // }

    const [formDateValue, setFormDateValue] = React.useState<Dayjs|null>(dayjs(dayjs(Date.now())));
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']} sx={{m:1, width:'max-content'}}>
        <DatePicker
            label={formDatePickerLabel}
            className={formDatePickerClassName}
            value={formDateValue}
            onChange={(newValue) => {setFormDateValue(newValue); handleOnChange('userBirthDate', newValue?.format('MM/DD/YYYY') ?? '')}}
        />
        </DemoContainer>
        </LocalizationProvider>

    );
  }
