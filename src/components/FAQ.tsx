import { useEffect, useState } from 'react';
import { data } from '../../data/data';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

export const FAQ = () => {
  const [faqs, setFaqs] = useState(data.faq.questions);
  const [toggledIndex, setToggledIndex] = useState<number[]>([]);

  useEffect(() => setFaqs(data.faq.questions), []);

  const handleToggle = (index: number) => {
    if (toggledIndex.includes(index)) {
      const toggleId = toggledIndex.indexOf(index);
      const newIndexes = toggledIndex.splice(toggleId, 1);
      setToggledIndex(newIndexes);
    } else {
      setToggledIndex(prev => [...prev, index]);
    }
    faqs.map((faq, i) => {
      if (i === index) {
        faq.toggled = !faq.toggled;
      }
    });
  };

  return (
    <div className='center-flex flex-col my-10'>
      <motion.div
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        transition={{
          type: 'tween',
          duration: 0.4
        }}
        className='center-flex flex-col'
      >
        <div className='upperText'>{data.faq.upperText}</div>
        <div className='headingTitle'>{data.faq.title}</div>
      </motion.div>
      <motion.div
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        transition={{
          type: 'tween',
          duration: 0.4
        }}
        className='w-3/4 mt-10 grid grid-rows-5 gap-9 h-screen'
      >
        {faqs &&
          faqs.map((question, index) => {
            return (
              <div
                className='items-center'
                key={index}
                onClick={() => handleToggle(index)}
              >
                <div className='flex flex-row justify-between'>
                  <div className='question flex-start sm:text-xl text-base text-lightGrey font-bold'>
                    {question.que}
                  </div>
                  <div className='mr-10 center-flex'>
                    {question.toggled ? (
                      <FaMinus className='text-gray-500 text-xl' />
                    ) : (
                      <FaPlus className='text-gray-500 text-xl' />
                    )}
                  </div>
                </div>
                <div
                  className={twMerge(
                    `${!question.toggled ? 'hidden' : ''}`,
                    'text-gray-500 text-sm font-semibold mt-5'
                  )}
                >
                  {question.ans}
                </div>
              </div>
            );
          })}
      </motion.div>
    </div>
  );
};
