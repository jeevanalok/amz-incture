import { Spinner } from "react-bootstrap";

function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <span>Loading exciting deals for you 🔥 </span>
      <Spinner animation="border" role="status" className="spinner"></Spinner>
    </div>
  );
}
export default Loader;
