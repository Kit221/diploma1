import React from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from './SearchNav';
import './Navigation.css';

/**
 * Навигационная панель сайта.
 */

export const Navbar: React.FC = () => {

  /**
   * Обрабатывает клик по внешней ссылке.
   */

  const handleExternalClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {

    /**
   * Обрабатывает клик по не работающей ссылке.
   */
  
    const blockedLinks = ['music', 'charts', 'events', 'dashboard'];

    if (blockedLinks.some((keyword) => href.includes(keyword))) {
      e.preventDefault(); 
      alert(
        `Страница "${href}" недоступна. Пожауйста, повторите попытку позже.`
      );
    }
  };
  return (
    <nav className="navbar">
      <div className="logoContainer">
        <Link to="/" className="logoLink">
          Last.fm
        </Link>
      </div>

      <div className="searchContainer">
        <SearchBar compact />
      </div>

      <div className="linksContainer">
        <Link to="/" className="link">
          Home
        </Link>

        <ul className="linksList">
          <li>
            <a
              href="https://www.last.fm/dashboard "
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              onClick={(e) =>
                handleExternalClick(e, 'https://www.last.fm/dashboard ')
              }
            >
              Live
            </a>
          </li>
          <li>
            <a
              href="https://www.last.fm/music "
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              onClick={(e) =>
                handleExternalClick(e, 'https://www.last.fm/music ')
              }
            >
              Music
            </a>
          </li>
          <li>
            <a
              href="https://www.last.fm/charts "
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              onClick={(e) =>
                handleExternalClick(e, 'https://www.last.fm/charts ')
              }
            >
              Charts
            </a>
          </li>
          <li>
            <a
              href="https://www.last.fm/events "
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              onClick={(e) =>
                handleExternalClick(e, 'https://www.last.fm/events ')
              }
            >
              Events
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};