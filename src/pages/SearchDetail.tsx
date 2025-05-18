import React, { useEffect, useState } from 'react';
import { Divider, List, Spin, Tag, Flex } from 'antd'; // 引入Spin组件
import '../assets/styles/search-detail.scss';
import { useSearchParams } from 'react-router-dom';
import { searchEngineSearch } from '../api/search-engine';
import { Code } from '../constant';

type PaginationPosition = 'top' | 'bottom' | 'both';
type PaginationAlign = 'start' | 'center' | 'end';

const SearchDetail: React.FC = () => {
  const [position, setPosition] = useState<PaginationPosition>('bottom');
  const [align, setAlign] = useState<PaginationAlign>('center');
  const [searchResList, setSearchResList] =
    useState<API.SearchResultRespDataSearchList[]>();
  const [query, setQuery] = useState<any>();
  const [count, setCount] = useState<number>();
  const [consumingTime, setconsumingTime] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false); // 新增loading状态
  const [params] = useSearchParams();
  let param = params.get('query');

  const tangsengSearch = async () => {
    setLoading(true); // 开始加载数据时，设置loading为true
    const res: any = await searchEngineSearch({ query: param });
    setQuery(param);
    setLoading(false); // 数据加载完成后，设置loading为false
    if (res?.status === Code.SuccessCode) {
      const resList = res?.data?.search_engine_info_list;
      const count = res?.data?.count;
      const consumingTime = res?.data?.consuming_time;
      setSearchResList(resList);
      setCount(count);
      setconsumingTime(consumingTime);
    }
  };

  useEffect(() => {
    tangsengSearch();
  }, []);

  const handleKeyDown = async (event: any) => {
    if (event.keyCode === Code.KEY_CODE_DOWN) {
      setLoading(true); // 搜索时设置loading为true
      const res: any = await searchEngineSearch({
        query: event?.target?.value,
      });
      setQuery(event?.target?.value);
      setLoading(false); // 搜索完成后，设置loading为false
      if (res?.status === Code.SuccessCode) {
        const resList = res?.data?.search_engine_info_list;
        setSearchResList(resList);
      }
    }
  };

  return (
    <div className="search-detail-contain">
      <div className="search-detail-header">
        <div className="search-home-compose">
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
      <Flex style={{ marginLeft:20 }} >
          <Tag color="magenta">搜索出: {count} 个结果</Tag>
          <Tag color="red">总计耗时: {consumingTime} s</Tag>
      </Flex>
      <Divider size="small" />

      {/* 在加载数据时显示 Spin 动画 */}
      {loading ? (
        <div className="loading-container">
          tangseng searching...
          <Spin size="large" />
        </div>
      ) : (
        <List
          className="search-detail-info"
          pagination={{ position, align }}
          size="large"
          dataSource={searchResList}
          renderItem={(item) => <List.Item>{item?.desc}</List.Item>}
        />
      )}
    </div>
  );
};

export default SearchDetail;
