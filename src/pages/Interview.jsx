import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Interview() {

  const location = useLocation();
  const navigate = useNavigate();

  // Form se aaya hua data
  const interviewData = location.state;

  const name = interviewData?.name || "Candidate";
  const role = interviewData?.role || "Frontend Developer";
  const experience = interviewData?.experience || "Fresher";
  const topic = interviewData?.topic || "React";
  const difficulty = interviewData?.difficulty || "Medium";


  // Questions
  const questions = [
    "What is React and why is it used?",
    "What is useState in React?",
    "What is useEffect in React?",
    "What are props in React?",
    "What is the difference between state and props?"
  ];


  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answer, setAnswer] = useState("");

  const [answers, setAnswers] = useState([]);


  const handleSubmit = (e) => {

    e.preventDefault();

    if (answer.trim() === "") {
      alert("Please enter your answer");
      return;
    }


    const newAnswers = [
      ...answers,
      {
        question: questions[currentQuestion],
        answer: answer
      }
    ];


    setAnswers(newAnswers);


    // Last question
    if (currentQuestion === questions.length - 1) {

      navigate("/result", {
        state: {
          answers: newAnswers,
          name,
          role,
          experience,
          topic,
          difficulty
        }
      });

      return;
    }


    // Next question
    setCurrentQuestion(currentQuestion + 1);

    setAnswer("");
  };


  return (

    <div className="interview-page">

      <div className="interview-box">


        {/* HEADER */}

        <div className="interview-header">

          <span>
            🤖 AI INTERVIEW
          </span>

          <p>
            Question {currentQuestion + 1} / {questions.length}
          </p>

        </div>


        {/* CANDIDATE */}

        <div className="candidate-info">

          <p>
            Hello, <strong>{name}</strong> 👋
          </p>

          <span>
            {role} • {experience}
          </span>

        </div>


        <h1>
          {topic} Interview
        </h1>


        {/* TOPIC */}

        <div className="topic-info">

          <span>
            {topic}
          </span>

          <span>
            {difficulty}
          </span>

        </div>


        {/* QUESTION */}

        <div className="question-box">

          <p>
            Question {currentQuestion + 1}
          </p>

          <h2>
            {questions[currentQuestion]}
          </h2>

        </div>


        {/* ANSWER */}

        <form onSubmit={handleSubmit}>

          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Write your answer here..."
          ></textarea>


          <button type="submit">

            {currentQuestion === questions.length - 1
              ? "Finish Interview"
              : "Submit & Next →"}

          </button>

        </form>

      </div>

    </div>

  );
}

export default Interview;