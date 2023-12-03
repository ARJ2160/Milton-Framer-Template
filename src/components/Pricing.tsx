import { useState } from 'react';
import { data } from '../../data/data';
import { Button, Chips } from '.';
import { motion } from 'framer-motion';

export const Pricing = () => {
  const [activeSection, setActiveSection] = useState<'Monthly' | 'Yearly'>(
    'Monthly'
  );

  return (
    <motion.div
      initial={{ y: 200 }}
      whileInView={{ y: 0 }}
      transition={{
        type: 'tween',
        duration: 0.4
      }}
      className='center-flex flex-col h-fit my-20'
    >
      <div className='upperText'>{data.pricing.upperText}</div>
      <div className='headingTitle'>{data.pricing.title}</div>
      <div className='time-choice center-flex gap-5 mt-5'>
        {data.pricing.timeChoice.map((time, i) => {
          return (
            <div className='center-flex' key={i}>
              <Button
                classNames={`font-semibold font-mono text-black border-2 border-black shadow-2xl px-5 py-3 ${
                  activeSection === time && 'border-sky-600'
                }`}
                onClick={() =>
                  setActiveSection(time === 'Monthly' ? 'Monthly' : 'Yearly')
                }
              >
                {time}
              </Button>
              <div>
                {time === 'Yearly' ? (
                  <div className='font-semibold ml-4'>✨ save 30%</div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-1 mt-10 gap-5'>
        {data.pricing.cardConfig.map((card, i) => {
          return (
            <div
              className='col-span-1 p-5 border-2 border-black rounded-xl shadow-2xl'
              key={i}
            >
              <div className='center-flex !justify-between'>
                <Chips classNames='bg-[#334E94] text-white'>{card.plan}</Chips>
                {card.bestDeal && (
                  <Chips classNames='bg-black text-white center-flex'>
                    Best Deal 🔥
                  </Chips>
                )}
              </div>
              <div className='text-gray-500 my-7'>{card.subText}</div>
              <div className='my-5'>
                <span className='text-6xl font-extrabold'>{`$${
                  activeSection === 'Monthly'
                    ? card.monthlyPrice
                    : activeSection === 'Yearly' && card.yearlyPrice
                }`}</span>
                /mo
                <div>
                  {card.plan !== 'Free'
                    ? `Billed ${
                        activeSection === 'Yearly' && card.plan === 'Starter'
                          ? '$180'
                          : activeSection === 'Yearly' && card.plan === 'Pro'
                            ? '$540'
                            : ''
                      } Monthly`
                    : 'Free Forever'}
                </div>
              </div>
              <div className='my-10'>
                <Button classNames='bg-lightGrey text-white center-flex px-10 w-full rounded-xl'>
                  Get Started
                </Button>
                <div className='text-xs center-flex mt-3'>
                  {card.plan !== 'Free'
                    ? '7 days free trial no credit card needed'
                    : 'No credit card needed'}
                </div>
              </div>
              <div>
                <div className='font-semibold'>Whats Included:</div>
                <div>
                  {card.features.map((feature, key) => {
                    return (
                      <div
                        className='flex items-center mt-5 text-gray-500'
                        key={key}
                      >
                        <div className='mr-5'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-6 h-6'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M4.5 12.75l6 6 9-13.5'
                            />
                          </svg>
                        </div>
                        <div>{feature}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
