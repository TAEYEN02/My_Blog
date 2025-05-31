import { Button } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Link, useNavigate } from "react-router-dom";
import "../css/signup.css";

const SignUp = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <div className="Signup">
            <div className="Signup-Box">
                <h2 className="title">Sign Up</h2>
                <form className="Signup-Form" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <AccountCircle className="icon" />
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="input-wrapper">
                        <EmailIcon className="icon" />
                        <input type="email" placeholder="Your Email" required />
                    </div>
                    <div className="input-wrapper">
                        <LockIcon className="icon" />
                        <input type="password" placeholder="Your Password" required />
                    </div>
                    <div className="input-wrapper">
                        <LockIcon className="icon" />
                        <input type="password" placeholder="Confirm Password" required />
                    </div>
                        <Button 
                            type="submit" 
                            variant="contained" 
                            fullWidth
                            style={{ padding: "12px", fontSize: "18px" 
                            }}>
                            Submit
                        </Button>

                </form>
                <p className="login"><Link to="/">이미 회원이십니까? 로그인화면으로 가기</Link></p>
            </div>
        </div>
    );
};

export default SignUp;
