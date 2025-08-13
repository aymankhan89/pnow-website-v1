import { FaHourglassHalf } from 'react-icons/fa';
import { FiCpu, FiMessageCircle, FiSearch } from 'react-icons/fi';

export const INNOVATION = [
  {
    title: 'Creativity',
    description: 'Embracing innovative thinking',
    icon: <FiMessageCircle size={24} className='text-white' />,
    widthClass: 'w-16 md:w-20 lg:w-[4rem]',
  },
  {
    title: 'Cutting‑Edge Solutions',
    description: 'Implementing advanced recruitment technologies',
    icon: <FiCpu size={24} className='text-white' />,
    widthClass: 'w-20 md:w-32 lg:w-[10rem]',
  },
  {
    title: 'Continuous Evolution',
    description: 'Redefining industry standards',
    icon: <FaHourglassHalf size={24} className='text-white' />,
    widthClass: 'w-24 md:w-48 lg:w-[18rem]',
  },
  {
    title: 'Commitment to Excellence',
    description: 'Propelling clients and talent toward success',
    icon: <FiSearch size={24} className='text-white' />,
    widthClass: 'w-28 md:w-64 lg:w-[26rem]',
  },
];
