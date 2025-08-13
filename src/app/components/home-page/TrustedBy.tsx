import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

import { logos } from '@/app/lib/dummyData/trustData';

const TrustedBy: React.FC = () => {
  return (
    <section id='trusted-by' className='w-full absolute  py-12'>
      <div className='bg-white rounded-3xl shadow-lg py-8 px-8 max-w-7xl mx-auto h-[250px] flex items-center -mt-[100px] '>
        <div className='w-full'>
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={true}
            className='w-full'
          >
            {logos.map((logo, idx) => (
              <div key={`first-${idx}`} className='mx-8 flex-shrink-0'>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={80}
                  className='h-[100px] object-contain grayscale hover:grayscale-0 transition-all duration-300'
                />
              </div>
            ))}
            {logos.map((logo, idx) => (
              <div key={`second-${idx}`} className='mx-8 flex-shrink-0'>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={80}
                  className='h-[100px] object-contain grayscale hover:grayscale-0 transition-all duration-300'
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};
export default TrustedBy;
