import { Outlet } from "react-router";
import Header from "../components/Header/Header";
// import Home from "../pages/Home/Home";

const MainLayOut = () => {
  return (
    <div className="max-w-[1300px] mx-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayOut;
