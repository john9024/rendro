import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Navbar } from "@/widgets/layout";
import Inital from "@/pages/inital"
import Home from "@/pages/home"
import routes from "@/routes";
import Topbar from "@/widgets/layout/topbar";
import { SignIn, SignUp } from "./pages/index";

function App() {
  const auth = useSelector(state=>state.auth);
  const {isLoggedIn} = useSelector(state => state.auth);
  return (
    <>
      {auth && auth.user && <Topbar/>}

      <Routes>
        <Route key="Sign In" exact path="/" element={<SignIn />} />
        <Route key="Sign Up" exact path="/sign-up" element={<SignUp />} />
        {isLoggedIn && routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
      </Routes>
    </>
  );
}

export default App;
