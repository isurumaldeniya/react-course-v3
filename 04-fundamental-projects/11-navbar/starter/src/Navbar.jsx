// import { useState } from 'react';
// import { links } from './data';

// const Navbar = () => {
//   const [showLinks, setShowLinks] = useState(false);

//   return (
//     <div>
//       {showLinks ? (
//         [links.map((link) => {
//           return (
//             <nav key={link.id}>
//               <h3>{link.text}</h3>
//             </nav>
//           );
//         }),  <button
//         style={{ textTransform: 'capitalize' }}
//         onClick={() => setShowLinks(!showLinks)}
//       >
//         hide links
//       </button>]
//       ) : (
//         <button
//           style={{ textTransform: 'capitalize' }}
//           onClick={() => setShowLinks(!showLinks)}
//         >
//           show links
//         </button>
//       )}
//     </div>
//   );
// };

// export default Navbar;

import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        {showLinks && (
          <div className='links-container'>
            <ul className='links'>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;