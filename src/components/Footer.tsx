import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-4">
      <div className="text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} My Blog. All rights reserved.
        </p>
        <p className="text-sm">
          Built with ❤️ using Next.js, Tailwind CSS, and Sanity CMS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
