import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import InsertRowForm from './components/InsertRowForm';
import EditRowForm from './components/EditRowForm';
import TableContent from './components/TableContent';
import employeesData from './data';

function App() {
  const [employees, setEmployees] = useState(employeesData);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchAttribute, setSearchAttribute] = useState('all');
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const [nextId, setNextId] = useState(
    employeesData.length > 0 ? Math.max(...employeesData.map(emp => emp.id)) + 1 : 1
  );

  const filteredEmployees = employees.filter((employee) => {
    if (!searchQuery) return true;

    const value = searchAttribute === "all"
      ? Object.values(employee).join(' ').toLowerCase()
      : String(employee[searchAttribute]).toLowerCase();

    return value.includes(searchQuery.toLowerCase());
  });

  const handleAddEmployee = (newEmployee) => {
    const newEmployeeWithId = { id: nextId, ...newEmployee };
    setEmployees((prevEmployees) => [...prevEmployees, newEmployeeWithId]);
    setNextId(nextId + 1);
  };

  const handleUpdateEmployee = (updatedEmployee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
    setEditingEmployee(null);
  };

  const handleDeleteEmployee = (id) => {
    setEmployees((prevEmployees) => prevEmployees.filter(emp => emp.id !== id));
  };

  const handleExportCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8,"
      + ["ID,Name,Position,Department,Age,Salary,Experience"].join(",") + "\n"
      + employees.map(e => `${e.id},${e.name},${e.position},${e.department},${e.age},${e.salary},${e.experience}`).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "employees.csv");
    document.body.appendChild(link);
    link.click();
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });

    setEmployees((prevEmployees) => {
      return [...prevEmployees].sort((a, b) => {
        if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
        if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
        return 0;
      });
    });
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      <h1>React.js Table with Search, Insert, Edit, Delete, and Export</h1>

      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchAttribute={searchAttribute}
        setSearchAttribute={setSearchAttribute}
      />

      <InsertRowForm onAddEmployee={handleAddEmployee} />

      {editingEmployee && (
        <EditRowForm
          employee={editingEmployee}
          onUpdateEmployee={handleUpdateEmployee}
          onCancelEdit={() => setEditingEmployee(null)}
        />
      )}

      <button onClick={handleExportCSV} style={exportButtonStyle}>Export CSV</button>

      <TableContent
        employees={filteredEmployees}
        onEditClick={setEditingEmployee}
        onDeleteClick={handleDeleteEmployee}
        onSort={handleSort}
        sortConfig={sortConfig}
      />
    </div>
  );
}

const exportButtonStyle = {
  padding: '10px 15px',
  backgroundColor: '#28a745',
  color: 'white',
  border: 'none',
  fontSize: '16px',
  cursor: 'pointer',
  marginBottom: '10px'
};

export default App;
