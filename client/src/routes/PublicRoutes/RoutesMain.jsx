import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../../pages/LoginPage/LoginPage'
import { HomePage } from '../../pages/HomePage/HomePage'
import { AddProductPage } from '../../pages/AddProductPage/AddProductPage'
import { EmployeeManagementPage } from '../../pages/EmployeeManagement/EmployeeManagementPage'
import { CheckinPage } from '../../pages/CheckinPage/CheckinPage'
import { SalesPage } from '../../pages/SalesPage/SalesPage'
import { PrivateRoutes } from '../PrivateRoutes/PrivateRoutes'
import { ReportPage } from '../../pages/ReportPage/ReportPage'

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route element={<PrivateRoutes />}>
                <Route path='/home' element={<HomePage />} />
                <Route path='/products' element={<AddProductPage />} />
                <Route path='/employees' element={<EmployeeManagementPage />} />
                <Route path='/checkin' element={<CheckinPage />} />
                <Route path='/sales' element={<SalesPage />} />
                <Route path='/report' element={<ReportPage />} />
            </Route>
        </Routes>
    )
}