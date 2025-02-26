import racingresult from '@/assets/icons/homepage-result.svg';
import straightLine from '@/assets/icons/straight-line.svg';

function RacingResult() {
    return (
        <div className='overflow-hidden relative h-[400px] py-6'>
            <img src={racingresult} className='absolute top-[-20px] left-0' />
            <div className='flex flex-col items-center gap-3'>
                <div className='flex items-end justify-center gap-4 w-[60%] mx-auto text-center'>
                    <div className='w-[20%] h-[7px] bg-[#E6273E]'></div>
                    <h2 className='text-[48px] leading-[93%] font-light text-[#141414]'>Racing <span className='text-[#E6273E]'>Result</span></h2>
                </div>
                <p className='text-base leading-[164%] text-[#5A5C5F] w-[35%] text-center'>Dive into our latest racing triumphs, explore detailed results, and celebrate the unparalleled achievements of our champion thoroughbreds. Witness the milestones that define the legacy of Beast Mode Racing.</p>
            </div>
            <div className='w-max mt-8 mx-auto bg-[#FFF] px-12 py-6 border-2 border-[#C0C0C080] flex items-center'>
                <div className='text-[#5A5C5F] flex flex-col gap-1 items-center'>
                    <p className=' text-[32px] font-semibold leading-[132%] tracking-[-0.64px]'>2</p>
                    <p className='text-base font-light leading-[93%]'>Start</p>
                </div>
                <img src={straightLine} alt="icon" className='mx-[38px]'/>
                <div className='text-[#5A5C5F] flex flex-col gap-1 items-center'>
                    <p className=' text-[32px] font-semibold leading-[132%] tracking-[-0.64px]'>0</p>
                    <p className='text-base font-light leading-[93%]'>Win</p>
                </div>
                <img src={straightLine} alt="icon" className='mx-[38px]'/>
                <div className='text-[#5A5C5F] flex flex-col gap-1 items-center'>
                    <p className=' text-[32px] font-semibold leading-[132%] tracking-[-0.64px]'>2</p>
                    <p className='text-base font-light leading-[93%]'>Place</p>
                </div>
                <img src={straightLine} alt="icon" className='mx-[38px]'/>
                <div className='text-[#5A5C5F] flex flex-col gap-1 items-center'>
                    <p className=' text-[32px] font-semibold leading-[132%] tracking-[-0.64px]'>0</p>
                    <p className='text-base font-light leading-[93%]'>Show</p>
                </div>
                <img src={straightLine} alt="icon" className='mx-[38px]'/>
                <div className='text-[#5A5C5F] flex flex-col gap-1 items-center'>
                    <p className=' text-[32px] font-semibold leading-[132%] tracking-[-0.64px]'>0.0%</p>
                    <p className='text-[#43A047] text-base font-light leading-[93%]'>Win%</p>
                </div>
                <img src={straightLine} alt="icon" className='mx-[38px]'/>
                <div className='text-[#5A5C5F] flex flex-col gap-1 items-center'>
                    <p className=' text-[32px] font-semibold leading-[132%] tracking-[-0.64px]'>33.33%</p>
                    <p className='text-base font-light leading-[93%]'>Wps%</p>
                </div>
                <img src={straightLine} alt="icon" className='mx-[38px]'/>
                <div className='text-[#5A5C5F] flex flex-col gap-1 items-center'>
                    <p className=' text-[32px] font-semibold leading-[132%] tracking-[-0.64px]'>$8,387</p>
                    <p className='text-[#43A047] text-base font-light leading-[93%]'>Purses</p>
                </div>
                <img src={straightLine} alt="icon" className='mx-[38px]'/>
                <div className='text-[#5A5C5F] flex flex-col gap-1 items-center'>
                    <p className=' text-[32px] font-semibold leading-[132%] tracking-[-0.64px]'>$2,796</p>
                    <p className='text-[#DB1F35] text-base font-light leading-[93%]'>Earning/Start</p>
                </div>
            </div>
        </div>
    )
}

export default RacingResult