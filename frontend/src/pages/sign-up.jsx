import React, { useState, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
import { isEmail } from "validator";
import { register } from "@/actions/auth";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import { useNavigate } from "react-router-dom";
import { CLEAR_MESSAGE } from "@/actions/types";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export function SignUp() {
  const form = useRef();
  const checkBtn = useRef();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);
  const { auth } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };


  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(username, email, password))
        .then(() => {
          setSuccessful(true);
          console.log('res','delay');
          setTimeout(() => {
            navigate("/");
            dispatch({
            type: CLEAR_MESSAGE,
          });
          }, 1000);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  
  };
  
  
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <img className="absolute bg-cover h-screen w-screen -z-10 " src="/img/interiorbg.jpg"/> 
      <Form onSubmit={handleRegister} ref={form}>
      {!successful && (  
      <div className="flex justify-center items-center mt-8 bg-white bg-opacity-50 rounded-3xl">
        <div className="w-[341px] mx-10">
          <p className=" text-[#280559] text-[40px] text-center font-bold mb-2">Sign up</p>
          <p className=" text-[#667085] text-[18px] text-center font-normal mb-14">Please fill your detail to access your account.</p>
          <p className=" text-[#344054] text-[24px] font-normal mb-2">Name</p>
          <Input 
            className="text-[24px] text-[#180707]" 
            type="text"
            name="username" 
            value={username}
            onChange={onChangeUsername}
            validations={[required, vusername]} 
            label="User"
            size="lg" />
          <p className=" text-[#344054] text-[24px] font-normal mt-5 mb-2">Email</p>
          <Input 
            className="text-[24px] text-[#180707]" 
            type="text" 
            name="email"
            value={email}
            onChange={onChangeEmail}
            validations={[required,validEmail]}
            label="Email" size="lg" />
          <p className=" text-[#344054] text-[24px] font-normal mt-5 mb-2">Password</p>
          <Input 
            className="text-[24px] text-[#180707]" 
            type="password"
            name="password"
            value={password}
            onChange={onChangePassword}
            validations={[required, vpassword]}
            label="Password" size="lg" />
          <button className="my-5 bg-[#5748db] rounded-lg text-[#eef2f3] w-full text-[20px]" type="submit" >
            Sign Up
          </button>
          
          <Link to="/">
            <div className="w-full flex justify-center my-3">
              <p className=" text-[20px] text-[#344054] font-medium mx-2">Already have an account? <span className=" text-[#0263FF]"> Sign in </span> </p>  
            </div>
          </Link>
        </div>
      </div>
      )}
      {message && (
        <div className="form-group">
          <div className={ successful ? "alert alert-success text-[28px] text-[#5029bb]" : "alert alert-danger text-[20px]" } role="alert">
            {message}
          </div>
        </div>    
      )}
      <CheckButton style={{ display: "none" }} ref={checkBtn} /> 
      </Form>
      
    </div>
  );
}

export default SignUp;