import React from 'react';

function TableContent({ employees, onEditClick, onSort, sortConfig }) {
    const getSortIndicator = (column) => {
        if (!sortConfig || sortConfig.key !== column) return '↕'; // Default indicator
        return sortConfig.direction === 'ascending' ? '↑' : '↓';
    };

    return (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
            <thead>
                <tr style={{ backgroundColor: '#f2f2f2' }}>
                    {["id", "name", "position", "department", "age", "salary", "experience"].map((column) => (
                        <th key={column} onClick={() => onSort(column)} style={thStyle}>
                            <span style={headerContainerStyle}>
                                {column.charAt(0).toUpperCase() + column.slice(1)} {/* Capitalize first letter */}
                                <span>{getSortIndicator(column)}</span>
                            </span>
                        </th>
                    ))}
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
    textAlign: 'left',
    cursor: 'pointer',
};

const tdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
};

const headerContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '5px', // Space between text and arrow
};

export default TableContent;
