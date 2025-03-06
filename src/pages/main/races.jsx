import bannerbg from "../../assets/images/partnership.png";
import VideoCard from "@/components/main/videocard";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import race1 from "../../assets/images/race1.png";
import race2 from "../../assets/images/race2.png";
import race3 from "../../assets/images/race3.png";
import race4 from "../../assets/images/race4.png";
import race5 from "../../assets/images/race5.png";
import race6 from "../../assets/images/race6.png";

const videoData = [
  { id: 1, videoSrc: "/videos/race1.mp4" },
  { id: 2, videoSrc: "/videos/race2.mp4" },
  { id: 3, videoSrc: "/videos/race3.mp4" },
  { id: 4, videoSrc: "/videos/race4.mp4" },
];

const images = [
  { id: 1, src: race1, colSpan: "col-span-2" },
  { id: 2, src: race2, colSpan: "col-span-8" },
  { id: 3, src: race3, colSpan: "col-span-2" },
  { id: 4, src: race4, colSpan: "col-span-2" },
  { id: 5, src: race5, colSpan: "col-span-2" },
  { id: 6, src: race6, colSpan: "col-span-8" },
];

const Races = () => {
  return (
    <>
      <div>
        <h1 className="text-center text-[32px] font-light leading-[102%] container mx-auto pb-10 pt-10">
          Recent Races
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto pb-10">
          {videoData.map((video) => (
            <VideoCard key={video.id} videoSrc={video.videoSrc} />
          ))}
        </div>

        <div
          className="relative py-20 px-4 mx-auto sm:py-24 h-[450px] lg:px-6 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${bannerbg})`,
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-white text-center  text-3xl sm:text-5xl font-semibold leading-[102%]">
              Upcoming Event
            </h1>
            <div className=" flex gap-5 justify-center items-center mt-5 mb-5">
              <div className="flex gap-2 items-center">
                <div>
                  {" "}
                  <CalendarDays color="red" />
                </div>
                <p className="text-[#fff]">March 28-31</p>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  {" "}
                  <Clock color="red" />
                </div>
                <p className="text-[#fff]">March 28-31</p>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  {" "}
                  <MapPin color="red" />
                </div>
                <p className="text-[#fff]">March 28-31</p>
              </div>
            </div>

            <div className="flex gap-5 justify-center items-center">
              <div>
                <p className="text-4xl font-bold text-[#fff]">77</p>
                <p className="text-[#fff]">Days</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#fff]">07</p>
                <p className="text-[#fff]">Hours</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#fff]">77</p>
                <p className="text-[#fff]">Minutes</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#fff]">77</p>
                <p className="text-[#fff]">Seconds</p>
              </div>
            </div>

            <Button className="bg-white text-destructive mt-10">
              Become a Partner
            </Button>
          </div>
        </div>

        <div className="container mx-auto py-20">
          <h1 className="text-black text-center  text-2xl  font-semibold leading-[102%] pb-5 ">
            Wining Moment
          </h1>
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-12 gap-4">
              {images.slice(0, 3).map((img) => (
                <img
                  key={img.id}
                  src={img.src}
                  className={`w-full h-60 object-cover ${img.colSpan} rounded-lg shadow-md`}
                  alt="Gallery"
                />
              ))}

              {images.slice(3).map((img) => (
                <img
                  key={img.id}
                  src={img.src}
                  className={`w-full h-60 object-cover ${img.colSpan} rounded-lg shadow-md`}
                  alt="Gallery"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Races;
