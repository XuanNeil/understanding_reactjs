import React, { useState } from 'react';

export default function Form() {
    const [form, setForm] = useState({
        firstName: 'No',
        lastName: 'Name',
        email: 'dev.haxuan@gmail.com'
    });

    return (
        <>
            <label>First Name</label>
            <input
                type={'text'}
                value={form.firstName}
                onChange={e => setForm({
                    ...form,
                    firstName: e.target.value
                })}
            />
            <label>Last Name</label>
            <input
                type={'text'}
                value={form.lastName}
                onChange={e => setForm({
                    ...form,
                    lastName: e.target.value
                })}
            />
            <label>Email</label>
            <input
                type={'email'}
                value={form.email}
                onChange={e => setForm({
                    ...form,
                    email: e.target.value
                })}
            />
            <p>
                {form.firstName}{' '}
                {form.lastName}{' '}
                ({form.email})
            </p>
        </>
    )
}