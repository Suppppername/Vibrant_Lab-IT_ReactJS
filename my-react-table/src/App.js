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
      <h1>React.js Table with Search, Insert, Edit, and Sorting</h1>

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

      <TableContent
        employees={filteredEmployees}
        onEditClick={setEditingEmployee}
        onSort={handleSort}
        sortConfig={sortConfig}
      />
    </div>
  );
}

export default App;
