import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchNav.css'; 

/**
 * Строка поиска артистов, музыки и альбомов.
 */

interface SearchBarProps {
  compact?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  /**
   * Выполняет поиск.
   */
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery(''); 
      setIsExpanded(false);
    }
  };
  
  /**
   * Переключает видимость поиска.
   */
  const toggleSearch = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <form onSubmit={handleSearch} className="searchBar">
      {isExpanded && (
        <div className="inputContainer">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for artists or tracks..."
            className="input"
            autoFocus
          />
          {searchQuery && (
            <button
              type="button"
              className="clearButton"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
      )}

      <button
        type="button"
        className="button"
        onClick={toggleSearch}
        aria-label={isExpanded ? 'Cancel search' : 'Open search'}
      >
        {isExpanded ? 'Cancel' : 'Search'}
      </button>
    </form>
  );
};