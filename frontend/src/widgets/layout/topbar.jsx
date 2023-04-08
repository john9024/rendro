import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "@/actions/auth"
import Form from "react-validation/build/form";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import bar3btn from '../../../public/img/bar3btn.svg';
import homebtn from '../../../public/img/homebtn.svg';
import mark from '../../../public/img/mark.svg';
import { FiLogOut } from 'react-icons/fi';

export default function Topbar() {
  let navigate = useNavigate();
  const [openNav, setOpenNav] = useState(false);
  const {isLoggedin} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const onChangeLogout = (e) => {
    
      dispatch(logout());
      !isLoggedin && navigate ("/");
    
  };
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Image
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
        Design
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
        Feel Good
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <div className="absolute top-0 w-full bg-transparent py-2 px-4 z-50">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="mb-16">
          <Menu placement="bottom-start">
            <MenuHandler>
              <Button variant="text"> 
                <img src={bar3btn} alt="..."/>
              </Button>
            </MenuHandler>
            <MenuList>
              <li>
                <a href="pricing" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Pricing</a>
              </li>
              <li>
                <a href="profile" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My Profile</a>
              </li>
              <li>
                <a href="contactus" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Contact Us</a>
              </li>
              <li>
                <a href="aboutus" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About Us</a>
              </li>
            </MenuList>
          </Menu>
        </div>
        <div className="flex justify-center">
          <Button variant="text" size="sm" className="hidden lg:inline-block">
            <img src={homebtn} alt="..."/>
          </Button>
          {/* <Link to="/"> */}
            <button 
              className="text-[24px] text-[#38226d] pt-5 rounded border-[#232323] hidden lg:inline-block"
              onClick={onChangeLogout}
              >
              <FiLogOut size={32}/>
            </button>
          {/* </Link> */}
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
        </div>
      </MobileNav>
    </div>
  );
}