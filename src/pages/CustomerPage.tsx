import {useState} from "react";
import type {Customer} from "../type/Customer.ts";
import {CustomerData} from "../data/CustomerData.ts";
import './customer.css'
import CustomerForm from "../forms/CustomerForm.tsx";

const Customer = () => {

    const [customer,setCustomer] = useState<Customer[]>(CustomerData)




    return(
        <>

            <div className="table-container">
                <h2>Customer List</h2>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Date of Birth</th>
                    </tr>
                    </thead>
                    <tbody>
                    {customer.map(customer => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.address}</td>
                            <td>{customer.dateOrBirth}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <CustomerForm></CustomerForm>

        </>
    )

}

export default Customer;