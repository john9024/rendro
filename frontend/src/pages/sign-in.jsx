import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "@/actions/auth";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login"
import { Button } from "@material-ui/core";
import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  // Button,
  Typography,
} from "@material-tailwind/react";
import { Navigate, useNavigate } from "react-router-dom";
import googlebtn from "../../public/img/googlebtn.png"

export function SignIn(props) {

  let navigate = useNavigate();
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);
  const auth = useSelector(state => state.auth)
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();
  const onChangeEmail = (e) => {
    const email = e.target.value;

    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(email, password))
        .then(() => {
          // navigate("/profile");
          console.log('user', auth)
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };
  if (loading && auth && auth.user) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="relative h-screen w-screen flex justify-center items-center">
      
      <img className="absolute bg-contain w-screen h-screen -z-10 " src="/img/interiorbg.jpg"/> 
      
      <Form onSubmit={handleLogin} ref={form}>
       
        <div className="relative flex justify-center items-center mt-8 bg-white bg-opacity-50 rounded-3xl">
          <div className="w-[341px]  ml-10 mr-10 rounded-[3rem]">
            <p className=" text-[#280559] text-[40px] text-center font-bold mb-2">Login</p>
            <p className=" text-[#162649] text-[18px] text-center font-normal mb-14">Please fill your detail to access your account.</p>
            <p className=" text-[#344054] text-[24px] font-normal mb-2">Email</p>
            <Input
              className="text-[24px] text-[#180707]" 
              type="text" 
              name="email"
              value={email}
              onChange={onChangeEmail}
              label="Email" size="lg" />
            <p className=" text-[#1d3255] text-[24px] font-normal mt-5 mb-2">Password</p>
            <Input 
              className="text-[24px] text-[#05050f]"
              type="password" 
              name="password"
              value={password}
              onChange={onChangePassword}
              label="Password" 
              size="lg" />
            <div className="flex justify-between items-center my-5">
                <Checkbox className=" text-[#050b11] font-normal" label="Remember Me" />  
                <Link to="/sign-up">
                  <Typography
                    as="span"
                    variant="small"
                    color="blue"
                    className="ml-1 font-bold text-[18px]"
                  >
                    Forgot Password?
                  </Typography>
                </Link>
            </div>
            <button className="my-5 text-[20px] text-[#f5efef] bg-[#4469e4] text-center w-full rounded-lg">
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              Sign In
            </button>
            {/* <GoogleLogin
              clientId=''
              render={(renderProps) => (
                <Button
                  className={classes.googleButton}
                  color='primary'
                  fullwidth
                  onClick={renderProps.onClick}
                  disable={renderProps.disabled}
                  startIcon={<Icon />}
                  variant='contained'>
                    SignIn With Google

                </Button>
              )} 
              
              /> */}
              
           
            {/* <Link to="/sign-up">
              <div className="w-full flex justify-center my-3">
                <button>
                <img src={googlebtn} className=""/>  
              </button>
              </div>
              
            </Link> */}
            <Link to="/sign-up">
              <div className="w-full flex flex-row justify-center my-3">
                <p className=" text-[20px] text-[#344054] font-medium mx-2">Don’t have an account?<span className=" text-[#0263FF]"> Sign up </span> </p>  
              </div>
            </Link>
            {message && (
            <div className="form-group">
              <div className="alert alert-danger text-[20px]" role="alert">
                {message}
              </div>
            </div>
            )}
          </div>
        </div>
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </Form>
    
      
      
    </div>
  );
}

export default SignIn;