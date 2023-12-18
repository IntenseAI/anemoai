"use client"
import React, { useEffect } from 'react';

interface ScrollLinkProps {
  to: string;
  children: React.ReactNode;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ to, children }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById(to);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const targetElement = document.getElementById(to);

      if (targetElement) {
        const elementOffset = targetElement.offsetTop;
        const elementHeight = targetElement.offsetHeight;

        if (scrollY > elementOffset - 50 && scrollY < elementOffset + elementHeight) {
          // Add your active class or any other logic here
        } else {
          // Remove active class or reset any other styles
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [to]);

  return (
    <a href={`#${to}`} onClick={handleClick}>
      {children}
    </a>
  );
};

export default ScrollLink;
