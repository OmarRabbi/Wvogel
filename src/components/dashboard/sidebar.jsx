import React from 'react'
import { Link, NavLink } from "react-router";
import profileIcon from '@/assets/icons/profile-icon.svg';
import chatIcon from '@/assets/icons/chat-icon.svg';
import logoutIcon from '@/assets/icons/logout-icon.svg';
import notificationIcon from '@/assets/icons/notification-icon.svg';
import { useLocation } from 'react-router';

function Sidebar() {
    const { pathname } = useLocation()
    const sidebars = [
        {
            label: 'My Profile',
            icon: profileIcon,
            path: '/dashboard/',
        },
        {
            label: 'Chat',
            icon: chatIcon,
            path: '/dashboard/chat',
        },
        {
            label: 'Notification',
            icon: notificationIcon,
            path: '/dashboard/notification',
        },
        {
            label: 'Logout',
            icon: logoutIcon,
            path: '/auth/logout',
        },
    ]


    return (
        <div className='w-full p-4 sm:p-6 lg:p-8'>
            <div className='flex flex-col gap-2'>
                {
                    sidebars.map((sidebar, index) => (
                        <Link
                            key={index}
                            to={sidebar.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-[4px] ${pathname === sidebar.path ? 'bg-[#E52B4233] border-[#E52B42]' : ''}`}>
                            <img src={sidebar.icon} alt="icon" />
                            <p>{sidebar.label}</p>
                        </Link>
                    ))}
            </div>
        </div>
    )
}

export default Sidebar



{/* <NavLink
                            key={index}
                            to={sidebar.path}
                            end
                            className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-[4px]  ${isActive ? 'bg-[#E52B4233] border-[#E52B42]' : ''}`}>
                            <img src={sidebar.icon} alt="icon" />
                            <p className='text-base font-medium leading-6 text-header-foreground'>{sidebar.label}</p>
                        </NavLink> */}