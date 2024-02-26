import React, { forwardRef, useEffect, useRef } from 'react';
import { MotionStyle, Variants, motion, useAnimation, useInView } from 'framer-motion';
import { useViewport } from '@/hooks/useViewport';

interface Props {
  children?: React.ReactNode;
  variants: Variants;
  className?: string;
  style?: MotionStyle;
  always?: boolean;
  margin?: string;
  once?: boolean;
  onHoverEnd?: () => void;
}

// eslint-disable-next-line react/display-name
const Reveal: React.FC<Props> = ({ children, variants, className, style, always = false, margin = '-300px 0px -200px 0px', once = false, onHoverEnd }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const [width, height] = useViewport();

  const isInView = useInView(elementRef, { once, margin });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden');
    }
  }, [isInView, mainControls]);

  return width <= 576 || always ? (
    <motion.div ref={elementRef} variants={variants} initial="hidden" animate={mainControls} style={{ ...style, position: 'relative' }} className={className} onHoverEnd={onHoverEnd}>
      {children}
    </motion.div>
  ) : (
    <motion.div ref={elementRef} variants={variants} style={{ ...style, position: 'relative' }} className={className} onHoverEnd={onHoverEnd}>
      {children}
    </motion.div>
  );
};

export default Reveal;
