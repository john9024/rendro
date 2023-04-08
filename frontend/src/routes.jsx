import { Inital, Home, Profile, SignIn, SignUp, Aboutus, Contactus, Pricing, Designpackage } from "@/pages";
import { Diningroom, Bedroom, Livingroom } from "@/pages/designpackages";
import Colorpage_70 from "./pages/colorpage_70";
import Colorpage_30 from "./pages/colorpage_30";
import Colorpage_10 from "./pages/colorpage_10";
import Budget from "./pages/budget";
import Space from "./pages/space";
import Subscription from "./pages/subscription";
import Wait from "./pages/wait";
import Result from "./pages/result";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  // {
  //   icon: "",
  //   name: "inital",
  //   path: "/",
  //   element: <Inital />,
  // },
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Sign In",
    path: "/",
    element: <SignIn />,
  },
  {
    icon: UserPlusIcon,
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "Profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Contactus",
    path: "/contactus",
    element: <Contactus />,
  },
  {
    name: "Aboutus",
    path: "/aboutus",
    element: <Aboutus />,
  },
  {
    name: "Pricing",
    path: "/pricing",
    element: <Pricing />,
  },
  {
    name: "Designpackage",
    path: "/designpackage",
    element: <Designpackage />,
  },
  {
    name: "Bedroom",
    path: "/bedroom",
    element: <Bedroom />,
  },
  {
    name: "Diningroom",
    path: "/diningroom",
    element: <Diningroom />,
  },
  {
    name: "Livingroom",
    path: "/livingroom",
    element: <Livingroom />,
  },
  {
    name: "Colorpage_70",
    path: "/colorpage_70",
    element: <Colorpage_70 />,
  },
  {
    name: "Colorpage_30",
    path: "/colorpage_30",
    element: <Colorpage_30 />,
  },
  {
    name: "Colorpage_10",
    path: "/colorpage_10",
    element: <Colorpage_10 />,
  },
  {
    name: "budget",
    path: "/budget",
    element: <Budget />,
  },
  {
    name: "space",
    path: "/space",
    element: <Space />,
  },
  {
    name: "subscription",
    path: "/subscription",
    element: <Subscription />,
  },
  {
    name: "wait",
    path: "/wait",
    element: <Wait />,
  },
  {
    name: "result",
    path: "/result",
    element: <Result />,
  },

  // {
  //   icon: DocumentTextIcon,
  //   name: "Docs",
  //   href: "https://www.material-tailwind.com/docs/react/installation",
  //   target: "_blank",
  //   element: "",
  // },
];

export default routes;
