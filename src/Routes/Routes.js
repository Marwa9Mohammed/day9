import React from 'react'
import {  createBrowserRouter, createHashRouter } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../components/Home/Home'
import Details from '../components/Details/Details'
import Favorites from '../components/Favorites/Favorites'


export let routes = createHashRouter([
    {path:'',element:<Layout /> ,children:[
        {index:true , element: <Home />},
        {path:'details' , element:<Details />},
        {path:'favorites' , element:<Favorites />},
    ]}
])