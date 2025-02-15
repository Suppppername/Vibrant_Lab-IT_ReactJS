import React from 'react';

function TableContent({ employees, onEditClick }) {
    return (
        <table
            style={{
                width: '100%',
                borderCollapse: 'collapse',
                marginBottom: '2rem'
            }}
        >
            <thead>
                <tr style={{ backgroundColor: '#f2f2f2' }}>
                    <th style={thStyle}>ID</th>
                    <th style={thStyle}>Name</th>
                    <th style={thStyle}>Position</th>
                    <th style={thStyle}>Department</th>
                    <th style={thStyle}>Age</th>
                    <th style={thStyle}>Salary</th>
                    <th style={thStyle}>Experience</th>
                    <th style={thStyle}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.length > 0 ? (
                    employees.map((emp) => (
                        <tr key={emp.id} style={{ borderBottom: '1px solid #ddd' }}>
                            <td style={tdStyle}>{emp.id}</td>
                            <td style={tdStyle}>{emp.name}</td>
                            <td style={tdStyle}>{emp.position}</td>
                            <td style={tdStyle}>{emp.department}</td>
                            <td style={tdStyle}>{emp.age}</td>
                            <td style={tdStyle}>{emp.salary}</td>
                            <td style={tdStyle}>{emp.experience}</td>
                            <td style={tdStyle}>
                                <button onClick={() => onEditClick(emp)}>Edit</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="8" style={{ textAlign: 'center' }}>
                            No employees found.
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

const thStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left'
};

const tdStyle = {
    border: '1px solid #ddd',
    padding: '8px'
};

export default TableContent;
