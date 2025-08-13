import Image from 'next/image';
import React from 'react';

import { PARTNERSHIP_DATA } from '@/app/lib/dummyData/partnershipdata';

export default function PartnershipSection() {
  const { title, cards, footerText } = PARTNERSHIP_DATA;

  return (
    <section className='bg-white py-16 max-w-[60%] mx-auto px-4 md:px-20'>
      <h2 className='text-4xl font-bold text-[#0F0F55] mb-12'>{title}</h2>

      <div className='flex flex-col md:flex-row gap-12'>
        {cards.map(
          ({
            id,
            heading,
            description,
            imageSrc,
            imageAlt,
            imageWidth,
            imageHeight,
          }) => (
            <div key={id} className='flex-1 flex flex-col'>
              <h3 className='text-xl font-semibold text-[#6F6F89]'>
                {heading}
              </h3>
              <p className='mt-1 text-sm text-[#4A4A4A] max-w-lg'>
                {description}
              </p>
              <div className='mt-6 flex justify-center'>
                <Image
                  src={imageSrc}
                  width={imageWidth}
                  height={imageHeight}
                  alt={imageAlt}
                  priority
                />
              </div>
            </div>
          )
        )}
      </div>

      <p className='mt-10 max-w-3xl text-sm text-[#4A4A4A]'>{footerText}</p>
    </section>
  );
}
