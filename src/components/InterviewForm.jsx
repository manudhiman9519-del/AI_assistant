import { useState } from "react";
import { useNavigate } from "react-router-dom";

function InterviewForm() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted");

    const interviewData = {
      name,
      role,
      experience,
      topic,
      difficulty
    };

    console.log(interviewData);

    // Interview page par jaana
    // navigate("/interview");
    navigate("/interview", {
  state: {
    name,
    role,
    experience,
    topic,
    difficulty
  }
});
  };

  return (
    <div className="form-container">

      <h2>Start Your Interview</h2>

      <p className="form-subtitle">
        Tell us about yourself and customize your interview.
      </p>

      <form onSubmit={handleSubmit}>

        {/* Name */}
        <div className="input-group">

          <label>Your Name</label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

        </div>


        {/* Role */}
        <div className="input-group">

          <label>Select Role</label>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >

            <option value="">
              Select your role
            </option>

            <option value="Frontend Developer">
              Frontend Developer
            </option>

            <option value="React Developer">
              React Developer
            </option>

            <option value="JavaScript Developer">
              JavaScript Developer
            </option>

            <option value="Full Stack Developer">
              Full Stack Developer
            </option>

          </select>

        </div>


        {/* Experience */}
        <div className="input-group">

          <label>Experience</label>

          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
          >

            <option value="">
              Select experience
            </option>

            <option value="Fresher">
              Fresher
            </option>

            <option value="1 Year">
              1 Year
            </option>

            <option value="2 Years">
              2 Years
            </option>

            <option value="3+ Years">
              3+ Years
            </option>

          </select>

        </div>


        {/* Topic */}
        <div className="input-group">

          <label>Interview Topic</label>

          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          >

            <option value="">
              Select topic
            </option>

            <option value="HTML">
              HTML
            </option>

            <option value="CSS">
              CSS
            </option>

            <option value="JavaScript">
              JavaScript
            </option>

            <option value="React">
              React
            </option>

            <option value="Frontend">
              Frontend
            </option>

          </select>

        </div>


        {/* Difficulty */}
        <div className="input-group">

          <label>Difficulty Level</label>

          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            required
          >

            <option value="">
              Select difficulty
            </option>

            <option value="Easy">
              Easy
            </option>

            <option value="Medium">
              Medium
            </option>

            <option value="Hard">
              Hard
            </option>

          </select>

        </div>


        {/* Button */}
        <button
          type="submit"
          className="start-btn"
        >
          Start Interview 🚀
        </button>

      </form>

    </div>
  );
}

export default InterviewForm;