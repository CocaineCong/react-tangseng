declare namespace API {
    
    export type SearchResultResp = {
        status?: number;
        data?: SearchResultRespData;
        msg?: string;
        error?: string;
    }

    export type SearchResultRespDataSearchList = {
        url_id?: number;
        desc?: string;
    }

    export type SearchResultRespData = {
        code?: number;
        search_engine_info_list?: SearchResultRespDataSearchList[];
        consuming_time?: number;
        count?: number;
    }

    export type SearchQueryResp = {
        status: number;
        data: SearchQueryData;
        msg: string;
        error: string;
    }
    export type SearchQueryData = {
        code: number;
        word_association_list: string[];
    }

}
