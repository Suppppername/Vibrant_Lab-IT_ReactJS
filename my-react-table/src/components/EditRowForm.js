import React, { useState, useEffect } from 'react';

function EditRowForm({ employee, onUpdateEmployee, onCancelEdit }) {
    const [formData, setFormData] = useState({
        name: '',
        position: '',
        department: '',
        age: '',
        salary: '',
        experience: ''
    });

    useEffect(() => {
        if (employee) {
            setFormData({
                name: employee.name,
                position: employee.position,
                department: employee.department,
                age: employee.age,
                salary: employee.salary,
                experience: employee.experience
            });
        }
    }, [employee]);

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

        const updatedEmployee = {
            ...employee,
            name: formData.name,
            position: formData.position,
            department: formData.department,
            age: Number(formData.age),
            salary: Number(formData.salary),
            experience: Number(formData.experience)
        };

        onUpdateEmployee(updatedEmployee);
    };

    if (!employee) return null;

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
            <h2>Edit Employee (ID: {employee.id})</h2>

            <div style={{ marginBottom: '0.5rem' }}>
                <label>Name: </label>
                <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>

            <div style={{ marginBottom: '0.5rem' }}>
                <label>Position: </label>
                <input
                    name="position"
                    type="text"
                    value={formData.position}
                    onChange={handleChange}
                />
            </div>

            <div style={{ marginBottom: '0.5rem' }}>
                <label>Department: </label>
                <input
                    name="department"
                    type="text"
                    value={formData.department}
                    onChange={handleChange}
                />
            </div>

            <div style={{ marginBottom: '0.5rem' }}>
                <label>Age: </label>
                <input
                    name="age"
                    type="number"
                    value={formData.age}
                    onChange={handleChange}
                />
            </div>

            <div style={{ marginBottom: '0.5rem' }}>
                <label>Salary: </label>
                <input
                    name="salary"
                    type="number"
                    value={formData.salary}
                    onChange={handleChange}
                />
            </div>

            <div style={{ marginBottom: '0.5rem' }}>
                <label>Experience: </label>
                <input
                    name="experience"
                    type="number"
                    value={formData.experience}
                    onChange={handleChange}
                />
            </div>

            <button type="submit" style={{ marginRight: '0.5rem' }}>
                Update Employee
            </button>
            <button type="button" onClick={onCancelEdit}>
                Cancel
            </button>
        </form>
    );
}

export default EditRowForm;
