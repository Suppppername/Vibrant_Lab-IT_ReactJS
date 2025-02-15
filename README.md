# Report: https://www.notion.so/Report-on-React-JS-Project-19aaf5f1482d8088a927f248f9210c2b?pvs=4

# React.js Table Content Page with Search Bar, Insert, and Edit Row Features

## Overview
This assessment evaluates your proficiency in React.js development by requiring you to create a dynamic web application. This application should feature a table content page with search functionality, as well as the ability to insert and edit rows. Your understanding of React.js concepts, state management, component composition, and UI/UX design principles will be assessed.

## Tasks

### 1. Table Content Display:
- Implement a `TableContent` component to display tabular data.
- Ensure the table is visually appealing and responsive.
- Display each row representing an entry in the dataset and columns representing different attributes.

### 2. Search Bar Feature:
- Create a `SearchBar` component to allow users to search for specific entries within the table.
- Implement dynamic filtering of table rows based on user input in the search bar.
- Ensure real-time updating of the table as the user types in the search query.

### 3. Insert Row Functionality:
- Develop an `InsertRowForm` component to enable users to add new entries to the dataset.
- Include input fields for each attribute of the dataset entry.
- Implement form validation and submission logic to add the new row to the table.

### 4. Edit Row Feature:
- Create an `EditRowForm` component to allow users to modify existing dataset entries.
- Populate the form fields with the current values of the selected row.
- Implement form submission logic to update the corresponding row in the table with the edited values.

## Requirements
- Utilize React.js for frontend development.
- Ensure proper state management and component reusability.
- Implement responsive design principles for a seamless user experience across devices.
- Apply modern CSS techniques for styling, or utilize CSS frameworks like Ant Design if preferred.
- Provide clear and intuitive user feedback for form submissions and interactions.
- Write clean, well-structured code with appropriate comments and documentation.

## Submission Guidelines
- Fork this assessment repository and commit your code to your forked repository.
- Ensure your code is well-documented and includes any necessary setup instructions.
- Submit the repository link along with any additional notes or explanations you wish to provide.

## Evaluation Criteria
Your submission will be evaluated based on the following criteria:
- Adherence to the specified requirements and task completion.
- Code quality, including readability, maintainability, and adherence to best practices.
- User interface design and usability.
- Overall creativity and problem-solving approach.

## Conclusion
This assessment provides an opportunity to demonstrate your skills in React.js development and showcases your ability to create interactive web applications with complex functionality. Take your time to thoroughly understand the requirements and implement a solution that reflects your capabilities as a React.js developer.

## Resources

```javascript
const employeesData = [
  { 
    id: 1, 
    name: 'John Doe', 
    position: 'Software Engineer', 
    department: 'Engineering', 
    age: 30, 
    salary: 80000, 
    experience: 5 
  },
  { 
    id: 2, 
    name: 'Jane Smith', 
    position: 'UI/UX Designer', 
    department: 'Design', 
    age: 28, 
    salary: 70000, 
    experience: 4 
  },
  { 
    id: 3, 
    name: 'Michael Johnson', 
    position: 'Product Manager', 
    department: 'Product Management', 
    age: 35, 
    salary: 100000, 
    experience: 7 
  },
  { 
    id: 4, 
    name: 'Emily Brown', 
    position: 'Marketing Specialist', 
    department: 'Marketing', 
    age: 32, 
    salary: 75000, 
    experience: 6 
  },
  { 
    id: 5, 
    name: 'William Taylor', 
    position: 'Data Analyst', 
    department: 'Analytics', 
    age: 27, 
    salary: 65000, 
    experience: 3 
  }
];
```

Feel free to use this data array or create your own dataset for the table.
