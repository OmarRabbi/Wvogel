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
    <div className="pt-20 pb-20">
      <h1 className="text-start text-[32px] font-light leading-[102%] container mx-auto pb-10">
        Meet Our Champions in Action
      </h1>

      {/* Cards */}
      <Horsescard cardsData={cardsData} />

      {/* See All Button */}
      <div className="flex justify-start gap-10 mt-10 container mx-auto">
        <button className="bg-white text-destructive font-bold py-3 px-20 rounded-md">
          See All
        </button>
      </div>

      {/* Marquee Effect */}
      <div className="overflow-hidden mt-10">
        <motion.div
          className="flex gap-5"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {[...Array(20)].map((_, index) => (
            <div key={index} className="max-w-full flex-shrink-0 w-[500px]">
              <article className="relative flex flex-col justify-end overflow-hidden rounded shadow-lg bg-white aspect-[500/404]">
                <img
                  src={horse1}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50"></div>
              </article>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Horses;
