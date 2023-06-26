import { Link } from "react-router-dom";
import { PageHeader } from "./common/PageHeader";
import { useMyCards } from "../hooks/useMyCards";
import Card from "./card";

const MyCards = () => {
  const cards = useMyCards();

  return (
    <>
      <PageHeader
        title="My Cards"
        description="your cards are in the list below."
      />

      <div className="m-auto">
        <Link className="text-center" to="/create-card">
          <button type="button" className="btn btn-success">
            Create a New Card
          </button>
        </Link>
      </div>

      <div className="d-flex flex-wrap justify-content-around mt-3">
        {!cards.length ? (
          <p>no cards...</p>
        ) : (
          cards.map((card) => <Card key={card._id} card={card} />)
        )}
      </div>
    </>
  );
};

export default MyCards;
