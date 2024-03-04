import { Container, Typography } from '@mui/material'
import './App.css'
import UserPageAppBar from './components/UserPageAppBar'
import FormTextField from './components/FormTextField'
import FormPaper from './components/FormPaper'
import React, { useEffect, useState } from 'react'
import FormButton from './components/FormButton'
import FormDatePicker from './components/FormDatePicker'
import FormTable from './components/FormTable'

function App() {
  const [state, setState] = 
  useState({userName: '', 
            userPassword: '',
            userFirstName: '',
            userLastName: '',
            userEmail: '',
            userBirthDate: new Date().toLocaleDateString('en-GB') + "",
          })

  const [users, setUsers] = useState([]);
  
  
  useEffect(() =>{
    LoadUsersTable();
  }, [])

  const LoadUsersTable = () => {
    fetch('http://localhost:8080/userPortal/fetchUsers')
    .then(response=>response.json())
    .then((result)=>{
      // handleResponse('users', result);
      setUsers(result);
    })
  }
  

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState(prevUserData => ({ ...prevUserData, [name]: value }));
  }

  const handleOnChangeWithName = (name: string, value: string) => {
    setState(prevUserData => ({...prevUserData, [name]: value }));

  }

  // const handleResponse = (name: string, value: []) => {
  //   setState(prevUserData => ({...prevUserData, [name]: [value] }));

  // }
   
  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(state);
    fetch('http://localhost:8080/userPortal/newUserSave',{
        method: 'POST',
        headers:{"Content-Type" : "application/json"},
        body: JSON.stringify(state)
      }
    ).then(() => {
      console.log("New Student Added!");
      LoadUsersTable();
    })
  }

  LoadUsersTable();
  const style={display: 'flex', flexFlow: 'row'}
  return (
    <>
      <div>
        <UserPageAppBar textDisplay='Yoru Store Management App' navBarColor='transparent'/>
        <Container style={style}>
        <form className="userAdd" noValidate autoComplete="off">
          <FormPaper elevation={10} formPaperClassName='userFormPaper'>
          <Typography variant='h4' component='div' sx={{m:1}}>Create your account!</Typography>
              
                <FormTextField formTextFieldId='userName' formTextFieldLabel='Username' formTextFieldValue={state.userName} 
                  formTextFieldClassName='userFormTextField' handleOnChange={handleOnChange} 
                />
                <FormTextField formTextFieldId='userPassword' formTextFieldLabel='Password' formTextFieldValue={state.userPassword}
                  formTextFieldClassName='userFormTextField' formTextFieldType='password' handleOnChange={handleOnChange} 
                />
                <FormTextField formTextFieldId='userFirstName' formTextFieldLabel='First Name'formTextFieldValue={state.userFirstName}
                  formTextFieldClassName='userFormTextField' handleOnChange={handleOnChange}  
                />
                <FormTextField formTextFieldId='userLastName' formTextFieldLabel='Last Name'formTextFieldValue={state.userLastName}
                  formTextFieldClassName='userFormTextField' handleOnChange={handleOnChange} 
                />
                <FormTextField formTextFieldId='userEmail' formTextFieldLabel='Email Address'formTextFieldValue={state.userEmail}
                  formTextFieldClassName='userFormTextField' handleOnChange={handleOnChange} 
                />
                <FormDatePicker formDatePickerLabel='Birthday' formDatePickerClassName='userFormTextField' handleOnChange={handleOnChangeWithName} 
                />
                <FormButton buttonText='Sign Up' buttonColor='secondary' handleOnClick={handleOnClick}/>
              
          </FormPaper>
          </form>
          <FormPaper elevation={10} formPaperClassName='userFormTablePaper'>
            <Typography variant='h4' component='div' sx={{m:1}}>Users</Typography>
            <FormTable formTableData={users}></FormTable>
          </FormPaper>
        </Container>
      </div>
    </>
  )
}

export default App
