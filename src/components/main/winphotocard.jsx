/* eslint-disable react/prop-types */

const Winphotocard = ({ cardsData }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
      {cardsData.map((card, index) => (
        <div key={index} className="max-w-full ">
          <article className="relative flex flex-col justify-end overflow-hidden rounded shadow-lg bg-white aspect-[500/404]">
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 h-full w-full object-cover "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50"></div>

            <div className="relative z-10 px-4 py-4">
              <div className="flex justify-between items-start">
                <h4 className="text-2xl font-semibold text-white">
                  {card.title}
                </h4>
              </div>

              <p className="text-sm text-gray-300 mt-2 mb-4">{card.date}</p>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
};

export default Winphotocard;
