import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from '../screens/layout/Layout';
import Home from '../screens/home/home';
import About from '../screens/about/About';
import ContactUs from '../screens/contactus/ContactUs';
import EmployeeList from '../screens/employee/EmployeeList';
import Appraisal from '../screens/appraisal/Appraisal';
import PayrollList from '../screens/payroll/PayrollList';

function Templet() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<EmployeeList />} />
                    <Route path='employeeList' element={<EmployeeList />} />
                    <Route path='appraisalList' element={<Appraisal />} />
                    <Route path='payrollList' element={<PayrollList />} />
                </Route>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Templet;