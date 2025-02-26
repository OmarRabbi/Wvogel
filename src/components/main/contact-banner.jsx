import { Button } from '../ui/button';

function ContactBanner({bannerData, button}) {
    console.log(bannerData.listItem)
  return (
    <div className='my-8 bg-cover bg-center bg-no-repeat min-h-[600px] flex items-center relative'
      style={{ backgroundImage: `url(${bannerData[0].bgImage})` }}>
        <div className='bg-[#00000099] absolute inset-0'></div>
        <div className='my-12 w-[60%] mx-auto py-8 z-[2]'>
            <div className='flex justify-center'><img src={bannerData[0].logo} alt="logo" className=''/></div>
            <div className='flex flex-col gap-4 my-3'>
                <h1 className='text-primary-header-foreground text-[48px] font-light leading-[102%] text-center'>{bannerData[0].title}</h1>
                <ol className='w-1/2 mx-auto list-decimal'>
                    <li className='text-primary-foreground text-base leading-[164%]'>{bannerData[0].listItem.item1}</li>
                    <li className='text-primary-foreground text-base leading-[164%]'>{bannerData[0].listItem.item2}</li>
                    <li className='text-primary-foreground text-base leading-[164%]'>{bannerData[0].listItem.item3}</li>
                </ol>
                <Button className='w-32 mx-auto bg-[#FFF] text-destructive px-12'>{button}</Button>
            </div>
        </div>
    </div>
  )
}

export default ContactBanner