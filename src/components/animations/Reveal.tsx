import React, { forwardRef, useEffect, useRef } from 'react';
import { Variants, motion, useAnimation, useInView } from 'framer-motion';
import { useViewport } from '@/hooks/useViewport';

interface Props {
  children: React.ReactNode;
  variants: Variants;
  className?: string;
  always?: boolean;
}

// eslint-disable-next-line react/display-name
const Reveal: React.FC<Props> = ({ children, variants, className, always = false }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const [width, height] = useViewport();

  const isInView = useInView(elementRef, { once: false, margin: '-100px 0px -200px 0px' });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden');
    }
  }, [isInView, mainControls]);

  return width <= 576 || always ? (
    <motion.div ref={elementRef} variants={variants} initial="hidden" animate={mainControls} style={{ position: 'relative' }} className={className}>
      {children}
    </motion.div>
  ) : (
    <motion.div ref={elementRef} variants={variants} style={{ position: 'relative' }} className={className}>
      {children}
    </motion.div>
  );
};

export default Reveal;
