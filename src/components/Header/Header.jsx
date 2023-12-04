import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo.png";

const Header = () => {
  return (
    <div>
      <div className=" py-5 px-5 flex gap-32 md:justify-between items-center lg:justify-between ">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <ul className="gap-5 md:flex justify-center items-center ">
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-700 underline font-medium"
                    : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-700 underline font-medium"
                    : ""
                }
                to="/donation"
              >
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-700 underline font-medium"
                    : ""
                }
                to="/statistics"
              >
                Statistics
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
