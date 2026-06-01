import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Loader } from '../../components/Loader/Loader'

export const PrivateRoutes = () => {
    const [isLoading, setLoading] = useState(false)
    const authenticated = true
    
    return isLoading ? <Loader /> : (
        authenticated ? <Outlet /> : <Navigate to="/" />
    )
}