import Hero from "@/components/main/home/hero";
import RacingResult from "@/components/main/home/racingresult";
import Beastmode from "@/components/shared/beastmodehome";
import beastMode from "@/assets/images/beast-mode.png";
function Home() {
  return (
    <div className="text-primary-header-foreground bg-background">
      <Hero />
      <RacingResult />
      <Beastmode
        img={beastMode}
        title={"Welcome to Beast Mode"}
        btntext={"Read More"}
        description={
          "Beast Mode Racing is a premier horse racing syndicate dedicated to bringing the thrill of ownership to enthusiasts around the world. Our carefully curated partnerships and champion horses ensure an unforgettable experience both on and off the track."
        }
      />
    </div>
  );
}

export default Home;
