import React, { useState } from 'react';

// Insert Row Form Component
function InsertRowForm({ onAddEmployee }) {
    const [formData, setFormData] = useState({
        name: '',
        position: '',
        department: '',
        age: '',
        salary: '',
        experience: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.position) {
            alert('Name and Position are required fields!');
            return;
        }

        const newEmployee = {
            name: formData.name,
            position: formData.position,
            department: formData.department,
            age: Number(formData.age),
            salary: Number(formData.salary),
            experience: Number(formData.experience)
        };

        onAddEmployee(newEmployee);

        setFormData({
            name: '',
            position: '',
            department: '',
            age: '',
            salary: '',
            experience: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <h2>Insert New Employee</h2>

            <div style={inputGroup}>
                <label>Name: </label>
                <input name="name" type="text" value={formData.name} onChange={handleChange} required />
            </div>

            <div style={inputGroup}>
                <label>Position: </label>
                <input name="position" type="text" value={formData.position} onChange={handleChange} required />
            </div>

            <div style={inputGroup}>
                <label>Department: </label>
                <input name="department" type="text" value={formData.department} onChange={handleChange} />
            </div>

            <div style={inputGroup}>
                <label>Age: </label>
                <input name="age" type="number" value={formData.age} onChange={handleChange} />
            </div>

            <div style={inputGroup}>
                <label>Salary: </label>
                <input name="salary" type="number" value={formData.salary} onChange={handleChange} />
            </div>

            <div style={inputGroup}>
                <label>Experience: </label>
                <input name="experience" type="number" value={formData.experience} onChange={handleChange} />
            </div>

            <button type="submit">Add Employee</button>
        </form>
    );
}

// Styles
const formStyle = {
    marginBottom: '2rem'
};

const inputGroup = {
    marginBottom: '0.5rem'
};

export default InsertRowForm;
