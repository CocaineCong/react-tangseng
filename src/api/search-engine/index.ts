import _ from 'lodash';
import instance from "../index";

const searchEngineBaseUrl = "/api/v1/search_engine/"

export async function searchEngineSearch(body?: any, options?: { [key: string]: any }) {
    return instance<API.SearchResultResp>(searchEngineBaseUrl+`search`, {
        method: 'GET',
        params:body,
    });
}

export async function searchEngineQuery(body?: any, options?: { [key: string]: any }) {
    return instance<API.SearchQueryResp>(searchEngineBaseUrl+`query`, {
        method: 'GET',
        params:body,
    });
}