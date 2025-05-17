import './customerForm.css';
import { useEffect, useState } from "react";
import type { Customer } from "../type/Customer.ts";

interface CustomerFormProps {
    onSubmit: (customer: Customer) => void;
    onClose: () => void;
    initialData?: Customer | null;
}

const CustomerForm = ({ onSubmit, onClose, initialData }: CustomerFormProps) => {
    const [customer, setCustomer] = useState<Customer>({
        id: 0,
        name: '',
        address: '',
        dateOrBirth: ''
    });

    useEffect(() => {
        if (initialData) {
            setCustomer(initialData);
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCustomer(prev => ({
            ...prev,
            [name]: name === "id" ? Number(value) : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(customer);
        if (!initialData) {
            // Only reset if adding new
            setCustomer({ id: 0, name: '', address: '', dateOrBirth: '' });
        }
    };

    return (
        <div className="form-container">
            <h2>{initialData ? "Edit Customer" : "Add New Customer"}</h2>
            <form onSubmit={handleSubmit} className="customer-form">
                <label htmlFor="id">ID</label>
                <input
                    type="number"
                    name="id"
                    value={customer.id}
                    onChange={handleChange}
                    required
                    disabled={!!initialData}
                />

                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    value={customer.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    name="address"
                    value={customer.address}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="dateOrBirth">Date of Birth</label>
                <input
                    type="date"
                    name="dateOrBirth"
                    value={customer.dateOrBirth}
                    onChange={handleChange}
                    required
                />

                <button type="submit">
                    {initialData ? "Update Customer" : "Add Customer"}
                </button>
                <br/>
                <button type="button" onClick={onClose} className="cancel-btn">
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default CustomerForm;
