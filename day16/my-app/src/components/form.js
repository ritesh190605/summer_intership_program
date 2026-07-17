// import { useState } from "react";

// const Form = () => {
//   const [Data, setData] = useState({
//     name: "",
//     Email: "",
//     contact: "",
//     gender: "",
//     age: 18,
//   });

//   const ChangeHandler = (event) => {
//     setData({
//       ...Data,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const increaseAge = () => {
//     setData({
//       ...Data,
//       age: Data.age + 1,
//     });
//   };

//   const decreaseAge = () => {
//     if (Data.age > 1) {
//       setData({
//         ...Data,
//         age: Data.age - 1,
//       });
//     }
//   };

//   const SubmitHandler = (event) => {
//     event.preventDefault();

//     console.log(Data);
//     alert("Form submitted successfully!");
//   };

//   return (
//     <form onSubmit={SubmitHandler}>
//       {/* Username */}
//       <label>Username:</label>
//       <input
//         type="text"
//         name="name"
//         placeholder="Enter your name"
//         value={Data.name}
//         onChange={ChangeHandler}
//       />

//       <br />
//       <br />

//       {/* Email */}
//       <label>Email Address:</label>
//       <input
//         type="email"
//         name="Email"
//         placeholder="Enter your email"
//         value={Data.Email}
//         onChange={ChangeHandler}
//       />

//       <br />
//       <br />

//       {/* Contact */}
//       <label>Contact Number:</label>
//       <input
//         type="tel"
//         name="contact"
//         placeholder="Enter your contact number"
//         value={Data.contact}
//         onChange={ChangeHandler}
//       />

//       <br />
//       <br />

//       {/* Gender Dropdown */}
//       <label>Gender:</label>
//       <select
//         name="gender"
//         value={Data.gender}
//         onChange={ChangeHandler}
//       >
//         <option value="">Select Gender</option>
//         <option value="Male">Male</option>
//         <option value="Female">Female</option>
//         <option value="Other">Other</option>
//       </select>

//       <br />
//       <br />

//       {/* Age Counter */}
//       <label>Age:</label>
//       <br />
//       <button type="button" onClick={decreaseAge}>
//         -
//       </button>

//       <span style={{ margin: "0 15px" }}>{Data.age}</span>

//       <button type="button" onClick={increaseAge}>
//         +
//       </button>

//       <br />
//       <br />

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Form;

import { useState } from "react";

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    employeeId: "",
    name: "",
    age: "",
    department: "",
    salary: "",
    employmentType: "",
    joiningDate: "",
    email: "",
    contact: "",
    address: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
    alert("Employee Registered Successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Employee Registration Form</h2>

      <label>Employee ID:</label>
      <input
        type="text"
        name="employeeId"
        value={formData.employeeId}
        onChange={handleChange}
        placeholder="Enter Employee ID"
      />

      <br />
      <br />

      <label>Employee Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter Employee Name"
      />

      <br />
      <br />

      <label>Age:</label>
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        min="18"
        placeholder="Enter Age"
      />

      <br />
      <br />

      <label>Department:</label>
      <select
        name="department"
        value={formData.department}
        onChange={handleChange}
      >
        <option value="">Select Department</option>
        <option value="HR">HR</option>
        <option value="IT">IT</option>
        <option value="Finance">Finance</option>
        <option value="Marketing">Marketing</option>
        <option value="Sales">Sales</option>
      </select>

      <br />
      <br />

      <label>Salary: </label>
      <input
        type="number"
        name="salary"
        value={formData.salary}
        onChange={handleChange}
        placeholder="Enter Salary"
      />

      

      <br />
      <br />



      
        
      <button type="submit">Register Employee</button>
    </form>
  );
};

export default EmployeeForm;