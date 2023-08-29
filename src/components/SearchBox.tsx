import React from 'react';
import "../assets/styles/search-detail.scss"

const SearchBox: React.FC = (props: any) => {
    const info:any=props;
    
    return(
        <div className='search-home'>
            <div className='search-content'>
                <div id="logo"></div>
            </div>
            <div className="searchbar">
                <img src={require('../assets/images/search.png')} className="mg" />
                <input 
                    type="text" 
                    id="search" 
                    placeholder="Search Tangseng or type a URL" 
                    name="keyword" 
                    defaultValue={info}
                    /> 
                <img src={require('../assets/images/microphone.png')} className="mcp" />
            </div>
        </div>
    )
};

export default SearchBox;