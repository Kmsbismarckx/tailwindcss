import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { NavLink } from '@/ui/NavLink/NavLink.js';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>
      <header className="px-2 border-b">
        <a className="uppercase font-bold text-purple-800" href="#">
          TailwindCSS
        </a>
        <nav>
          <ul className="text-gray-500 font-semibold">
            <li>
              <NavLink href="#">Home</NavLink>
            </li>
            <li>
              <NavLink href="#">About</NavLink>
            </li>
            <li>
              <NavLink href="#">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  </React.StrictMode>
);
