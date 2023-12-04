// import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { parse } from "postcss";
import swal from "sweetalert";
import "./DonationDetails.css";

const DonationItem = ({ addedDonation }) => {
  const handleDonation = () => {
    const donations = [];
    const fromLS = JSON.parse(localStorage.getItem("donations"));
    if (!fromLS) {
      donations.push(addedDonation);
      localStorage.setItem("donations", JSON.stringify(donations));
      swal("Good job!", "You donated successfully", "success");
    } else {
      // const isExist = fromLS.find((item) => item.id === id);
      // if (!isExist) {}
      donations.push(...fromLS, addedDonation);
      localStorage.setItem("donations", JSON.stringify(donations));
      swal("Good job!", "You have donated successfully", "success");
    }
  };

  const {
    // id,
    // Card_BG_Color,
    // Button_BG_Color,
    // Category,
    // Category_BG_Color,
    Picture,
    Price,
    Title,
    Text_Color,
    Description,
  } = addedDonation;
  return (
    <div className="">
      <div className="">
        <div className="relative">
          <img className=" w-[1300px] h-[600px]" src={Picture} alt="" />
          <div className=" absolute bottom-10 w-full h-25 py-3 px-5 overlay ">
            <button
              onClick={() => handleDonation()}
              className="w-[179px] h-[65px] rounded-md text-white text-xl  "
              style={{ backgroundColor: Text_Color }}
            >
              Donate {Price}
            </button>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-black">{Title}</h1>
        <h5>{Description}</h5>
      </div>
    </div>
  );
};

export default DonationItem;
