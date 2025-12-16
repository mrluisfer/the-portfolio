import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import '@/styles/white-pattern.scss';
import { motion } from 'motion/react';
import { FaCheck } from 'react-icons/fa6';
import { HiLocationMarker } from 'react-icons/hi';
import { CONTENT_TEXT_COLOR } from '.';

const GITHUB_PROFILE_IMG = 'https://avatars.githubusercontent.com/u/65029792?v=4';
const LOCATION = 'Morelia, México';
const ROLE = 'Full Stack Developer';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="white-pattern relative flex flex-col items-center gap-4 rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[50px] px-4 pt-12 pb-4 sm:flex-row sm:items-start sm:gap-6 sm:px-0 sm:pt-16 sm:pl-4 lg:gap-7 lg:pt-20"
    >
      {/* Avatar Section */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4, type: 'spring', stiffness: 200 }}
        className="group relative"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <Avatar className="h-20 w-20 shadow-lg ring-4 ring-white/50 transition-all duration-300 group-hover:ring-blue-400/30 sm:h-24 sm:w-24 lg:h-28 lg:w-28">
            <AvatarImage
              src={GITHUB_PROFILE_IMG}
              alt="Luis Alvarez - Full Stack Developer"
              className="object-cover"
            />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-xl font-bold text-white">
              LA
            </AvatarFallback>
          </Avatar>
        </motion.div>

        {/* Verified Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 300 }}
          whileHover={{ scale: 1.1, rotate: 10 }}
          className="absolute -right-1 -bottom-1 cursor-pointer rounded-full bg-gradient-to-br from-blue-400 to-blue-500 p-2 text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/50"
          title="Verified Developer"
        >
          <FaCheck className="text-sm" />
        </motion.div>

        {/* Glow effect */}
        <div className="absolute inset-0 -z-10 rounded-full bg-blue-400/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      </motion.div>

      {/* Info Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex flex-col gap-2 text-center sm:gap-2.5 sm:text-left"
      >
        {/* Name */}
        <motion.h1
          className="text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl dark:text-black"
          whileHover={{ letterSpacing: '0.02em' }}
          transition={{ duration: 0.2 }}
        >
          Luis Alvarez
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="ml-2 inline-block text-xl"
          >
            👋
          </motion.span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={`${CONTENT_TEXT_COLOR} flex items-center justify-center gap-2 text-sm font-medium sm:justify-start sm:text-base`}
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-500" />
          {ROLE}
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={`${CONTENT_TEXT_COLOR} flex items-center justify-center gap-1.5 text-xs opacity-80 sm:justify-start sm:text-sm`}
        >
          <HiLocationMarker className="text-blue-500" />
          <span>{LOCATION}</span>
        </motion.div>

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-1"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 dark:border-blue-700 dark:bg-blue-900/20">
            <div className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </div>
            <span className="text-xs font-medium">Available for projects</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 hidden lg:block">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-sm"
        />
      </div>
    </motion.header>
  );
};

export default Header;
