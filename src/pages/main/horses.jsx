import { motion } from "framer-motion";
import horse1 from "../../assets/images/horse1.png";
import Horsescard from "@/components/main/horsescard";

const Horses = () => {
  const cardsData = [
    {
      title: "Paris",
      price: "$12,999",
      description: "A dynamic yearling with exceptional speed and agility.",
      image: horse1,
    },
    {
      title: "London",
      price: "$15,500",
      description: "A graceful horse with unmatched endurance and style.",
      image: horse1,
    },
    {
      title: "New York",
      price: "$11,200",
      description: "A stunning horse known for its intelligence and power.",
      image: horse1,
    },
    {
      title: "Paris",
      price: "$12,999",
      description: "A dynamic yearling with exceptional speed and agility.",
      image: horse1,
    },
    {
      title: "London",
      price: "$15,500",
      description: "A graceful horse with unmatched endurance and style.",
      image: horse1,
    },
    {
      title: "New York",
      price: "$11,200",
      description: "A stunning horse known for its intelligence and power.",
      image: horse1,
    },
  ];

  return (
    <>
      <div>
        <div className="pt-20 pb-20">
          <div>
            <h1 className="text-start text-[32px] font-light leading-[102%] container mx-auto pb-10">
              Meet Our Champions in Action
            </h1>
          </div>
          <div>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {cardsData.map((cardData, index) => (
                <Horsescard key={index} cardData={cardData} />
              ))}
            </div>
            <div className="flex justify-start gap-10 mt-10 container mx-auto">
              <button className="bg-white text-destructive font-bold py-3 px-20 rounded-md">
                See All
              </button>
            </div>
          </div>

          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
            <div className="max-w-full ">
              <article className="relative flex flex-col justify-end overflow-hidden rounded shadow-lg bg-white aspect-[500/404]">
                <img
                  src={horse1}
                  className="absolute inset-0 h-full w-full object-cover "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50"></div>
              </article>
            </div>
            <div className="max-w-full ">
              <article className="relative flex flex-col justify-end overflow-hidden rounded shadow-lg bg-white aspect-[500/404]">
                <img
                  src={horse1}
                  className="absolute inset-0 h-full w-full object-cover "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50"></div>
              </article>
            </div>
            <div className="max-w-full ">
              <article className="relative flex flex-col justify-end overflow-hidden rounded shadow-lg bg-white aspect-[500/404]">
                <img
                  src={horse1}
                  className="absolute inset-0 h-full w-full object-cover "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50"></div>
              </article>
            </div>
            <div className="max-w-full ">
              <article className="relative flex flex-col justify-end overflow-hidden rounded shadow-lg bg-white aspect-[500/404]">
                <img
                  src={horse1}
                  className="absolute inset-0 h-full w-full object-cover "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50"></div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Horses;
