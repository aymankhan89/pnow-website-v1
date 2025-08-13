import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { JOURNEY_DATA } from '@/app/lib/dummyData/journeyData';

const JourneySection: React.FC = () => {
  return (
    <>
      {JOURNEY_DATA.map(
        ({
          id,
          headingLines,
          description,
          buttonText,
          imageSrc,
          imageAlt,
          imageWidth,
          imageHeight,
        }) => (
          <section key={id} className='py-16 px-6 mt-32'>
            <div className='max-w-[60%] mx-auto flex flex-col md:flex-row items-center justify-between gap-12'>
              {/* Text Content */}
              <div className='max-w-xl'>
                <h2 className='text-4xl font-extrabold text-brand-purple mb-6 leading-tight'>
                  {headingLines.map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </h2>
                <p className='text-gray-600 text-base leading-relaxed mb-6'>
                  {description}
                </p>
                <Link href='/contact' passHref legacyBehavior>
                  <a className='bg-brand-purple text-white text-lg px-6 py-2 rounded-full hover:bg-[#2b0a86] transition'>
                    {buttonText}
                  </a>
                </Link>
              </div>

              {/* Image */}
              <div className='flex-shrink-0'>
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={imageWidth}
                  height={imageHeight}
                  priority
                />
              </div>
            </div>
          </section>
        )
      )}
    </>
  );
};

export default JourneySection;
