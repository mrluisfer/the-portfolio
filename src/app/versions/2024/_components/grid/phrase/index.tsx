import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'motion/react';

export default function Phrase() {
  return (
    <div className="grid h-full w-full flex-1 flex-col place-content-center gap-1 rounded-[inherit] bg-gradient-to-br from-orange-100 to-orange-300 p-2 sm:w-auto lg:w-full">
      <p className="text-center font-mono text-sm font-semibold italic dark:text-orange-950">
        "Talk is cheap. Show me the code."
      </p>
      <div className="flex items-center justify-end gap-2">
        <Avatar>
          <AvatarImage
            className="object-cover"
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQcvkis4xm8lwEjTUpieGsxFMUXY9EdQSlEs-JW-qoQjrzXFi2OmXzGr12Ena1Dl6HZpxMaIGtrBLAmTou80kIgeg"
            alt="Linus Torvalds"
          />
          <AvatarFallback>LT</AvatarFallback>
        </Avatar>
        <motion.a
          href="https://en.wikipedia.org/wiki/Linus_Torvalds"
          target="_blank"
          rel="noreferrer noopener"
          className="border-b-2 border-transparent text-right text-xs transition-all hover:cursor-pointer hover:border-orange-400 dark:text-orange-900 dark:hover:text-orange-800"
        >
          Linus Torvalds
        </motion.a>
      </div>
    </div>
  );
}
