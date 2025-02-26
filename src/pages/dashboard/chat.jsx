import React from 'react'
import peopleOne from '@/assets/images/people1.png';
import peopleTwo from '@/assets/images/people2.png';
import peopleThree from '@/assets/images/people3.png';
import peopleFour from '@/assets/images/people4.png';
import peopleFive from '@/assets/images/people5.png';
import rightIcon from '@/assets/icons/right-icon.svg';
import notDelivered from '@/assets/icons/not-delivered-icon.svg';
import { Button } from '@/components/ui/button';
import audioCallIcon from '@/assets/icons/audio-call-icon.svg';
import videoCallIcon from '@/assets/icons/video-call-icon.svg';
import settingIcon from '@/assets/icons/setting-icon.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import fileIcon from '@/assets/icons/attach-icon.svg';
import emojiIcon from '@/assets/icons/emoji-icon.svg';
import cameraIcon from '@/assets/icons/camera-icon.svg';
import senderIcon from '@/assets/icons/light-circle-icon.svg';
import receiverIcon from '@/assets/icons/deep-circle-icon.svg';


const contacts = [
  {
    id: 1,
    name: 'Anil',
    image: peopleOne,
    message: 'Lorem epsum',
    time: 'Today, 9.52pm',
    delivered: rightIcon,
    notDelivered: notDelivered,
  },
  {
    id: 2,
    name: 'Horse’s Group',
    image: peopleTwo,
    message: 'Best horses in the town',
    time: 'Today, 9.52pm',
    delivered: rightIcon,
    notDelivered: notDelivered,
  },
  {
    id: 3,
    name: 'Pappu',
    image: peopleThree,
    message: 'Lorem epsum',
    time: 'Today, 9.52pm',
    delivered: rightIcon,
    notDelivered: notDelivered,
  },
  {
    id: 4,
    name: 'Jacky’s group',
    image: peopleFour,
    message: 'Lorem epsum',
    time: 'Today, 9.52pm',
    delivered: rightIcon,
    notDelivered: notDelivered,
  },
  {
    id: 5,
    name: 'Micle',
    image: peopleFive,
    message: 'Lorem epsum',
    time: 'Today, 9.52pm',
    delivered: rightIcon,
    notDelivered: notDelivered,
  },
]


