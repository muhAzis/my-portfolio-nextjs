import React from 'react';
import { MotionStyle, Variants, motion } from 'framer-motion';

interface Props {
  children?: React.ReactNode;
  variants: Variants;
  className?: string;
  style?: MotionStyle;
  always?: boolean;
  margin?: string;
  once?: boolean;
}

const Div = ({ children, variants, className, style, margin = '-100px 0px -200px 0px', once = true }: Props) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        margin,
      }}
      className={className}
      style={{ position: 'relative', ...style }}
    >
      {children}
    </motion.div>
  );
};

export default Div;
