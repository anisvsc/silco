'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';
import { Tilt } from '@/components/ui/tilt';

export default function SilcoCard() {
  const containerRef = useRef(null);

  return (
    <div
      className="overflow-hidde flex min-h-[100dh] cursor-pointer items-center justify-center"
      ref={containerRef}
    >
      <motion.div
        drag
        dragConstraints={containerRef}
        whileDrag={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
      >
        <Tilt isRevese rotationFactor={10}>
          <div className="flex flex-col items-center justify-center gap-4 rounded-4xl border bg-primary-foreground/50 pb-4">
            <Image
              alt="silco"
              className="pointer-events-none rounded-3xl"
              height={300}
              src={'/silco.jpg'}
              width={300}
            />
            <p className="inline-block font-bold font-mono text-4xl">SILCO</p>
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
}
