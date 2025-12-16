import { motion } from 'motion/react';
import { type ReactNode, useEffect, useState } from 'react';

import { getCurrentFormattedDate } from '@/utils/get-current-date';
import Link from 'next/link';

function BlueText({ children }: { children: ReactNode | string }) {
  return <span className="font-medium text-blue-500">{children}</span>;
}
function GreenText({ children }: { children: ReactNode | string }) {
  return <span className="font-medium text-green-500">{children}</span>;
}
function GrayText({ children }: { children: ReactNode | string }) {
  return <span>{children}</span>;
}

const terminalLogs = [
  <pre></pre>,
  <pre key={0}>
    <GrayText>Last Session: {getCurrentFormattedDate()}</GrayText>
  </pre>,
  <pre key={1}>
    <span className="select-none">
      <BlueText>mrluisfer@</BlueText> <GreenText>~ $</GreenText>{' '}
    </span>
    <GrayText>echo "Hello, World!"</GrayText>
  </pre>,
  <pre key={2}>
    <GrayText>Hello, World!</GrayText>
  </pre>,
  <pre key={3}>
    <span className="select-none">
      <BlueText>mrluisfer@</BlueText> <GreenText>~ $</GreenText>{' '}
    </span>
    <Link href={'/poem'} className="hover:underline" target="_blank" rel="noopener noreferrer">
      <GrayText>curl https://mrluisfer.vercel.app/poem</GrayText>
    </Link>
  </pre>,
  <pre key={4} className="text-wrap">
    <GrayText>A ship in harbor is safe, but that is not what ships are built for.</GrayText>
  </pre>,
];

export default function Content() {
  const [lines, setLines] = useState<JSX.Element[]>([]);
  const [currentLine, setCurrentLine] = useState<ReactNode | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < terminalLogs.length) {
      const textContent = terminalLogs[currentIndex].props.children;

      if (typeof textContent === 'string') {
        if (charIndex < textContent.length) {
          const timeout = setTimeout(() => {
            setCurrentLine(<span>{textContent.slice(0, charIndex + 1)}</span>);
            setCharIndex((prev) => prev + 1);
          }, 50);
          return () => clearTimeout(timeout);
        }
      } else {
        setLines((prev) => [...prev, terminalLogs[currentIndex]]);
        setCurrentLine(null);
        setCurrentIndex((prev) => prev + 1);
        setCharIndex(0);
      }
    }
  }, [charIndex, currentIndex]);

  return (
    <div className="font-mono text-sm leading-relaxed text-gray-800 dark:text-gray-300">
      {lines.map((line, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ display: 'block' }}
        >
          {line}
        </motion.span>
      ))}

      {currentIndex < terminalLogs.length && (
        <motion.span>
          {currentLine}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.7 }}
          >
            |
          </motion.span>
        </motion.span>
      )}
    </div>
  );
}
