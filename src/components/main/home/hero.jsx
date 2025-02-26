import heroImage from '@/assets/images/hero-image.png';
import { Button } from '@/components/ui/button';

function Hero() {
    return (
        <>
            <div className='max-w-[1920px] h-[892px] overflow-hidden relative'>
                <img src={heroImage} alt="image" className='absolute top-[-5%] left-0 w-full h-full object-cover'/>
                <div className='max-w-[50%] z-10 absolute translate-y-[-50%] top-1/2 left-[10%]'>
                    <h1 className='max-w-[85%] text-primary-header-foreground text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-light leading-[93%] normal-case mb-4'>Elevate Your Passion <br className='xl:block hidden'/>for Racing with Beast Mode</h1>
                    <p className='max-w-[50%] text-primary-foreground text-base sm:text-lg font-normal leading-[179%] normal-case'>Own, race, and celebrate champions with our exclusive partnerships. Own, race, and celebrate champions with our exclusive partnerships.</p>
                    <div className='max-w-[50%] flex items-center gap-4 mt-8'>
                        <Button variant='destructive' className='px-6 py-2 w-full'>Explore Our Horses</Button>
                        <Button className='px-6 py-2 w-full border text-[#FFF] border-[#FFF5EB]'>Learn More</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero