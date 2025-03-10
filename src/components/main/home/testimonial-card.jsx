import testimonialImage from '@/assets/images/testimonial-image-1.png';


function TestimonialCard({onClick}) {
  return (
    <div  className='px-8 py-3 flex items-center gap-2 bg-[#F6D7D7] border rounded-[16px] text-[#3D3D3D] max-w-4xl hover:scale-110 transition-all ease-in-out'>
        <div className='basis-[30%]'><img src={testimonialImage} alt="" className='w-[80%]'/></div>
        <div className='basis-[70%] flex flex-col gap-1 text-start'>
            <h2 className='text-3xl leading-[132%] font-semibold tracking-[-0.48px]'>Hannah Schmitt</h2>
            <p className='text-base leading-[164%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <p className='mt-6 text-xs'>May 8, 2020</p>
        </div>
    </div>
  )
}

export default TestimonialCard