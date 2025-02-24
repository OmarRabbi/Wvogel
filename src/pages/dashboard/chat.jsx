import React from 'react'
import peopleOne from '@/assets/images/people1.png';
import peopleTwo from '@/assets/images/people2.png';
import peopleThree from '@/assets/images/people3.png';
import peopleFour from '@/assets/images/people4.png';
import peopleFive from '@/assets/images/people5.png';
import rightIcon from '@/assets/icons/right-icon.svg';
import notDelivered from '@/assets/icons/not-delivered-icon.svg';


const chats = [
  {
    name: 'Anil',
    image: peopleOne,
    message: 'Lorem epsum',
    time: 'Today, 9.52pm',
    delivered: rightIcon,
    notDelivered: notDelivered,
  },
  {
    name: 'Horse’s Group',
    image: peopleTwo,
    message: 'Best horses in the town',
    time: 'Today, 9.52pm',
    delivered: rightIcon,
    notDelivered: notDelivered,
  },
  {
    name: 'Pappu',
    image: peopleThree,
    message: 'Lorem epsum',
    time: 'Today, 9.52pm',
    delivered: rightIcon,
    notDelivered: notDelivered,
  },
  {
    name: 'Jacky’s group',
    image: peopleFour,
    message: 'Lorem epsum',
    time: 'Today, 9.52pm',
    delivered: rightIcon,
    notDelivered: notDelivered,
  },
  {
    name: 'Micle',
    image: peopleFive,
    message: 'Lorem epsum',
    time: 'Today, 9.52pm',
    delivered: rightIcon,
    notDelivered: notDelivered,
  },
]

function Chat() {
  return (
    <div className='flex items-center justify-between gap-4'>
      <div className='basis-[35%] px-5 py-8 flex flex-col gap-6 bg-[#FFF] rounded'>
        <h2>People</h2>
        {
          chats.map((chat, index) => (
            <div key={index} className='flex items-center justify-between'>
              <div className='flex items-center gap-4'>
                <div>
                  <img src={chat.image} alt="image" />
                </div>
                <div className='flex flex-col'>
                  <p>{chat.name}</p>
                  <p>{chat.message}</p>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <p>{chat.time}</p>
                <img src={rightIcon} alt="icon" className='w-[19px] h-[10px] ml-auto'/>
              </div>
            </div>
          ))
        }
      </div>
      <div className='basis-[65%] bg-[#FFF]'>

      </div>
    </div>
  )
}

export default Chat