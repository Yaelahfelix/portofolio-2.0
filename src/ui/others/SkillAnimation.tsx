'use client'

import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { SkillList } from '@/lib/skills';

const icons = [
  "/icon1.png",
  "/icon2.png",
  "/icon3.png",
  "/icon4.png",
  "/icon5.png",
  "/icon5.png",
  "/icon5.png",
];

interface Props {
  file: string,
  name: string
}
function Card({ file, name }: Props) {
  return (
    <motion.div className="relative w-10 h-10">
      <Image src={`/icon/skills/${file}`} alt={name} fill />
    </motion.div>
  );
}

const data: { Name: number }[] = Array(20)
  .fill(0)
  .map((_, i) => ({ Name: i }));

interface AppProps { }
function App({ }: AppProps) {
  const containerControls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [cardOrder, setCardOrder] = useState<number[]>(
    data.map((_, i) => i)
  );

  useEffect(() => {
    const animateContainer = async () => {
      if (ref.current) {
        await containerControls.start({
          x: -ref.current.scrollWidth,
          transition: {
            duration: 10,
            ease: "linear",
            repeat: Infinity,
          },
          onAnimationStart: (progress) => {
            containerControls.start({
              transition: {
                duration: 10,
                ease: "linear",
                repeat: Infinity,
              },
            })
          }
        });
        //
        // Update card order after each animation cycle
        setCardOrder((prevOrder) => [
          ...prevOrder.slice(1),
          prevOrder[0],
        ]);
      }
    };

    animateContainer();
  }, [containerControls]);

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-full"
        ref={ref}
        animate={containerControls}
        initial={{ x: '100%' }}
        style={{ display: "flex" }}
      >
        {SkillList.map((skill) => (
          <div key={skill.name} style={{ marginRight: "20px" }}>
            <Card name={skill.name} file={skill.file} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
export default App
