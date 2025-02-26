/* eslint-disable react/prop-types */
import headerStraightLine from "@/assets/icons/header-straight-line.svg";
import { Button } from "@/components/ui/button";

function Beastmode({ img, title, btntext, description }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mb-4">
      <div className="bg-primary">
        <div className="w-[60%] mx-auto mt-20 flex flex-col justify-center gap-8">
          <div className="flex items-center gap-3">
            <img src={headerStraightLine} alt="icon" />
            <h1 className="text-4xl font-light leading-[93%] text-primary-header-foreground">
              {title}
            </h1>
          </div>
          <p className="text-base font-normal leading-[164%] text-primary-foreground">
            {description}
          </p>
          <Button
            variant="destructive"
            className=" rounded text-base text-semibold leading-[132%] p-[10px] w-[40%] mb-10"
          >
            {btntext}
          </Button>
        </div>
      </div>

      <div>
        <img src={img} alt="horse racing" className="h-full w-full" />
      </div>
    </div>
  );
}

export default Beastmode;
