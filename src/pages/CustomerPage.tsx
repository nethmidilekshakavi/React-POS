import { useState } from "react";
import type { Customer } from "../type/Customer.ts";
import { CustomerData } from "../data/CustomerData.ts";
import "./customer.css";
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
                <button onClick={onClose} className="close-btn">
                    &times;
                </button>
            </div>
            <div className="dialog-body">{children}</div>
        </div>
    </div>
);

const Customer = () => {
    const [customers, setCustomers] = useState<Customer[]>(CustomerData);
    const [dialogMode, setDialogMode] = useState<"add" | "edit" | null>(null);
    const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);

    const handleAddCustomer = (customer: Customer) => {
        setCustomers(prev => [...prev, customer]);
        setDialogMode(null);
    };

    const handleEditCustomer = (updatedCustomer: Customer) => {
        setCustomers(prev =>
            prev.map(c => (c.id === updatedCustomer.id ? updatedCustomer : c))
        );
        setEditingCustomer(null);
        setDialogMode(null);
    };

    const onDelete = (id: number) => {
        setCustomers(prev => prev.filter(c => c.id !== id));
    };

    const onEdit = (customer: Customer) => {
        setEditingCustomer(customer);
        setDialogMode("edit");
    };

    return (
        <>
            <div className="table-container">
                <button onClick={() => setDialogMode("add")}>➕ Add Customer</button>
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
                            <td>
                                <button onClick={() => onEdit(customer)}>Edit</button>
                            </td>
                            <td>
                                <button onClick={() => onDelete(customer.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {dialogMode === "add" && (
                <Dialog title="Add New Customer" onClose={() => setDialogMode(null)}>
                    <CustomerForm
                        onSubmit={handleAddCustomer}
                        onClose={() => setDialogMode(null)}
                    />
                </Dialog>
            )}

            <br/><br/>

            {dialogMode === "edit" && editingCustomer && (
                <Dialog title="Edit Customer" onClose={() => setDialogMode(null)}>
                    <CustomerForm
                        initialData={editingCustomer}
                        onSubmit={handleEditCustomer}
                        onClose={() => setDialogMode(null)}
                    />
                </Dialog>
            )}
        </>
    );
};

export default Customer;
