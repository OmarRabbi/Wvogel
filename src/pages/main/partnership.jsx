import Partnershipcard from "@/components/main/partnershipcard";
import bannerbg from "../../assets/images/partnership.png";
import { Button } from "@/components/ui/button";
const Partnership = () => {
  const partnershipData = [
    {
      img: "/images/ownerandpartnership/ownership.png",
      title: "Direct Ownership",
      description: "Become a sole or fractional owner of elite thoroughbreds.",
    },
    {
      img: "/images/ownerandpartnership/partnership.png",
      title: "Behind-the-Scenes Access",
      description:
        "Get exclusive access to training sessions, stable visits, and race preparations.",
    },
    {
      img: "/images/ownerandpartnership/ownership.png",
      title: "Financial Returns",
      description:
        "Share in the winnings and long-term value of championship horses. ",
    },
  ];
  return (
    <>
      <div>
        <h1 className="text-center  text-4xl font-light leading-[102%] max-w-xl mx-auto pt-20 pb-20">
          Be Part of the Action with Exclusive Ownership Options.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 container mx-auto w-full pb-20">
          {" "}
          {partnershipData.map((data, index) => (
            <Partnershipcard
              key={index}
              img={data.img}
              title={data.title}
              description={data.description}
            />
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
            <h1 className="text-white text-center font-playfair text-4xl sm:text-5xl font-light leading-[102%]">
              Ready to Join the Legacy
            </h1>
            <p className="text-white text-center font-playfair text-md sm:text-2xl font-light leading-[102%] max-w-4xl mt-3">
              Whether you&apos;re looking to own, partner, or simply immerse
              yourself in the thrill of racing, Beast Mode Racing has the
              perfect opportunity for you.
            </p>
            <Button className="bg-white text-destructive mt-10">
              Become a Partner
            </Button>
          </div>
        </div>


        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-center  text-4xl font-light leading-[102%] max-w-xl mx-auto pt-20 ">
            Collaborate with a Legacy
          </h1>

          <div className="w-24 sm:w-32 lg:w-40 border-b-[5px] border-destructive mt-3 mb-10"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 container mx-auto w-full pb-20">
          {" "}
          {partnershipData.map((data, index) => (
            <Partnershipcard
              key={index}
              img={data.img}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Partnership;
