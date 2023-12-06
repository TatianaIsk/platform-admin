'use client';

import { PropsWithChildren } from 'react';
import './globals.css';

interface RootLayoutProps extends PropsWithChildren {}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body style={{ fontFamily: 'Arial' }}>{children}</body>
    </html>
  );
};

export default RootLayout;