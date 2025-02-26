import Hero from "@/components/main/home/hero";
import RacingResult from "@/components/main/home/racingresult";
import Beastmode from "@/components/shared/beastmodehome";
import beastMode from "@/assets/images/beast-mode.png";
import Hero from '@/components/main/home/hero'
import RacingResult from '@/components/main/home/racingresult'
import Horsescard from '@/components/main/horsescard'
import Beastmode from '@/components/shared/beastmodehome'
import horse1 from "@/assets/images/horse1.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ContactBanner from '@/components/main/contact-banner';
import bgImage from '@/assets/images/home-beast-mode-contact.jpg';
import logo from '@/assets/images/home-logo.png';

function Home() {
  const carouselCardsData = [
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
  ]

  const contactBannerData = [
    {
      bgImage: bgImage,
      logo: logo,
      title: 'The Beast Mode Advantage',
      listItem: {
        item1: 'Passion for Excellence: Every horse is bred and trained for greatness.',
        item2: 'Unmatched Experience: Our team brings decades of success in horse racing.',
        item3: 'Transparent Partnerships: Clear terms and ongoing support for all partners.',
      }
    }
  ]


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
    <div className='text-primary-header-foreground bg-background'>
      <Hero />
      <RacingResult />
      <Beastmode />
      <div className='my-12 w-full mx-auto'>
        <div className='flex flex-col gap-4 mb-10 w-full mx-auto text-center'>
          <h1 className='text-[32px] sm:text-[40px] lg:text-[48px] font-light leading-[102%] w-[40%] mx-auto text-header-foreground'>Our Champions in the Making</h1>
          <div className='bg-destructive h-[7px] w-[5%] mx-auto mb-2'></div>
          <p className='text-sm font-normal text-foreground leading-[164%] w-[40%] mx-auto'>Dive into our latest racing triumphs, explore detailed results, and celebrate the unparalleled achievements of our champion thoroughbreds. Witness the milestones that define the legacy of Beast Mode Racing.</p>
        </div>
        <Carousel className="w-full lg:w-[80%] mx-auto">
          <CarouselContent className="-ml-4 container mx-auto">
            {carouselCardsData.map((carouselCardData, index) => (
              <CarouselItem key={index} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Horsescard cardData={carouselCardData} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <ContactBanner bannerData = {contactBannerData} button='Contact'/>
    </div>
  );
}

export default Home;
