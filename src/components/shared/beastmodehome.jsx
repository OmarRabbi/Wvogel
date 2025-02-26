import beastMode from '@/assets/images/beast-mode.png';
import headerStraightLine from '@/assets/icons/header-straight-line.svg';
import { Button } from "@/components/ui/button";

function Beastmode() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 mb-4'>
            <div className='bg-primary'>
                <div className='w-[60%] mx-auto mt-20 flex flex-col justify-center gap-8'>
                    <div className='flex items-center gap-3'>
                        <img src={headerStraightLine} alt="icon" />
                        <h1 className='text-4xl font-light leading-[93%] text-primary-header-foreground'>Welcome to Beast Mode</h1>
                    </div>
                    <p className='text-base font-normal leading-[164%] text-primary-foreground'>Beast Mode Racing is a premier horse racing syndicate dedicated to bringing the thrill of ownership to enthusiasts around the world. Our carefully curated partnerships and champion horses ensure an unforgettable experience both on and off the track.</p>
                    <Button variant='destructive' className=' rounded text-base text-semibold leading-[132%] p-[10px] w-[40%]'>Read More</Button>
                </div>
            </div>

            <div>
                <img src={beastMode} alt="horse racing" />
            </div>
        </div>
    )
}

export default Beastmode