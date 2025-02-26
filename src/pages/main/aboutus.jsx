import Beastmode from "@/components/shared/beastmodehome";
import beastMode from "@/assets/images/beast-mode.png";
import { Button } from "@/components/ui/button";
const Aboutus = () => {
  return (
    <>
      <div>
        <Beastmode
          img={beastMode}
          title={" Beast Mode"}
          btntext={"Contact"}
          description={
            "Beast Mode Racing is a premier horse racing syndicate dedicated to bringing the thrill of ownership to enthusiasts around the world. Our carefully curated partnerships and champion horses ensure an unforgettable experience both on and off the track.Beast Mode Racing is a premier horse racing syndicate dedicated to bringing the thrill of ownership to enthusiasts around the world. Our carefully curated partnerships and champion horses ensure an unforgettable experience both on and off the track. Beast Mode Racing is a premier horse racing syndicate dedicated to bringing the thrill of ownership to enthusiasts around the world. Beast Mode Racing is a premier horse racing syndicate dedicated to bringing the thrill of ownership to enthusiasts around the world. Our carefully curated partnerships and champion horses ensure an unforgettable experience both on and off the track.Beast Mode Racing is a premier horse racing syndicate dedicated to bringing the thrill of ownership to enthusiasts around the world. Our carefully curated partnerships and champion horses ensure an unforgettable experience both on and off the track. Beast Mode Racing is a premier horse racing syndicate dedicated to bringing the thrill of ownership to enthusiasts around the world. "
          }
        />

        <div className="pt-20 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center mb-4">
            <div>
              <img
                src={beastMode}
                alt="horse racing"
                className="h-full w-full"
              />
            </div>
            <div className="bg-transparent">
              <div className="flex flex-col gap-5">
                <div className="w-[80%] mx-auto  flex flex-col justify-center gap-2">
                  <div className="flex items-center gap-3">
                    <h1 className="text-4xl font-light leading-[93%] text-black">
                      Mission
                    </h1>
                  </div>
                  <p className="text-base font-normal leading-[164%] text-foreground">
                    To cultivate a world-class horse racing experience through
                    passion, performance, and partnership. Beast Mode Racing is
                    dedicated to breeding and managing elite thoroughbreds,
                    fostering community engagement, and delivering unforgettable
                    moments both on and off the track.
                  </p>
                </div>
                <div className="w-[80%] mx-auto flex flex-col justify-center gap-2">
                  <div className="flex items-center gap-3">
                    <h1 className="text-4xl font-light leading-[93%] text-black">
                      Vision
                    </h1>
                  </div>
                  <p className="text-base font-normal leading-[164%] text-foreground">
                    To be the global leader in horse racing excellence,
                    inspiring a new generation of enthusiasts and partners to
                    celebrate the thrill of the sport, the legacy of champions,
                    and the power of community.
                  </p>
                  <Button
                    variant="destructive"
                    className="rounded text-base text-semibold text-white leading-[132%] p-[10px] w-[40%]"
                  >
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
