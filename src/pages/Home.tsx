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
        <div className='search-input-box'>
            <input className='search-input' name="password" ></input>
        </div>
    </div>
);

};

export default Home;