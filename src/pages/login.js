import Button from "@mui/material/Button"
import "../css/login.css";
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from "react-router-dom";

const Login = () => {
  
    return (
        <div className="Login">
            <div className="Login-Box">
                <h2 className="title">Log in</h2>
                <form className="Login-Form">
                    <div className="input-wrapper">
                        <AccountCircle className="icon" />
                        <input type="text" placeholder="Your ID" />
                    </div>
                    <div className="input-wrapper">
                        <LockIcon className="icon" />
                        <input type="password" placeholder="Your Password" />
                    </div>
                    <Button variant="contained" className="login-button">Submit</Button>
                </form>
                <p className="forgot"><Link to="/forgot">Forgot Your Password?</Link></p>
                <p className="newMember"><Link to="/signup">Join the Member</Link></p>
            </div>
        </div>
    );
};

export default Login;
