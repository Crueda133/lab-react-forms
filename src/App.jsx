import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [formValues, setFormValues] = useState("");
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("Web Dev");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  // e.preventDefault we saw it in class it is no avoid refresh the form
  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      fullName,
      image,
      phone,
      email,
      program,
      graduationYear,
      graduated,
    };

    setStudents((prevStudents) => [...prevStudents, newStudent]);

    // Reseting the form after submission
    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("Web Dev");
    setGraduationYear(2023);
    setGraduated(false);
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              placeholder="Full Name"
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              onChange={(e) => setImage(e.target.value)}
              value={image}
              placeholder="Profile Image"
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              placeholder="Phone"
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              onChange={(e) => setProgram(e.target.value)}
              value={program}
            >
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              name="graduationYear"
              type="number"
              onChange={(e) => setGraduationYear(parseInt(e.target.value))}
              value={graduationYear}
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              onChange={(e) => setGraduated(e.target.checked)}
              checked={graduated}
              value={graduated}
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
      {/* FORM END */}

      {/* TABLE/LIST HEADER */}
      <TableHeader />

      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
