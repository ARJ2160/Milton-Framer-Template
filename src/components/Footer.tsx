import { data } from '../../data/data';
import { FaTwitter, FaFacebook } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
import { WebsiteLogo } from './index';

export const Footer = () => {
  return (
    <div className='grid lg:grid-cols-6 gap-5 mb-10 sm:mx-16 mx-4 mt-10'>
      <div className='flex justify-start col-span-1 flex-col gap-4'>
        <div className='center-flex !justify-start'>
          <WebsiteLogo />
        </div>
        <div className='text-gray-500 font-semibold hover:text-black'>
          {data.footer.col1.col1SubText}
        </div>
        <div className='text-gray-500 font-semibold hover:text-black'>
          {data.footer.col1.col2SubText}
        </div>
        <div className='flex gap-3'>
          <div className='bg-blue-700 text-white rounded-full w-10 h-10 center-flex'>
            <FaTwitter />
          </div>
          <div className='bg-[#334E94] text-white rounded-full w-10 h-10 center-flex'>
            <FaFacebook />
          </div>
          <div className='bg-[#334E94] text-white rounded-full w-10 h-10 center-flex'>
            <SiLinkedin />
          </div>
        </div>
      </div>
      <div className='col-span-1'>
        <div className='text-2xl font-bold mb-4'>{data.footer.col2.title}</div>
        <div className='text-gray-500'>
          {data.footer.col2.links.map((link, key) => (
            <div
              className='mt-4 font-semibold hover:text-black border-black'
              key={key}
            >
              {link}
            </div>
          ))}
        </div>
      </div>
      <div className='col-span-1'>
        <div className='text-2xl font-bold mb-4'>{data.footer.col3.title}</div>
        <div className='text-gray-500'>
          {data.footer.col3.links.map((link, key) => (
            <div
              className='mt-4 font-semibold hover:text-black border-black'
              key={key}
            >
              {link}
            </div>
          ))}
        </div>
      </div>
      <div className='col-span-1'>
        <div className='text-2xl font-bold mb-4'>{data.footer.col4.title}</div>
        <div className='text-gray-500'>
          {data.footer.col4.links.map((link, key) => (
            <div
              className='mt-4 font-semibold hover:text-black border-black'
              key={key}
            >
              {link}
            </div>
          ))}
        </div>
      </div>
      <div className='col-span-2'>
        <div className='text-2xl font-bold mb-4'>{data.footer.col5.title}</div>
        <div className='text-gray-500'>
          {data.footer.col5.links.map((link, key) => (
            <div
              className='mt-4 font-semibold hover:text-black border-black'
              key={key}
            >
              {link}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
