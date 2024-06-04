// UserFormPopup.js
import React, { useState } from "react";
import axios from "axios";
// import "../styles/popup.css";

const UserFormPopup = ({ onClose, setUserID }) => {
  console.log("Yaha tak");
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    occupation: "",
  });
  const [otherSelected, setOtherSelected] = useState(false);
  const [otherSelectedOccupation, setOtherSelectedOccupation] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/newuser", formData);
      // Call setUserID with the new user's ID from the response
      setUserID(response.data.userId);
      console.log("inside user form", response.data.userId);
      // Handle success (e.g., close the pop-up)
      onClose();
    } catch (error) {
      console.error("Error creating user:", error);
      // Handle error (e.g., display an error message)
    }
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 font-semibold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-600 font-semibold">
              Age:
            </label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Enter your age"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block text-gray-600 font-semibold"
            >
              Gender:
            </label>
            <select
              id="gender"
              name="gender"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              value={formData.gender}
              onChange={(e) => {
                setFormData({ ...formData, gender: e.target.value });
                setOtherSelected(e.target.value === "Other");
              }}
            >
              <option value="">Select your gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {otherSelected && (
              <input
                type="text"
                id="otherGender"
                name="otherGender"
                placeholder="Enter your gender"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 mt-2"
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              />
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="occupation"
              className="block text-gray-600 font-semibold"
            >
              Occupation:
            </label>
            <select
              id="occupation"
              name="occupation"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              value={formData.occupation}
              onChange={(e) => {
                setFormData({ ...formData, occupation: e.target.value });
                setOtherSelectedOccupation(e.target.value === "Other");
              }}
            >
              <option value="">Select your occupation</option>
              <option value="Student">Student</option>
              <option value="Employee">Employee</option>
              <option value="Owner operator">Owner operator</option>
              <option value="Self employed">Self employed</option>
              <option value="Unemployed">Unemployed</option>
              <option value="Factory worker">Factory worker</option>
              <option value="Labourer">Labourer</option>
              <option value="Retired">Retired</option>
              <option value="Other">Other</option>
            </select>
            {otherSelectedOccupation && (
              <input
                type="text"
                id="otherOccupation"
                name="otherOccupation"
                placeholder="Enter your occupation"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 mt-2"
                value={formData.otherOccupation}
                onChange={(e) =>
                  setFormData({ ...formData, occupation: e.target.value })
                }
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserFormPopup;
