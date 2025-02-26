/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";

const Horsescard = ({ cardsData }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {cardsData.map((card, index) => (
        <div key={index} className="max-w-sm mx-auto">
          <article className="relative flex flex-col justify-end overflow-hidden rounded-xl shadow-lg bg-white aspect-[365/404]">
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 h-full w-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50"></div>

            <div className="relative z-10 px-4 py-4">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-semibold text-white">
                  {card.title}
                </h3>
              </div>

              <p className="text-sm text-gray-300 mt-2 mb-4">
                {card.description}
              </p>

              <div className="flex justify-between items-start gap-5">
                <Button className="w-full bg-white text-destructive">
                  Buy Now
                </Button>
                <Button className="w-full bg-transparent text-destructive border border-destructive">
                  Read More
                </Button>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
};

export default Horsescard;
