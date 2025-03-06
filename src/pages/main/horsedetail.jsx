import beastMode from "../../assets/images/beast-mode.png";
import headerStraightLine from "@/assets/icons/header-straight-line.svg";
import Qute from "@/assets/icons/qute";
import Racelogo from "@/assets/icons/racelogo";
import { Button } from "@/components/ui/button";
const HorseDetail = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-4">
        <div className="bg-primary">
          <div className="w-[60%] mx-auto mt-20 flex flex-col justify-center gap-8">
            <div className="flex items-center gap-3">
              <img src={headerStraightLine} alt="" />
              <h1 className="text-4xl font-light leading-[93%] text-primary-header-foreground">
                About Thunder Strike
              </h1>
            </div>
            <p className="text-base font-normal leading-[164%] text-primary-foreground">
              Thunder Strike is one of the most promising athletes in the Beast
              Mode Racing lineup. With a remarkable lineage of speed and
              endurance, he has already captivated fans and competitors alike.
              Known for his exceptional agility and powerful strides, Thunder
              Strike embodies the spirit of a true champion. Thunder Strike is
              one of the most promising athletes in the Beast Mode Racing
              lineup. With a remarkable lineage of speed and endurance, he has
              already captivated fans and competitors alike. Known for his
              exceptional agility and powerful strides, Thunder Strike embodies
              the spirit of a true champion.
            </p>
            <div>
              <p className="text-white pb-5 text-xl">Racing Record </p>
              <div className="flex gap-5">
                <div className="border p-4 border-white rounded-sm text-center">
                  <p className="text-red-500 text-xl">12</p>
                  <p className="text-white text-lg">Starts</p>
                </div>
                <div className="border p-4 border-white rounded-sm text-center">
                  <p className="text-red-500 text-xl">12</p>
                  <p className="text-white text-lg">Starts</p>
                </div>
                <div className="border p-4 border-white rounded-sm text-center">
                  <p className="text-red-500 text-xl">12</p>
                  <p className="text-white text-lg">Starts</p>
                </div>
                <div className="border p-4 border-white rounded-sm text-center">
                  <p className="text-red-500 text-xl">12</p>
                  <p className="text-white text-lg">Starts</p>
                </div>
              </div>
            </div>

            <div className="flex gap-5">
              <Button className=" bg-white hover:text-red-500 rounded text-base text-semibold leading-[132%] p-[10px] w-[40%] mb-10">
                buy Now
              </Button>
              <Button className=" bg-white rounded text-base text-semibold leading-[132%] p-[10px] w-[40%] mb-10">
                Contact
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
      <div className=" py-10 bg-white ">
        <div className="flex flex-col gap-5 justify-center items-center text-center">
          <Qute />
          <h3 className="text-black text-center font-semibold">
            Words from the Owners
          </h3>
          <p className="text-black text-center font-light max-w-xl mx-auto">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
      <div className="py-20">
        <h1 className="text-center text-4xl py-10">Racing Achievements</h1>

        <div className="flex justify-center items-center gap-10">
          <div className="flex justify-center items-center gap-2">
            <div>
              <Racelogo />
            </div>
            <div>
              <h1 className="text-2xl font-bold">1st Place</h1>
              <p>Spring Championship 2023</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div>
              <Racelogo />
            </div>
            <div>
              <h1 className="text-2xl font-bold">1st Place</h1>
              <p>Spring Championship 2023</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-10 pt-10 pb-10">
          <div className="flex justify-center items-center gap-2">
            <div>
              <Racelogo />
            </div>
            <div>
              <h1 className="text-2xl font-bold">1st Place</h1>
              <p>Spring Championship 2023</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div>
              <Racelogo />
            </div>
            <div>
              <h1 className="text-2xl font-bold">1st Place</h1>
              <p>Spring Championship 2023</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HorseDetail;
