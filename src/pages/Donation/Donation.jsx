import { useEffect, useState } from "react";
import AllDonation from "../../components/DonationAll/AllDonation";
import classNames from "classnames";

const Donation = () => {
  const [addedDonation, setAddedDonation] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    const LsData = JSON.parse(localStorage.getItem("donations"));
    if (LsData) {
      setAddedDonation(LsData);
    } else {
      setNoData("No Donation Found");
    }
  }, []);

  return (
    <div>
      {noData ? (
        <p className="text-4xl font-medium flex justify-center items-center h-[80vh]">
          {noData}
        </p>
      ) : (
        <div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {isShow
              ? addedDonation.map((donation, idx) => (
                  <AllDonation key={idx} donation={donation}></AllDonation>
                ))
              : addedDonation
                  .slice(0, 4)
                  .map((donation, idx) => (
                    <AllDonation key={idx} donation={donation}></AllDonation>
                  ))}
          </div>
          <div className="flex justify-center items-center mt-4 mb-4">
            <button
              onClick={() => setIsShow(!isShow)}
              className={classNames(
                "bg-green-700 text-white py-4 px-6 rounded-md font-medium",
                addedDonation.length < 5 && "hidden ",
                isShow && "hidden"
              )}
            >
              See All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
