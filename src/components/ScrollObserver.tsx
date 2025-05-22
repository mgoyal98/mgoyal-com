'use client';

import { useEffect } from 'react';

export default function ScrollObserver() {
  useEffect(() => {
    const sections = document.querySelectorAll('section:not(:first-of-type)');
    sections.forEach((section) => {
      section.classList.add('animate-on-scroll');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the element is in view
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.3, // trigger when 10% of the target is visible
      }
    );

    // Observe all elements with animate-on-scroll class
    sections.forEach((el) => observer.observe(el));

    return () => {
      sections.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
}
