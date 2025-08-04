import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

import SplitTextComp from '@/app/components/bits/SplitText';


const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(SplitText);

    const ctx = gsap.context(() => {
      // ─── Split‑text animations ───────────────────────────────────────────
      const splitTitle = new SplitText(titleRef.current, {
        type: 'chars, words',
      });
      const splitDesc = new SplitText(descRef.current, { type: 'words' });

      gsap.from(splitTitle.chars, {
        duration: 0.3,
        opacity: 0,
        y: 50,
        stagger: 0.04,
        ease: 'power2.out',
      });

      gsap.from(splitDesc.words, {
        duration: 0.2,
        opacity: 0,
        y: 20,
        stagger: 0.01,
        ease: 'power2.out',
        delay: 0.1,
      });

      // ─── Navbar items & button ──────────────────────────────────────────
      const q = gsap.utils.selector(heroRef);
      gsap.from(q('.nav-item'), {
        duration: 0.4,
        y: -20,
        opacity: 0,
        stagger: 0.12,
        ease: 'power2.out',
        delay: 0.4,
      });

      gsap.from(q('.contact-btn'), {
        duration: 0.6,
        scale: 0.8,
        opacity: 0,
        ease: 'back.out(1.7)',
        delay: 0.8,
      });

      // ─── Floating icons (each animates independently) ──────────────────
      const icons = q('.floating-icon');
      icons.forEach((el, i) => {
        gsap.to(el, {
          y: -15,
          duration: 2,
          ease: 'ease-linear',
          repeat: -1,
          yoyo: true,
          delay: i * 0.3, // stagger start only
          force3D: true, // ensure GPU acceleration
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className='w-full bg-brand-purple overflow-hidden'
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 92%, 83% 100%, 17% 100%, 0 92%)',
      }}
    >
      <div className='relative mx-auto h-[750px] max-w-[1440px]'>
        {/* ─── HERO CONTENT ───────────────────────────────────── */}
        <div
          className='
            absolute top-1/2 left-1/2
            transform -translate-x-1/2 -translate-y-1/2
            text-center
            px-4
            w-full max-w-[800px]
            flex flex-col gap-5
            mt-10
          '
        >
          <h1
            ref={titleRef}
            className='text-[30px] lg:text-[60px] font-bold text-white leading-tight'
          >
            Transform Your <span className='text-brand-red'>Path</span> to
            <br />
            <span className='text-brand-red'> Success</span>
          </h1>

          <SplitTextComp
            text='Welcome to our comprehensive solution, optimizing hiring for
              employers and efficiently connecting top talent. For employees, we
              offer career opportunities aligning with aspirations. Elevate your
              success journey with us, unlocking your full potential together.'
            className='mt-4 text-[18px] leading-relaxed text-white/90'
            delay={100}
            duration={0.5}
            ease='ease-in'
            splitType='words'
            from={{ opacity: 0, y: 10 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin='-100px'
            textAlign='center'
          />

          <div className='mt-8 flex justify-center space-x-4'>
            <Link href="/contact" passHref legacyBehavior>
              <a className="bg-white text-brand-purple px-8 py-3 rounded-full font-semibold text-base hover:opacity-90 flex items-center justify-center">
                Find Works
              </a>
            </Link>

            <Link href="/contact" passHref legacyBehavior>
              <a className="bg-brand-red text-white px-8 py-3 rounded-full font-semibold text-base hover:opacity-90 flex items-center justify-center">
                Hire Talents Now
              </a>
            </Link>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Hero;
