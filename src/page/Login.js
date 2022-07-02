import { Button, Card, CardActions, CardContent, Container, Grid, Typography } from "@mui/material"
import Input from '../components/utils/Input'
import login from '../assets/login.png'
const Login = (props) => {
    const _handleChange = (e) => {
        console.log(e.target.value)

    }
    return (
        <Container className='h-screen p-6 flex flex-col justify-center items-center'>
            <div className=" shadow-lg shadow-red-500/50	 flex flex-col justify-center items-center bg-red-300 p-16 rounded-lg ">
                <div className="mb-4 ">
                    <img src={login} alt='logo' className="w-32" />
                </div>
                <h3 className="text-white-300"> เข้าสู่ระบบ </h3>
                <div>
                    <div className="mb-4">
                        <Input primary placeholder="Username" onChange={_handleChange} />
                    </div>
                    <div className="mb-4">
                        <Input type='password' placeholder="Password" onChange={_handleChange} />
                    </div>
                    <div>
                        <Button variant="contained" className='bg-red-400  w-full '>Login</Button>
                    </div>
                </div>

            </div>
        </Container>

    )
}
export default Login

