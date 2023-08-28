import React, { useState } from 'react';
import { Divider, List, Typography } from 'antd';
import '../assets/styles/search-detail.scss'
import SearchBox from '../components/SearchBox';
import { render } from 'react-dom';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Man charged over missing wedding girl.',
  'Man charged over missing wedding girl.',
  'Man charged over missing wedding girl.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
  'Los Angeles battles huge wildfires.',
  'Los Angeles battles huge wildfires.',
  'Los Angeles battles huge wildfires.',
  'Los Angeles battles huge wildfires.',
];

type PaginationPosition = 'top' | 'bottom' | 'both';
type PaginationAlign = 'start' | 'center' | 'end';

const SearchDetail: React.FC = () => {
    const [position, setPosition] = useState<PaginationPosition>('bottom');
    const [align, setAlign] = useState<PaginationAlign>('center');

    return (
    <div className='search-detail-contain'>
        <div className='search-deatil-box'>
            <List
                pagination={{ position, align }}
                size="large"
                style={{left:10}}
                header={<SearchBox />}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            />
        </div>
    </div>
    )
};

export default SearchDetail;