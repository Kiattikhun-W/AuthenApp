import React from "react";
import {
    Card,
    Grid,
    CardContent,
    Typography,
    Container,
    CardHeader,
    Button,
    TextField,
    FormControl
} from "@mui/material";
import InputCus from "../components/utils/InputCus";

const Login = (props) => {
    return (
        <React.Fragment>
            <div className='flex justify-center items-center bg-red-400  '>
                <Card variant="outlined" className='shadow w-full md:w-2/4 m-2'>
                    <div className=' text-3xl font-bold '>
                        <div className='text-center'>Login</div>
                    </div>
                    <CardContent>
                        <div className='grid grid grid-rows-2 '>
                            <FormControl className={``}>
                                <InputCus
                                    hiddenLabel
                                    id="filled-hidden-label-small"
                                    defaultValue="Small"
                                    variant="filled"
                                />
                                <InputCus
                                    hiddenLabel
                                    id="filled-hidden-label-small"
                                    defaultValue="Small"
                                    variant="filled"
                                />
                                <Button variant="contained" color="success">
                                    Login
                                </Button>
                            </FormControl>
                        </div>

                    </CardContent>
                </Card>
            </div>
        </React.Fragment>
    )
}
export default Login