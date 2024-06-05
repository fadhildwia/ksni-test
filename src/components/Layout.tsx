import { Inter } from 'next/font/google';
import React from 'react';
import { Navbar } from './Navbar';

const inter = Inter({ subsets: ['latin'] });

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={inter.className}>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};
