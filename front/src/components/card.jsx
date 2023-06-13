import { Link } from "react-router-dom";

const Card = ({
  card: { _id, bizName, bizDescription, bizAddress, bizPhone, bizImage },
}) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "5px" }}>
      <img
        src={bizImage}
        className="card-img-top"
        alt={bizName}
        style={{ height: "280px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title text-center">{bizName}</h5>
        <p className="card-text text-center">{bizDescription}</p>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <i className="bi bi-geo-alt-fill me-2"></i>
            {bizAddress}
          </li>
          <li className="list-group-item">
            <i className="bi bi-telephone-fill me-2"></i>
            {bizPhone}
          </li>
        </ul>
        <div className="d-flex justify-content-between">
          <Link to={`/my-cards/edit/${_id}`} className="card-link">
            <button type="button" className="btn btn-warning">
              Edit
            </button>
          </Link>
          <Link to={`/my-cards/delete/${_id}`} className="card-link">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </Link>
          <Link to={`/my-cards/view/${_id}`} className="card-link">
            <button type="button" className="btn btn-primary">
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
