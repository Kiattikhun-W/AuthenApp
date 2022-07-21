import React from "react";
import {
    Card,
    Grid,
    CardContent,
    Button, FormControl, TextField, Box,
} from "@mui/material";
import Logo from '../assets/login.png'

const Login = (props) => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <div className={`bg-green-500  md:h-screen  md:block`}>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className='flex justify-center items-start md:items-center h-screen md:bg-transparent'>
                        <Card variant="outlined" className='drop-shadow-lg w-96 m-3 '>
                            <div className=' text-3xl font-bold mt-2'>
                                <div className='text-center'>Login</div>
                            </div>
                            <CardContent>
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': {my: 1, width: '100%'},
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        hiddenLabel
                                        // type={'text'}
                                        placeholder="Your Username"
                                        label="Username"
                                        size="small"
                                    />
                                    <TextField
                                        type={'password'}
                                        placeholder="Your Password"
                                        label="Password"
                                        size="small"
                                    />
                                    <Button className={'w-full'} variant="contained" className='bg-green-500 w-full'>
                                        Login
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </div>
                </Grid>
            </Grid>
        </div>

    )
}
export default Login