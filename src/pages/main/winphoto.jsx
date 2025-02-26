import horse1 from "../../assets/images/horse1.png";
import Winphotocard from "@/components/main/winphotocard";
const Winphoto = () => {
  const cardsData = [
    {
      title: "Spring Championship 2023",
      date: "March 25, 2023",
      image: horse1,
    },
    {
      title: "Spring Championship 2023",
      date: "March 25, 2023",
      image: horse1,
    },
    {
      title: "Spring Championship 2023",
      date: "March 25, 2023",
      image: horse1,
    },
    {
      title: "Spring Championship 2023",
      date: "March 25, 2023",
      image: horse1,
    },
    {
      title: "Spring Championship 2023",
      date: "March 25, 2023",
      image: horse1,
    },
    {
      title: "Spring Championship 2023",
      date: "March 25, 2023",
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
            <Winphotocard cardsData={cardsData} />
            <div className="flex justify-start gap-10 mt-10 container mx-auto">
              <button className="bg-transparent border-2 border-destructive text-destructive font-bold py-3 px-20 rounded-md">
                See All
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Winphoto;
