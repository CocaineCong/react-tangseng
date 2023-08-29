import React, { useEffect, useState } from 'react';
import "../assets/styles/search-detail.scss"

const SearchBox: React.FC = (props: any) => {
    const value:any=props;
    return(
        <div className='search-home-compose'>
            <div className="searchbar-compose">
                <img src={require('../assets/images/search.png')} className="mg" />
                <input 
                    type="text" 
                    id="search" 
                    placeholder="Search Tangseng or type a URL" 
                    name="keyword" 
                    defaultValue={value?.query}
                    /> 
                <img src={require('../assets/images/microphone.png')} className="mcp" />
            </div>
        </div>
    )
};

export default SearchBox;