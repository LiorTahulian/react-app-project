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
            GYM<i className="bi bi-4-circle"></i>U
          </>
        }
        description={
          "Hello and welcome to our website - the best place fot fitness and muscles."
        }
      />

      <div className="row d-flex flex-wrap justify-content-around mt-3">
        {!cards.length ? (
          <div
            id="carouselExample"
            class="carousel slide"
            style={{ width: "900px", height: "500px" }}
          >
            <div
              class="carousel-inner"
              style={{ width: "900px", height: "500px" }}
            >
              <div class="carousel-item active">
                <img
                  src="https://cdn.pixabay.com/photo/2015/01/09/11/22/fitness-594143_1280.jpg"
                  class="d-block w-100"
                  alt="..."
                  style={{ width: "900px", height: "500px" }}
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://cdn.pixabay.com/photo/2014/04/24/17/56/fitness-studio-331569_1280.jpg"
                  class="d-block w-100"
                  alt="..."
                  style={{ width: "900px", height: "500px" }}
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://cdn.pixabay.com/photo/2016/05/14/03/24/girl-in-the-gym-1391368_1280.jpg"
                  class="d-block w-100"
                  alt="..."
                  style={{ width: "900px", height: "500px" }}
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
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
