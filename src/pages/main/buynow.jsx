import { Button } from "@/components/ui/button";
import beastMode from "../../assets/images/beast-mode.png";
import headerStraightLine from "@/assets/icons/header-straight-line.svg";

const Buynow = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-4">
        <div className="bg-[#FFF]">
          <div className="w-[60%] mx-auto mt-20 flex flex-col justify-center gap-8">
            <div className="flex items-center gap-3">
              <img src={headerStraightLine} alt="" />
              <h1 className="text-4xl font-light leading-[93%] text-foreground">
                Thunder Strike
              </h1>
            </div>
            <p className="text-[#1DB435] font-playfair text-[24px] font-light leading-[93%]">
              Share Available
            </p>
            <div>
              <p className="text-white pb-5 text-xl">Racing Record </p>
              <div className="flex flex-col gap-5">
                <div className="border p-4 border-white rounded-sm text-center flex justify-between">
                  <p className="text-[#5A5C5F] font-poppins text-[18px] font-normal leading-[179%] ">
                    1 Share(10% ownership)
                  </p>

                  <p className="text-[#DB1F35] font-poppins text-[18px] font-semibold leading-[132%] tracking-[-0.36px]">
                    - $15800
                  </p>
                </div>
                <div className="border p-4 border-white rounded-sm text-center flex justify-between">
                  <p className="text-[#5A5C5F] font-poppins text-[18px] font-normal leading-[179%] ">
                    1/2 Share(5% ownership)
                  </p>

                  <p className="text-[#DB1F35] font-poppins text-[18px] font-semibold leading-[132%] tracking-[-0.36px]">
                    - $9800
                  </p>
                </div>
                <div className="border p-4 border-white rounded-sm text-center flex justify-between">
                  <p className="text-[#5A5C5F] font-poppins text-[18px] font-normal leading-[179%] ">
                    1/4 Share(2.5% ownership)
                  </p>

                  <p className="text-[#DB1F35] font-poppins text-[18px] font-semibold leading-[132%] tracking-[-0.36px]">
                    - $7800
                  </p>
                </div>
                <div className="border p-4 border-white rounded-sm text-center flex justify-between">
                  <p className="text-[#5A5C5F] font-poppins text-[18px] font-normal leading-[179%] ">
                    1/8 Share(1.5% ownership)
                  </p>

                  <p className="text-[#DB1F35] font-poppins text-[18px] font-semibold leading-[132%] tracking-[-0.36px]">
                    - $2800
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-5">
              <Button className=" bg-red-500  hover:text-red-500 rounded text-base text-semibold leading-[132%] p-[10px] w-[40%] mb-10">
                buy Now
              </Button>
              <Button className=" bg-white rounded text-base text-semibold leading-[132%] p-[10px] w-[40%] mb-10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        <div className="relative ">
          <img
            src={beastMode}
            alt="horse racing"
            className="h-full w-full  bg-gradient-to-t from-black/60 via-black/0 to-transparent"
          />
          <div className="absolute bottom-0 left-0 right-0   bg-gradient-to-t from-black/60 via-black/0 to-transparent flex justify-center items-center pb-10">
            <div className="text-center border-r-2 border-white pr-5">
              <p className="text-white text-sm">Breed</p>
              <p className="text-white text-base font-semibold">Thoroughbred</p>
            </div>
            <div className="text-center border-r-2 border-white pr-5">
              <p className="text-white text-sm">Gender</p>
              <p className="text-white text-base font-semibold">Stallion</p>
            </div>
            <div className="text-center border-r-2 border-white pr-5">
              <p className="text-white text-sm">Age</p>
              <p className="text-white text-base font-semibold">3 years</p>
            </div>
            <div className="text-center border-r-2 border-white pr-5">
              <p className="text-white text-sm">Trainer</p>
              <p className="text-white text-base font-semibold">John Whitman</p>
            </div>
            <div className="text-center ">
              <p className="text-white text-sm">Owner</p>
              <p className="text-white text-base font-semibold">
                Beast Mode Racing
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buynow;
