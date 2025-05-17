import React from 'react';
import './dashboard.css';
import './dashboard.css'
import {Link, useNavigate} from "react-router-dom";
const DashboardButtons = () => {

    const dashBoardButton = [

        {name:"Customers" , to:"/dashBoard/customer"},
        {name:"Orders" , to:"/dashBoard/order"},
        {name:"stocks" , to:"/dashBoard/stock"}

    ]

    const navigate = useNavigate()

    const navigated = (to:string) => {
        navigate(to)
    }


    return (
        <div className="dashboard">
            <div className="header">
                <h1>Business Dashboard</h1>
                <div className="date-time" id="datetime">Today's Date</div>
            </div>

            <div className="summary">
                <div className="summary-card">
                    <div className="summary-title">Total Customers</div>
                    <div className="summary-value">1,234</div>
                    <div className="summary-change positive">+12% from last month</div>
                </div>
                <div className="summary-card">
                    <div className="summary-title">Stock Items</div>
                    <div className="summary-value">567</div>
                    <div className="summary-change positive">+5% from last month</div>
                </div>
                <div className="summary-card">
                    <div className="summary-title">Orders</div>
                    <div className="summary-value">89</div>
                    <div className="summary-change negative">-3% from last month</div>
                </div>
            </div>

            <div className="button-container">
                {dashBoardButton.map((button, index) => (
                    <Link
                        key={index}
                        to={button.to}
                        className={`after:h-[2px] after:w-0 hover:after:w-full after:bg-pink-400 after:transition-all after:duration-300
              ${navigated(button.to) ? `bg-black text-white` : ``}`}
                    >
                        {button.name}
                    </Link>
                ))}
                <button className="dashboard-btn customer-btn">
                    <div className="btn-icon">👥</div>
                    <div className="btn-text">Customers</div>
                    <div className="btn-subtext">Manage customer data</div>
                </button>

                <button className="dashboard-btn stock-btn">
                    <div className="btn-icon">📦</div>
                    <div className="btn-text">Stock</div>
                    <div className="btn-subtext">Inventory management</div>
                </button>

                <button className="dashboard-btn order-btn">
                    <div className="btn-icon">🛒</div>
                    <div className="btn-text">Orders</div>
                    <div className="btn-subtext">View and manage orders</div>
                </button>
            </div>
        </div>

)
    ;
};

export default DashboardButtons;
