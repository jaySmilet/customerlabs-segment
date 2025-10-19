import "./App.css";
import SaveSegment from "./components/SaveSegment";

function App() {
  return (
    <div className="main d-flex flex-column justify-content-start align-items-start gap-4">
      <div className="bg-teal w-100 p-4 text-white d-flex gap-4">
        <i className="fa fa-angle-left fa-2x cursor-pointer"></i>
        <h5 className="offcanvas-title" id="offcanvasRightLabel">
          View Audience
        </h5>
      </div>
      <button
        className="btn btn-outline-secondary ms-4"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Save Segment
      </button>
      <SaveSegment />
    </div>
  );
}

export default App;
