import React, { useState } from 'react';
import { Input } from 'antd';
import "../assets/styles/home.scss"
import { searchEngineQuery, searchEngineSearch } from '../api/search-engine';
import { useNavigate } from 'react-router-dom';


const Home: React.FC = () => {
    const [queryList,setQueryList] = useState([]);
    const [query,setQuery] = useState('');
    const navigate = useNavigate()

    const searchQuery = async (e:any) => {
        setQuery(e?.target?.value)
        // if (query !== "") {
            // const data:any = await searchEngineQuery({value:query})
            // console.log("data",data)
            // if (data?.status === Code.SuccessCode){
            //     console.log("data",data)
            //     // setQueryList(data?.data)
            // }
        // }
    }

    const onSearch = (event:any)=> {
        if (event.keyCode === 13) { // 回车键被按下
            setTimeout(()=>{
                navigate('/SearchDetail?query='+query, {replace:true})
            } ,200)
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
                        onChange={searchQuery}
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