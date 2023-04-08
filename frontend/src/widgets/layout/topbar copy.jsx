import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import mark from '../../../public/img/mark.svg';
import bar3btn from '../../../public/img/bar3btn.svg';
import homebtn from '../../../public/img/homebtn.svg';

export function Topbar() {
 

  return (
    <div className="flex justify-around items-center">
        <div className="mb-16">
            <Menu placement="bottom-start">
            <MenuHandler>
                <Button variant="text"> 
                    <img src={bar3btn} alt="..."/>
                </Button>
            </MenuHandler>
            <MenuList>
                <MenuItem>Pricing</MenuItem>
                <MenuItem>My Profile</MenuItem>
                <MenuItem>Contact Us</MenuItem>
                <MenuItem>About Us</MenuItem>
            </MenuList>
            </Menu>
        </div>
        <div className="flex translate-x-20">
            <div className="flex flex-col mt-16">
                <p className=" text-4xl font-bold">Welcome To  RENDRO!</p>
                <div className="flex justify-center gap-7">
                    <Link to="/">
                        <p className=" text-lg font-bold">Image</p>
                    </Link> 
                    <Link to="/">
                        <p  className=" text-lg font-bold">Design</p>
                    </Link> 
                    <Link to="/">
                        <p  className=" text-lg font-bold">Feel Good</p>
                    </Link> 
                </div>
            </div>
            <img src={mark} alt="..."/>
        </div>
        <div>
            <Link to="/">
                <img src={homebtn} alt="..."/>
            </Link>    
        </div>
    </div>
  )
    
};


export default Topbar;
