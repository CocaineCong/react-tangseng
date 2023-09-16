import React, { useState } from 'react';
import { Input } from 'antd';
import "../assets/styles/home.scss"
import { searchEngineQuery, searchEngineSearch } from '../api/search-engine';
import { useNavigate } from 'react-router-dom';
import { Code } from '../constant';


const Home: React.FC = () => {
    const [query,setQuery] = useState('');
    const navigate = useNavigate()

    const onSearch = (event:any)=> {
        if (event.keyCode === Code.KEY_CODE_DOWN) { // 回车键被按下
            setTimeout(()=>{
                navigate('/SearchDetail?query='+query, {replace:true})
            })
        }
      }
    
    return (
        <div className='search-home'>
            <div className='search-content'>
                <div id="logo">
                    <img src={require('../assets/images/googlelogo1.png')} className="logo" />
                </div>
                <div className="searchbar">
                    <img src={require('../assets/images/search.png')} className="mg" />
                    <input 
                        type="text" 
                        id="search" 
                        placeholder="Search Tangseng or type a URL" 
                        value={query}
                        onKeyDown={onSearch}
                        name="keyword" /> 
                    <img src={require('../assets/images/microphone.png')} className="mcp" />
                </div>
            </div>
        </div>
    );
};

export default Home;