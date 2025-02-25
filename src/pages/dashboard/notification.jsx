import React from 'react'
import profileOne from '@/assets/images/profile-1.png';
import profileTwo from '@/assets/images/profile-2.png';
import profileThree from '@/assets/images/profile-3.png';
import profileFour from '@/assets/images/profile-4.png';
import profileFive from '@/assets/images/profile-5.png';
import profileSix from '@/assets/images/profile-6.png';
import profileSeven from '@/assets/images/profile-7.png';
import profileEight from '@/assets/images/profile-8.png';
import { Button } from '@/components/ui/button';


function Notification() {
  const profiles = [
    {
      image: profileOne,
      name: 'Brian Griffin',
      time: '5 days',
    },
    {
      image: profileTwo,
      name: 'Brian Griffin',
      time: '5 days',
    },
    {
      image: profileThree,
      name: 'Brian Griffin',
      time: '5 days',
    },
    {
      image: profileFour,
      name: 'Brian Griffin',
      time: '5 days',
    },
    {
      image: profileFive,
      name: 'Brian Griffin',
      time: '5 days',
    },
    {
      image: profileSix,
      name: 'Brian Griffin',
      time: '5 days',
    },
    {
      image: profileSeven,
      name: 'Brian Griffin',
      time: '5 days',
    },
    {
      image: profileEight,
      name: 'Brian Griffin',
      time: '5 days',
    },
  ]
  return (
    <div className='p-8'>
      <h2 className='text-[#303030] text-xl md:text-2xl lg:text-3xl font-bold leading-[132%] tracking-[-0.24px] mb-8'>Notification</h2>
      <div className='px-4 bg-[#FFF] rounded-[4px] w-[652px] aspect-[652/852]'>
        {
          profiles.map((profile, index) => (
            <div key={index} className='flex flex-col'>
              <div className='py-6 flex items-center justify-between gap-6'>
                <div className='flex items-center gap-4'>
                  <img src={profile.image} alt="image" />
                  <div>
                    <p><span className='font-medium text-[#333342]'>{profile.name}</span> message you</p>
                    <p>{profile.time} ago</p>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <Button variant='destructive' className='px-6 py-2 w-full'>Reply</Button>
                  <Button className='px-6 py-2 w-full border border-[#5A5C5F] text-[#E6273E]'>Clear</Button>
                </div>
              </div>
              <div className='bg-[#B4ABAB80] h-[1px] w-full my-1'></div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Notification