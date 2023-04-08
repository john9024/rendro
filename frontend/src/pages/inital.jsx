import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    Navbar as MTNavbar,
    MobileNav,
    Card,
    CardBody,
    CardHeader,
    Typography,
    Button,
    IconButton,
    Input,
    Textarea,
} from "@material-tailwind/react";
import {
    HomeIcon,
    UserCircleIcon,
    ArrowRightOnRectangleIcon,
    UserPlusIcon,
    DocumentTextIcon,
  } from "@heroicons/react/24/solid";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import bg from "../../public/img/interiorbg.jpg";
import { SignIn, SignUp } from "./index";
import { Navbar } from "@/widgets/layout/index";
import { Link } from "react-router-dom";

export function Inital() {
    const routes = [
        {
          icon: ArrowRightOnRectangleIcon,
          name: "Sign In",
          path: "/sign-in",
          element: <SignIn />,
        },
        {
          icon: UserPlusIcon,
          name: "Sign Up",
          path: "/sign-up",
          element: <SignUp />,
        },
      ];
      const navList = (
        <ul className="mb-4 mt-2 flex gap-2 text-inherit lg:mb-0 lg:mt-0 lg:items-center lg:gap-6">
          {routes.map(({ name, path, icon }) => (
            <Typography
              key={name}
              as="li"
              variant="small"
              color="inherit"
              className="capitalize"
            > 
                <Link
                    to={path}
                    className="flex items-center gap-1 p-1 font-normal text-3xl text-[#454545]"
                >
                    {icon &&
                    React.createElement(icon, {
                        className: "w-[18px] h-[18px] opacity-75 mr-1",
                    })}
                    {name}
                </Link>
            </Typography>
          ))}
        </ul>
      );
  return (
    
      // <MTNavbar color="transparent" className="p-3">
      <div className="relative flex bg-cover bg-center h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute left-[3rem] top-[2rem] text-4xl lg:text-6xl font-bold text-brown-800">Welcome To RENDRO!</div>
        <div className="absolute left-[5rem] top-[7rem]">{navList}</div>
        <img className="absolute top-0 h-full w-full bg-cover  bg-center -z-10" src="/img/interiorbg.jpg" />
        
      </div>
      
    // </MTNavbar>
    
    
  );
}

export default Inital;
