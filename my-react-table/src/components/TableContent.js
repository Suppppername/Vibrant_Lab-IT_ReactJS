import React from 'react';

function TableContent({ employees, onEditClick, onSort, sortConfig }) {
    const getSortIndicator = (column) => {
        if (!sortConfig || sortConfig.key !== column) return '↕';
        return sortConfig.direction === 'ascending' ? '↑' : '↓';
    };

    return (
        <div style={tableContainerStyle}>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        {["name", "position", "department", "age", "salary", "experience"].map((column) => (
                            <th key={column} onClick={() => onSort(column)} style={thStyle}>
                                <span style={headerContainerStyle}>
                                    {column.charAt(0).toUpperCase() + column.slice(1)}
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
                            <tr key={emp.id} style={trStyle}>
                                <td style={tdStyle}>{emp.name}</td>
                                <td style={tdStyle}>{emp.position}</td>
                                <td style={tdStyle}>{emp.department}</td>
                                <td style={tdStyle}>{emp.age}</td>
                                <td style={tdStyle}>{emp.salary}</td>
                                <td style={tdStyle}>{emp.experience}</td>
                                <td style={tdStyle}>
                                    <button style={editButtonStyle} onClick={() => onEditClick(emp)}>Edit</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8" style={{ textAlign: 'center', padding: '10px' }}>
                                No employees found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

// 📌 **Final Responsive Styles for Full-Width Table**
const tableContainerStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
};

const tableStyle = {
    width: '100%',
    maxWidth: '1200px', // Keep it wide but within a limit
    borderCollapse: 'collapse',
    tableLayout: 'auto', // Allows columns to resize based on content
};

const thStyle = {
    border: '1px solid #ddd',
    padding: '12px',
    textAlign: 'left',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    fontSize: '16px',
};

const tdStyle = {
    border: '1px solid #ddd',
    padding: '12px',
    fontSize: '16px',
    wordWrap: 'break-word', // Allow text wrapping instead of overflowing
};

const trStyle = {
    borderBottom: '1px solid #ddd',
};

const headerContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
};

const editButtonStyle = {
    padding: '6px 12px',
    fontSize: '14px',
    cursor: 'pointer',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
};

export default TableContent;
