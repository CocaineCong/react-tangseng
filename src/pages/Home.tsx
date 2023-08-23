import React from 'react';
import {Divider, Layout} from 'antd';
import {Outlet} from "react-router-dom";
import HomeSider from '../components/HomeSider';
import Header from '../components/Header';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import "../assets/styles/home.scss"

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

const Home: React.FC = () => {
    return (
        <div className='search-home'>
            <div className='search-content'>
                <div id="logo">
                    <img src={require('../assets/images/googlelogo1.png')} className="logo" />
                </div>
                <div className="searchbar">
                    <img src={require('../assets/images/search.png')} className="mg" />
                    <input type="text" id="search" value="Search Google or type a URL" 
                        // onFocus="if(value=='Search Google or type a URL')value=''" 
                        // onblur="if(!value)value='Search Google or type a URL'" 
                        name="keyword" /> 
                    <img  src={require('../assets/images/microphone.png')} className="mcp" />
                </div>  
            </div>
        </div>
    );
};

export default Home;