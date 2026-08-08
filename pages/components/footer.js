import React from 'react';

/*
Goal is to render the following HTML:

<p class="text-center"><a href="index.html">Home</a> | <a href="teaching.html">Teaching</a> | 
    <a href="research.html">Research </a> | <a href="resources.html">Resources</a> | <a href="contact.html">
    Contact </a>&nbsp; &nbsp; &nbsp;
    &copy; 2018
</p>
*/

const NAV_ITEMS = [
  { label: 'Home', href: '/home' },
  { label: 'Teaching', href: '/teaching' },
  { label: 'Research', href: '/research' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' }
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <p className="text-center">
      <span>|</span>
      {NAV_ITEMS.map((item) => (
        <span key={item.href}>&nbsp;<a href={item.href}>{item.label}</a>&nbsp;|</span>
      ))}
      <span> &nbsp;&nbsp; &copy; {year}</span>
    </p>
  );
};
export default Footer;