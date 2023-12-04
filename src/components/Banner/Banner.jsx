const Banner = () => {
  return (
    <div className="banner text-center py-48">
      <div>
        <h1 className=" text-5xl font-bold">
          I Grow By Helping People In Need
        </h1>
      </div>
      <input
        type="text"
        placeholder="Type here"
        className="mt-5 input input-bordered input-info w-full max-w-xs"
      />
      <button className="btn bg-red-500 text-white hover:bg-red-700">
        Search
      </button>
    </div>
  );
};

export default Banner;
