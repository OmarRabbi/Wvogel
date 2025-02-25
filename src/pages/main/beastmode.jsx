import Bestmodestorecard from "@/components/main/bestmodestorecard";
import horse1 from "../../assets/images/horse1.png";
const Beastmode = () => {
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
              Available Horses
            </h1>
          </div>
          <div>
            <Bestmodestorecard cardsData={cardsData} />
            <div className="flex justify-start gap-10 mt-10 container mx-auto">
              <button className="bg-white text-destructive font-bold py-3 px-20 rounded-md">
                See All
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beastmode;
