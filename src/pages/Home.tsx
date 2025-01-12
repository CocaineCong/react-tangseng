import React, { useState } from 'react';
import '../assets/styles/home.scss';
import { useNavigate } from 'react-router-dom';
import { Code } from '../constant';

const Home: React.FC = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === Code.KEY_CODE_DOWN) {
      // 回车键被按下
      navigate('/SearchDetail?query=' + query, { replace: true });
    }
  };

  return (
    <div className="search-home">
      <div className="search-content">
        <div id="logo">
          <img
            alt="search logo"
            src={require('../assets/images/googlelogo1.png')}
            className="logo"
          />
        </div>
        <div className="searchbar">
          <img
            alt="search"
            src={require('../assets/images/search.png')}
            className="mg"
          />
          <input
            type="text"
            id="search"
            placeholder="Search Tangseng or type a URL"
            value={query}
            onChange={onSearch}
            onKeyDown={handleKeyDown}
            name="keyword"
          />
          <img
            alt="microphone"
            src={require('../assets/images/microphone.png')}
            className="mcp"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
