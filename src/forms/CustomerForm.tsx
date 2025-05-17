import './customerForm.css'
import { useState } from "react";
import type { Customer } from "../type/Customer.ts";

interface CustomerFormProps {
    onSubmit: (customer: Customer) => void;
    onClose: () => void;

}




const CustomerForm = ({ onSubmit,onClose }: CustomerFormProps) => {
    const [customer, setCustomer] = useState<Customer>({
        id: '',
        name: '',
        address: '',
        dateOrBirth: ''
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer({ ...customer, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Customer:', customer);

        onSubmit(customer); // send data to parent
        setCustomer({ id: '', name: '', address: '', dateOrBirth: '' });
    };

    return (
        <div className="form-container">
            <h2>Add New Customer</h2>
            <form onSubmit={handleSubmit} className="customer-form">
                <label htmlFor="id">ID</label>
                <input
                    type="number"
                    name="id"
                    value={customer.id}
                    onChange={handleChange}
                    required
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
                <label>Edit</label>



                <button type="submit">Add Customer</button>
                <br/><br/>
            </form>
        </div>
    );
};

export default CustomerForm;
