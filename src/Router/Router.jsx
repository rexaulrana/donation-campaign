import { createBrowserRouter } from "react-router-dom";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DonationDetails from "../components/DonationDetails/DonationDetails";
// import DonationDetails from "../components/DonationDetails/DonationDetails";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },

      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/details/:id",
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

export default myRouter;
