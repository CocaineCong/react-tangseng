import React, { useState } from 'react';
import { Input } from 'antd';
import "../assets/styles/home.scss"
import { searchEngineQuery, searchEngineSearch } from '../api/search-engine';
import { Code } from '../constant';
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

    const onSearch = async(event:any)=> {
        if (event.keyCode === 13) {// 回车键被按下
          console.log("query is",query)
          const data:any = await searchEngineSearch({query:query})
          console.log("data",data)
          if (data.status === Code.SuccessCode) {
                setTimeout(()=>{
                    navigate('/SearchDetail')
                } ,800)
            } 
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
                        // onFocus= {searchQuery}
                        onChange={searchQuery}
                        value={query}
                        onKeyDown={onSearch}
                        // onblur="if(!value)value='Search Google or type a URL'" 
                        name="keyword" /> 
                    <img src={require('../assets/images/microphone.png')} className="mcp" />
                </div>
            </div>
        </div>
    );
};

export default Home;