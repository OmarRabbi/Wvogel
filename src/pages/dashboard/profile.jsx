import React from 'react'
import profile from '@/assets/images/profile.png';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

function Profile() {
  return (
    <div className='flex items-start justify-between p-8'>
      <div className='flex items-end gap-8'>
        <div className='max-h-[295px] max-w-[290px]'>
          <img src={profile} alt="profile" className='w-full h-full'/>
        </div>
        <div className='flex flex-col text-[#000] gap-4'>
          <div className='flex items-center gap-4'>
            <p className='min-w-[121px] text-xl font-normal leading-[164%]'>Name:</p>
            <p className='shrink-0 text-xl font-normal leading-[164%]'>JHON ESTARY</p>
          </div>
          <div className='flex items-center gap-4'>
            <p className='min-w-[121px] text-xl font-normal leading-[164%]'>Email:</p>
            <p className='shrink-0 text-xl font-normal leading-[164%]'>jhon65@gmail.com</p>
          </div>
          <div className='flex items-center gap-4'>
            <p className='min-w-[121px] text-xl font-normal leading-[164%]'>Phone:</p>
            <p className='shrink-0 text-xl font-normal leading-[164%]'>+7876776576</p>
          </div>
          <div className='flex items-center gap-4'>
            <p className='min-w-[121px] text-xl font-normal leading-[164%]'>Address:</p>
            <p className='shrink-0 text-xl font-normal leading-[164%]'>5/5 road, UK</p>
          </div>
          <div className='flex items-center gap-4'>
            <p className='min-w-[121px] text-xl font-normal leading-[164%]'>Date of birth:</p>
            <p className='shrink-0 text-xl font-normal leading-[164%]'>09/07/1889</p>
          </div>
        </div>
      </div>
      <Link to={`/dashboard/edit-profile/`}><Button variant='destructive' size='dashboard-button' className='text-base font-meduium leading-6'>Edit Profile</Button></Link>
    </div>
  )
}

export default Profile