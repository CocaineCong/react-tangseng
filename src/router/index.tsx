import {RouteObject} from 'react-router-dom'
import React,{lazy}  from "react";
import Home from "../pages/Home"
import SearchDetail from "../pages/SearchDetail"
import '../App.css';

const Login = lazy(()=>import("../pages/Login"))
const Register = lazy(()=>import("../pages/Register"))
const NoFoundPage = lazy(()=>import("../pages/NotFound"))

const withLoadingComponent = (comp:JSX.Element)=>(
    <React.Suspense fallback={<div>Loading</div>}>
        {comp}
    </React.Suspense>
)

const router: RouteObject[] = [
    {path: "/Login", element: withLoadingComponent(<Login />)},
    {path: "/Register", element: withLoadingComponent(<Register />)},
    {path:"/", element:<Home />},
    {path:"/SearchDetail", element:<SearchDetail />},
    {path: "*", element: withLoadingComponent(<NoFoundPage />),},
]

export default router;