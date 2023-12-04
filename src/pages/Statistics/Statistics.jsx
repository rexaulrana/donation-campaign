// import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import Statistic from "../../components/Statistic/Statistic";

// import { useLoaderData } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import Statistic from "../../components/Statistic/Statistic";

// const Statistics = () => {

//   // console.log(donationLength, LsDonations);
//   return (
//     <div>
//       <Statistic
//         totalDonations={donationLength}
//         addedDonations={LsDonations}
//       ></Statistic>
//     </div>
//   );
// };

// export default Statistics;

const Statistics = () => {
  // const [totalDonations, setTotalDonations] = useState;
  const donations = useLoaderData();
  const donationsLength = donations.length;

  return (
    <div>
      <Statistic donationsLength={donationsLength}></Statistic>
    </div>
  );
};

export default Statistics;
