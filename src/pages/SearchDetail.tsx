import React, { useEffect, useState } from 'react';
import { Divider, List } from 'antd';
import '../assets/styles/search-detail.scss'
import { useSearchParams } from 'react-router-dom';
import { searchEngineSearch } from '../api/search-engine';
import { Code } from '../constant';

type PaginationPosition = 'top' | 'bottom' | 'both';
type PaginationAlign = 'start' | 'center' | 'end';

const SearchDetail: React.FC = () => {
    const [position, setPosition] = useState<PaginationPosition>('bottom');
    const [align, setAlign] = useState<PaginationAlign>('center');
    const [searchResList, setSearchResList] = useState<API.SearchResultRespDataSearchList[]>();
    const [query, setQuery] = useState<any>();
    const [params] = useSearchParams()
    let param = params.get('query')

    const tangsengSearch = async()=> {
        const res:any = await searchEngineSearch({query:param})
        setQuery(param)
        if (res?.status === Code.SuccessCode) {
            var resList = res?.data?.search_engine_info_list
            setSearchResList(resList)
        }
    }

    useEffect(()=>{
        tangsengSearch()
    },[])

    const handleKeyDown = async (event:any) => {
        if (event.keyCode === Code.KEY_CODE_DOWN) {
            const res:any = await searchEngineSearch({query:event?.target?.value})
            setQuery(event?.target?.value)
            if (res?.status === Code.SuccessCode) {
                var resList = res?.data?.search_engine_info_list
                setSearchResList(resList)
            }
        }
    }

    return (
        <div className='search-detail-contain'>
            <div className='search-detail-header'>
                <div className='search-home-compose'>
                    <div className="searchbar-compose">
                        <img src={require('../assets/images/search.png')} className="mg" />
                        <input 
                            type="text" 
                            id="search" 
                            placeholder="Search Tangseng or type a URL" 
                            name="keyword" 
                            defaultValue={query}
                            onKeyDown={handleKeyDown}
                        /> 
                        <img src={require('../assets/images/microphone.png')} className="mcp" />
                    </div>
                </div>
            </div>
            <Divider />
            <List
                className='search-detail-info'
                pagination={{ position, align }}
                size="large"
                dataSource={searchResList}
                renderItem={(item) => <List.Item>{item?.desc}</List.Item>}
            />
        </div>
    )
};

export default SearchDetail;