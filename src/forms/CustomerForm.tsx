import './customerForm.css'
import {useState} from "react";


const CustomerForm = () =>{

    const [customer, setCustomer] = useState({
        id: '',
        name: '',
        address: '',
        dateOfBirth: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer({ ...customer, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Customer:', customer);

        setCustomer({ id: '', name: '', address: '', dateOfBirth: '' });
    };

    return (
        <>


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

                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input
                        type="date"
                        name="dateOfBirth"
                        value={customer.dateOfBirth}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Add Customer</button>
                </form>
            </div>


        </>
    )

}

export default CustomerForm