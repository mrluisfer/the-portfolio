import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'motion/react';

export default function Phrase() {
  return (
    <div className="group/phrase relative grid h-full w-full flex-1 flex-col place-content-center gap-1 overflow-hidden rounded-[inherit] p-4 sm:w-auto lg:w-full">
      {/* Animated ambient glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/phrase:opacity-100">
        <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-zinc-400/15 blur-2xl dark:bg-zinc-100/[0.04]" />
        <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-zinc-400/15 blur-2xl dark:bg-zinc-100/[0.04]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-3">
        <p className="text-center font-mono text-sm leading-relaxed font-semibold text-orange-900 italic dark:text-orange-100">
          "Talk is cheap. Show me the code."
        </p>
        <div className="flex items-center justify-end gap-2">
          <Avatar className="ring-2 ring-zinc-300/60 transition-all group-hover/phrase:ring-zinc-400/70 dark:ring-white/10 dark:group-hover/phrase:ring-white/20">
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
            className="border-b-2 border-transparent text-right text-xs font-medium transition-all hover:cursor-pointer hover:border-orange-500 hover:text-orange-600 dark:text-orange-200 dark:hover:border-orange-400 dark:hover:text-orange-100"
            whileHover={{ x: -2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            Linus Torvalds
          </motion.a>
        </div>
      </div>
    </div>
  );
}
