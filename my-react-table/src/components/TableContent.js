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
                                <td style={tdStyle} data-label="Name">{emp.name}</td>
                                <td style={tdStyle} data-label="Position">{emp.position}</td>
                                <td style={tdStyle} data-label="Department">{emp.department}</td>
                                <td style={tdStyle} data-label="Age">{emp.age}</td>
                                <td style={tdStyle} data-label="Salary">{emp.salary}</td>
                                <td style={tdStyle} data-label="Experience">{emp.experience}</td>
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

const tableContainerStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
};

const tableStyle = {
    width: '100%',
    maxWidth: '100%',
    borderCollapse: 'collapse',
    tableLayout: 'fixed',
};

const thStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    fontSize: '14px',
};

const tdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    fontSize: '14px',
    wordWrap: 'break-word',
};

const trStyle = {
    borderBottom: '1px solid #ddd',
};

const headerContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
};

const editButtonStyle = {
    padding: '5px 10px',
    fontSize: '12px',
    cursor: 'pointer',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
};

export default TableContent;
