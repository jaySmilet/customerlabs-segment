import "./App.css";
import SaveSegment from "./components/SaveSegment";

function App() {
  return (
    <section className="main d-flex flex-column justify-content-start align-items-start gap-4">
      <h3>CustomerLabs Segment Assignment</h3>
      <button
        className="btn btn-outline-secondary"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Save Segment
      </button>
      <SaveSegment />
    </section>
  );
}

export default App;
