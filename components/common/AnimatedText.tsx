'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  el?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  delay?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  el: Element = 'span',
  className = '',
  delay = 0,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 12,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Element className={className}>
      <motion.span
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="inline-block"
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            key={index}
            className="inline-block mr-[0.25em] whitespace-nowrap"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Element>
  );
};
