import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import DonationItem from "../DonationItem/DonationItem";

const DonationDetails = () => {
  const [addedDonation, setAddedDonation] = useState({});
  const { id } = useParams();
  const donations = useLoaderData();
  useEffect(() => {
    const findDonations = donations?.find((donation) => donation.id === id);
    setAddedDonation(findDonations);
  }, [id, donations]);
  return (
    <div>
      <DonationItem addedDonation={addedDonation}></DonationItem>
    </div>
  );
};

export default DonationDetails;
