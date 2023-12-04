const AllDonation = ({ donation }) => {
  const {
    Card_BG_Color,
    Button_BG_Color,
    Category,
    Category_BG_Color,
    Picture,
    Price,
    Title,
    Text_Color,
  } = donation;
  return (
    <div
      style={{ backgroundColor: Card_BG_Color }}
      className="flex items-center gap-2 rounded-md"
    >
      <div className="px-4  md:px-4  lg:px-0">
        <img
          className="w-40 rounded-md md:w-60    lg:w-full"
          src={Picture}
          alt=""
        />
      </div>
      <div className="py-5 md:py-10  lg:p-0">
        <h1
          style={{ backgroundColor: Category_BG_Color, color: Text_Color }}
          className=" px-2 w-24 rounded-md font-medium "
        >
          {Category}
        </h1>
        <h1 className="font-semibold text-2xl text-black">{Title}</h1>
        <h4 style={{ color: Text_Color }} className="text-lg font-semibold">
          {Price}
        </h4>
        <button
          style={{ backgroundColor: Button_BG_Color }}
          className="py-3 px-3 rounded-md text-lg font-medium text-white"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default AllDonation;
