import _ from 'lodash';
import instance from "../index";

const userBaseUrl = "/api/v1/user/"

export async function login(body: API.UserLoginReq, options?: { [key: string]: any }) {
    let params = new FormData();
    _.forIn(body,function(value:string,key:string){
        return params.append(key,value)
    })
    return instance<API.CommonResp>(userBaseUrl+'login',{
        method:'POST',
        data:params,
        ...(options||{}),
    })
}

export async function register(body: API.UserRegisterReq, options?: { [key: string]: any }) {
    let params = new FormData();
    _.forIn(body,function(value:string,key:string){
        return params.append(key,value)
    })
    return instance<API.CommonResp>(userBaseUrl+'register',{
        method:'POST',
        data:params,
        ...(options||{}),
    })
}
