import { useMyCards } from "../hooks/useMyCards";
import Card from "./card";
import { PageHeader } from "./common/PageHeader";

export function Home() {
  const cards = useMyCards();
  return (
    <>
      <PageHeader
        title={
          <>
            RUN<i className="bi bi-4-circle"></i>U
          </>
        }
        description={
          <>
            Hello and welcome to our website - the best place for fitness and
            exercise <b>together</b>.
          </>
        }
      />

      <div className="row d-flex flex-wrap justify-content-around mt-3">
        {!cards.length ? (
          <div
            id="carouselExample"
            className="carousel slide"
            style={{ width: "900px", height: "500px" }}
          >
            <div
              className="carousel-inner"
              style={{ width: "900px", height: "500px" }}
            >
              <div className="carousel-item active">
                <img
                  src="https://cdn.triathlete.com/wp-content/uploads/2020/07/GettyImages-1162769889.jpg"
                  className="d-block w-100"
                  alt="..."
                  style={{ width: "900px", height: "500px" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://cdn.pixabay.com/photo/2018/05/30/16/15/marathon-3441801_1280.jpg"
                  className="d-block w-100"
                  alt="..."
                  style={{ width: "900px", height: "500px" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.westend61.de/images/0001593478pw/sports-people-running-together-during-sunny-day-UUF24256.jpg"
                  className="d-block w-100"
                  alt="..."
                  style={{ width: "900px", height: "500px" }}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        ) : (
          cards.toReversed().map((card, index) => {
            if (index < 4) {
              return <Card key={card._id} card={card} />;
            }
            return null;
          })
        )}
      </div>
    </>
  );
}
