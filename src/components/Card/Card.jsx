import { Link } from "react-router-dom";

const Card = ({ card }) => {
  //   const handleDonation = () => {
  //     const addedDonation = [];
  //     const fromLS = JSON.parse(localStorage.getItem("donations"));
  //     if (!fromLS) {
  //       addedDonation.push(card);
  //       localStorage.setItem("donations", JSON.stringify(addedDonation));
  //       alert("Donation succefully");
  //     } else {
  //       const isExist = fromLS.find((item) => item.id === id);
  //       if (!isExist) {
  //         addedDonation.push(...fromLS, card);
  //         localStorage.setItem("donations", JSON.stringify(addedDonation));
  //         alert("Donation succefully");
  //       } else {
  //         return alert("Already added");
  //       }
  //     }
  //   };
  const {
    id,
    Card_BG_Color,
    Category,
    Category_BG_Color,
    Picture,
    Title,
    Text_Color,
  } = card;
  return (
    <Link to={`/details/${id}`}>
      <div className="rounded-md" style={{ backgroundColor: Card_BG_Color }}>
        <div className="">
          <img className="w-full rounded-md" src={Picture} alt="" />
        </div>
        <div className="ml-3 py-3">
          <h3
            className="w-24 h-8 py-1 px-3 text-base font-medium rounded-lg"
            style={{ backgroundColor: Category_BG_Color, color: Text_Color }}
          >
            {Category}
          </h3>
          <h5 className="text-xl font-semibold" style={{ color: Text_Color }}>
            {Title}
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default Card;
