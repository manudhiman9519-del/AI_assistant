import InterviewForm from "../components/InterviewForm";

function Home() {
  return (
    <div className="home">

      <div className="hero-section">

        <span className="badge">
          🤖 AI POWERED
        </span>

        <h1>
          AI Interview
          <span> Preparation Assistant</span>
        </h1>

        <p>
          Practice technical interviews with AI-generated questions,
          instant feedback and personalized performance analysis.
        </p>

        <div className="features">

          <div className="feature-card">
            <h3>🤖 AI Questions</h3>
            <p>
              Get interview questions based on your role and skills.
            </p>
          </div>

          <div className="feature-card">
            <h3>📊 Smart Evaluation</h3>
            <p>
              Get your answers evaluated with useful feedback.
            </p>
          </div>

          <div className="feature-card">
            <h3>🎯 Improve Skills</h3>
            <p>
              Identify weak areas and improve your interview preparation.
            </p>
          </div>

        </div>

      </div>

      <InterviewForm />

    </div>
  );
}

export default Home;