import { useLocation, useNavigate } from "react-router-dom";

function ResultPage() {

  const location = useLocation();
  const navigate = useNavigate();

  const answers = location.state?.answers || [];

  return (
    <div className="result-page">

      <div className="result-container">

        <div className="result-icon">
          🎉
        </div>

        <h1>
          Interview Completed!
        </h1>

        <p className="result-subtitle">
          Great job! Here is your interview summary.
        </p>


        {/* Score */}

        <div className="score-card">

          <h2>
            80%
          </h2>

          <p>
            Overall Score
          </p>

        </div>


        {/* Performance */}

        <div className="performance">

          <h2>
            Your Performance
          </h2>

          <div className="performance-grid">

            <div>
              <span>Questions</span>
              <strong>{answers.length}</strong>
            </div>

            <div>
              <span>Answered</span>
              <strong>{answers.length}</strong>
            </div>

            <div>
              <span>Score</span>
              <strong>80%</strong>
            </div>

          </div>

        </div>


        {/* Feedback */}

        <div className="feedback-card">

          <h2>
            🤖 AI Feedback
          </h2>

          <p>
            Your answers show a good understanding of React.
            Try to explain concepts with practical examples
            and improve your technical depth.
          </p>

        </div>


        {/* Buttons */}

        <div className="result-buttons">

          <button
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>

          <button
            onClick={() => navigate("/interview")}
          >
            Try Again
          </button>

        </div>

      </div>

    </div>
  );
}

export default ResultPage;