import React from 'react'
import {createBrowserRouter} from 'react-router'
import {ShortenPage} from '../pages'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <ShortenPage />
    }
])