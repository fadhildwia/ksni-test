import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';

const navItems = [
  {
    path: '/#home',
    name: 'Home'
  },
  {
    path: '/#about',
    name: 'About'
  },
  {
    path: '/#product',
    name: 'Products'
  },
  {
    path: '/#writings',
    name: 'Writings'
  },
  {
    path: '/#chat',
    name: 'Chat'
  }
];

export const Navbar = () => {
  const [position, setPosition] = useState<string>('/#home');
  const [hoveredPath, setHoveredPath] = useState<string>(position);

  const [isTop, setIsTop] = useState(0);

  const onScroll = useCallback(() => {
    const { scrollY } = window;
    setIsTop(scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed top-7 left-0 right-0 flex justify-center z-50">
      <nav
        className={`flex relative rounded-full p-2 sm:backdrop-blur ${
          isTop === 0 ? '' : 'bg-blue-400/[0.2]'
        }`}
      >
        {navItems.map((item) => {
          return (
            <Link
              key={item.path}
              className={`px-3 sm:px-5 py-1 text-sm sm:text-base relative duration-300 ease-in ${
                position === item.path ? 'text-blue-100' : 'text-zinc-300'
              }`}
              data-active={position}
              href={item.path}
              onClick={() => setPosition(item.path)}
              onMouseOver={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(position)}
            >
              <span>{item.name}</span>
              {item.path === hoveredPath && (
                <motion.div
                  className="absolute bottom-0 left-0 h-full bg-blue-500/50 rounded-full -z-10"
                  layoutId="navbar"
                  aria-hidden="true"
                  style={{
                    width: '100%'
                  }}
                  transition={{
                    type: 'spring',
                    bounce: 0.25,
                    stiffness: 130,
                    damping: 9,
                    duration: 0.3
                  }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