function Chat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      senderId: 1,
      receiverId: 0,
      text: 'Hello',
      time: '8:58pm,'
    },
    {
      id: 1,
      senderId: 1,
      receiverId: 0,
      text: 'How are you',
      time: '8:58pm,'
    },
    {
      id: 2,
      senderId: 0,
      receiverId: 1,
      text: 'Fine',
      time: '8:58pm,'
    },
    {
      id: 2,
      text: "How about you",
      senderId: 0,
      receiverId: 1,
      time: "8:58pm",
    },
    {
      id: 3,
      text: "How about you",
      senderId: 1,
      receiverId: 0,
      time: "8:58pm",
    },

    {
      id: 4,
      text: "How about you",
      senderId: 0,
      receiverId: 1,
      time: "8:58pm",
    },
  ])



  return (
    <div className='flex items-start justify-between flex-col lg:flex-row gap-4 p-8'>
      <div className='basis-[35%] w-full rounded'>
        <div className='w-full px-5 py-8 flex flex-col gap-6 bg-[#FFF] rounded'>
          <h2 className='text-[#303030] text-xl md:text-2xl lg:text-3xl font-bold leading-[132%] tracking-[-0.24px]'>People</h2>
          {
            contacts.map((contact, index) => (
              <div key={index} className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <div>
                    <img src={contact.image} alt="image" className='shrink-0'/>
                  </div>
                  <div className='flex flex-col'>
                    <p className='text-sm sm:text-base'>{contact.name}</p>
                    <p className='text-xs sm:text-sm'>{contact.message}</p>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <p className='text-xs sm:text-sm text-right'>{contact.time}</p>
                  <img src={rightIcon} alt="icon" className='w-[19px] h-[10px] ml-auto' />
                </div>
              </div>
            ))
          }
        </div>
        <Button variant='destructive' className='p-[10px] w-full mt-5'>Create a new group</Button>
      </div>
      <div className='basis-[65%] bg-[#FFF] px-5 py-8 w-full rounded'>
        <div className='flex flex-col gap-3 mb-6'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <div>
                <img src={peopleOne} alt="image" />
              </div>
              <div className='flex flex-col'>
                <p>Anil</p>
                <p>Online- Last Seen, 2:02pm</p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-8 h-8'><img src={audioCallIcon} alt="icon" className='w-full h-full' /></div>
              <div className='w-8 h-8'><img src={videoCallIcon} alt="icon" className='w-full h-full' /></div>
              <div className='w-8 h-8'><img src={settingIcon} alt="icon" className='w-full h-full' /></div>
            </div>
          </div>
          <div className='bg-[#B4ABAB80] h-[1px] w-full mt-4'></div>
        </div>
        {/* chat area */}
        <div className='my-12 flex flex-col gap-2'>
          <div className='flex items-end w-auto h-min gap-1'>
            <img src={senderIcon} alt="icon" className='w-3.5 h-3.5' />
            <div className='px-4 py-2 bg-[#E7E7E7] rounded-[12px] w-auto  flex items-center'><p className='text-base font-normal '>Hello</p></div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex items-end w-auto h-min gap-1'>
              <img src={senderIcon} alt="icon" className='w-3.5 h-3.5' />
              <div className='px-4 py-2 bg-[#E7E7E7] rounded-[12px] w-auto flex items-center'>
                <p className='text-base font-normal '>How are you ?</p>
              </div>
            </div>
            <p className='text-sm font-normal mr-auto text-[#8993A4] ml-[32px]'>Today, 8.58pm</p>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex items-end justify-end w-auto h-min gap-1'>
              <div className='px-4 py-2 bg-[#5A5C5F] rounded-[12px] w-auto flex items-center'>
                <p className='text-base font-normal text-[#FFF]'>Fine</p>
              </div>
              <img src={receiverIcon} alt="icon" className='w-3.5 h-3.5' />
            </div>
            <p className='text-sm font-normal ml-auto text-[#8993A4] mr-[32px]'>Today, 8.58pm</p>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex items-end justify-end w-auto h-min gap-1'>
              <div className='px-4 py-2 bg-[#5A5C5F] rounded-[12px] w-auto flex items-center'>
                <p className='text-base font-normal text-[#FFF]'>How about you</p>
              </div>
              <img src={receiverIcon} alt="icon" className='w-3.5 h-3.5' />
            </div>
            <p className='text-sm font-normal ml-auto text-[#8993A4] mr-[32px]'>Today, 8.58pm</p>
          </div>
        </div>
        {/* Message Input section*/}
        <div className="p-2 sm:p-4 lg:p-6 flex items-start w-full gap-1 sm:gap-3">
          <label className="flex items-center gap-6 bg-[#EFF6FC] rounded-[25px] px-3 sm:px-5 py-4 sm:py-[18px] border-[0.75px] border-light border-opacity-30 flex-1">
            <label htmlFor="file">
              <input type="file" id="file" className="hidden" />
              <img src={fileIcon} alt="icon" className='w-6 sm:w-8 h-6 sm:h-8'/>
            </label>
            <input
              type="text"
              placeholder="Type your message here..."
              className="flex-1 bg-transparent pr-4 focus:outline-none text-base font-light text-light opacity-70"
            />

            <div className="flex items-center justify-end gap-4 w-full">
              <button>
                <img src={emojiIcon} alt="icon" className='w-5 sm:w-6 h-5 sm:h-6'/>
              </button>
              <button>
                <img src={cameraIcon} alt="icon" className='w-5 sm:w-6 h-5 sm:h-6'/>
              </button>
            </div>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Chat