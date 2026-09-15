// import { useState } from "react";
// import axios from 'axios'

// function FormContainer() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email:"",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

  

//    const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:3000/users/",
//         formData
//       );

//       console.log("Response:", response.data);

//       alert("User created successfully!");

//       setFormData({
//         name: "",
//         email: "",
//       });
//     } catch (error) {
//       console.log("Error:", error);

//       alert(
//         error.response?.data?.message || "Something went wrong"
//       );
//     }
//   };

//   return (
//     <div className="m-auto">
//       <h1>Registration Form</h1>

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//           />
//         </div>

//         <br />

//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//           />
//         </div>

//         <br />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default FormContainer;

import { useState } from "react";
import axios from "axios";

function FormContainer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // POST - Create User
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/users/",
        formData
      );

      console.log("Response:", response.data);

      alert("User created successfully!");

      setFormData({
        name: "",
        email: "",
      });
    } catch (error) {
      console.log("Error:", error);

      alert(
        error.response?.data?.message || "Something went wrong"
      );
    }
  };

  // GET - Fetch All Users
  const handleGetUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/users/"
      );

      console.log("Users:", response.data);

      setUsers(response.data.data);
    } catch (error) {
      console.log("Error:", error);

      alert(
        error.response?.data?.message || "Failed to fetch users"
      );
    }
  };

  return (
    <div className="m-auto">
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <br />

        <div>
          <label>Email:</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <br />

        <button type="submit">
          Submit
        </button>
      </form>

      <br />

      {/* Get Users Button */}
      <button onClick={handleGetUsers}>
        Get All Users
      </button>

      <br />
      <br />

      {/* Display Users */}
      <div>
        <h2>All Users</h2>

        {users.length === 0 ? (
          <p>No users found</p>
        ) : (
          users.map((user) => (
            <div key={user._id}>
              <p>
                <strong>Name:</strong> {user.name}
              </p>

              <p>
                <strong>Email:</strong> {user.email}
              </p>

              <hr />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FormContainer;
