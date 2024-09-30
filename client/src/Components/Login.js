import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link,  Paper,Grid, TextField } from "@mui/material";
import './A1.css';
import image from './image/tree.png'

function Login({ setIsLoggedIn, isLoggedIn }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/login", { email, password }, { withCredentials: true })
            .then(result => {
                if (result.data === "Success") {
                    axios.get('http://localhost:3001/user', { withCredentials: true })
                        .then(response => {
                            if (response.data.user) {
                              setIsLoggedIn(true);
                              navigate("/home", { state: { user: response.data.user } });
                            }
                            
                        });
                        alert("Login Successfully")
                } else {
                    alert("Login failed");
                }
            })
            .catch(err => console.log(err));
    };

    const paperStyle = { padding: "2rem", margin: "100px auto", borderRadius: "1rem", boxShadow: "10px 10px 10px" };
    const row = { display: "flex", marginTop: "2rem" };
    //const btnStyle={marginTop:"2rem", fontSize:"1.2rem", fontWeight:"700", backgroundColor:"blue", borderRadius:"0.5rem"};
    const label = { fontWeight: "700" };

    return (
        <div>
            <Grid align="center" className="wrapper">
                <Paper className="wra" style={paperStyle} sx={{ width: { xs: '80vw', sm: '50vw', md: '40vw', lg: '30vw', xl: '20vw' }, height: { lg: '50vh' } }}>
                <img src={image} className='website-logo1' alt="logo"/>
                    <form onSubmit={handleLogin}>
                        <span style={row}>
                            <TextField sx={{ label: { fontWeight: '700', fontSize: "1.3rem" } }} style={label} label="Email" fullWidth variant="outlined" type="email" placeholder="Enter Email" name="email" onChange={(e) => setEmail(e.target.value)} />
                        </span>
                        <span style={row}>
                            <TextField sx={{ label: { fontWeight: '700', fontSize: "1.3rem" } }} label="Password" fullWidth variant="outlined" type="password" placeholder="Enter Password" name="password" onChange={(e) => setPassword(e.target.value)} />
                        </span>
                       <Link to='/home'><button className="bt2" variant="contained" type="submit">Login</button></Link> 
                    </form>
                    <p>Don't have an account? <Link href="/signup">SignUp</Link></p>
                </Paper>
            </Grid>
        </div>
    );
}

export default Login;
