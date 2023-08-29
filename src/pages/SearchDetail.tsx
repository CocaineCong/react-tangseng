import React, { useEffect, useState } from 'react';
import { Divider, List, Typography } from 'antd';
import '../assets/styles/search-detail.scss'
import SearchBox from '../components/SearchBox';
import { useSearchParams } from 'react-router-dom';
import { searchEngineSearch } from '../api/search-engine';
import { Code } from '../constant';
import { AxiosResponse } from 'axios';

type PaginationPosition = 'top' | 'bottom' | 'both';
type PaginationAlign = 'start' | 'center' | 'end';

const SearchDetail: React.FC = () => {
    const [position, setPosition] = useState<PaginationPosition>('bottom');
    const [align, setAlign] = useState<PaginationAlign>('center');
    const [searchResList, setSearchResList] = useState<API.SearchResultRespDataSearchList[]>();
    const [query, setQuery] = useState('');
    const [params] = useSearchParams()
    let param = params.get('query')

    const tangsengSearch = async()=> {
        const res:AxiosResponse<API.SearchResultResp> = await searchEngineSearch({query:query})
        setQuery(query)
        if (res?.status === Code.SuccessCode) {
            // @ts-ignore //TODO: 优化一下
            var resList = res?.data?.search_engine_info_list
            setSearchResList(resList)
        }
    }

    useEffect(()=>{
        tangsengSearch()
    })

    return (
        <div className='search-detail-contain'>
            <List
                pagination={{ position, align }}
                size="large"
                header={<SearchBox />}
                dataSource={searchResList}
                renderItem={(item) => <List.Item>{item?.desc}</List.Item>}
            />
        </div>
    )
};

export default SearchDetail;