import { useState } from "react";
import type { Customer } from "../type/Customer.ts";
import { CustomerData } from "../data/CustomerData.ts";
import './customer.css';
import CustomerForm from "../forms/CustomerForm.tsx";

interface DialogProps {
    title: string;
    children: React.ReactNode;
    onClose: () => void;
}


const Dialog = ({ title, children, onClose }: DialogProps) => (
    <div className="dialog-backdrop">
        <div className="dialog-box">
            <div className="dialog-header">
                <h3>{title}</h3>
                <button onClick={onClose} className="close-btn">&times;</button>
            </div>
            <div className="dialog-body">
                {children}
            </div>
        </div>
    </div>
);

const Customer = () => {
    const [customers, setCustomers] = useState<Customer[]>(CustomerData);
    const [showDialog, setShowDialog] = useState(false);

    const handleAddCustomer = (customer: Customer) => {
        setCustomers(prev => [...prev, customer]);
        setShowDialog(false);
    };

    const onDelete =(id:number) => {

        setCustomers(prevCustomers => prevCustomers.filter(customer => customer.id !== id));


    }

    return (
        <>
            <div className="table-container">
                <button onClick={() => setShowDialog(true)}>➕ Add Customer</button>
                <h2>Customer List</h2>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Date of Birth</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {customers.map(customer => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.address}</td>
                            <td>{customer.dateOrBirth}</td>
                            <td><button>Edit</button></td>
                            <td><button onClick={()=>{onDelete(customer.id)}}>Delete</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Show Dialog if true */}
            {showDialog && (
                <Dialog title="Add New Customer" onClose={() => setShowDialog(false)}>
                    <CustomerForm onSubmit={handleAddCustomer} />

                </Dialog>
            )}
        </>
    );
};

export default Customer;
