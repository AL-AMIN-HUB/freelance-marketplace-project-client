import React, { useState } from 'react';
import { Input, message } from 'antd';
import styles from '../../styles/payment.module.css';

const removeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleONBlur = e => {
        setEmail(e.target?.value)
    }
    //remove admin
    const handleRemove = e => {
        const User = { email }
        e.preventDefault()
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/remove/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(User)
        })
            .then(res => res.json())
            .then(data => {
                setEmail(data)
                message.success('Admin Remove successfully')
            }).catch(
                err => {
                    console.log(err)
                }
            )
    }
    return (
        <div className='container-fluid mx-auto p-28 min-h-screen'>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-12'>
                <div className={`flex justify-center ${styles.payment_container}`}>
                    <form onSubmit={handleRemove} >
                        <br />
                        <Input placeholder="Your Email" type="email" onBlur={handleONBlur} />
                        <br />

                        <div className="mt-8 flex justify-center">
                            <button type="submit" className="bg-green-500 text-white px-8 py-2 rounded-sm">
                                Make Admin
                            </button>
                        </div>
                    </form>

                </div>
                <div>
                    <img src="https://img.freepik.com/free-vector/top-up-credit-concept-illustration_114360-7284.jpg?size=338&ext=jpg&ga=GA1.1.1852109835.1638216464" alt="" />
                </div>
            </div>
        </div >
    );
};

export default removeAdmin;