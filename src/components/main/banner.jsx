import bannerbg from "../../assets/images/banner.png";

// eslint-disable-next-line react/prop-types
const Banner = ({ bannertext }) => {
  return (
    <div
      className="relative py-20 px-4 mx-auto sm:py-24 h-[250px] lg:px-6 bg-cover bg-center "
      style={{ backgroundImage: `url(${bannerbg})` }}
    >
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-white text-center font-playfair text-4xl sm:text-5xl font-light leading-[102%]">
          {bannertext}
        </h1>

        <div className="w-24 sm:w-32 lg:w-40 border-b-[5px] border-destructive mt-3"></div>
      </div>
    </div>
  );
};

export default Banner;
