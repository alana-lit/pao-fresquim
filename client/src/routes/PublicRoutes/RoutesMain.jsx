import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../../pages/LoginPage/LoginPage'
import { HomePage } from '../../pages/HomePage/HomePage'
import { AddProductPage } from '../../pages/AddProductPage/AddProductPage'
import { EmployeeManagementPage } from '../../pages/EmployeeManagement/EmployeeManagementPage'

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/products' element={<AddProductPage />} />
            <Route path='/employees' element={<EmployeeManagementPage />} />
        </Routes>
    )
}