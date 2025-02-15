import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import InsertRowForm from './components/InsertRowForm';
import EditRowForm from './components/EditRowForm';
import TableContent from './components/TableContent';

import employeesData from './data';

function App() {
  const [employees, setEmployees] = useState(employeesData);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingEmployee, setEditingEmployee] = useState(null);

  const [nextId, setNextId] = useState(
    employeesData.length > 0 ? Math.max(...employeesData.map(emp => emp.id)) + 1 : 1
  );

  const filteredEmployees = employees.filter((employee) => {
    const employeeString = Object.values(employee).join(' ').toLowerCase();
    return employeeString.includes(searchQuery.toLowerCase());
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

  const handleCancelEdit = () => {
    setEditingEmployee(null);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      <h1>React.js Table with Search, Insert, and Edit</h1>

      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <InsertRowForm onAddEmployee={handleAddEmployee} />
      {editingEmployee && (
        <EditRowForm
          employee={editingEmployee}
          onUpdateEmployee={handleUpdateEmployee}
          onCancelEdit={handleCancelEdit}
        />
      )}
      <TableContent
        employees={filteredEmployees}
        onEditClick={setEditingEmployee}
      />
    </div>
  );
}

export default App;
