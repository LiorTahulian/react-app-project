import { useMyCards } from "../hooks/useMyCards";
import Card from "./card";
import CardForAll from "./cardForAll";
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
          <div className="d-flex justify-content-around mt-2">
            <CardForAll
              img={
                "https://cdn.pixabay.com/photo/2016/03/31/17/33/avatar-1293744_1280.png"
              }
              name={"Avi"}
              description={"Project manager"}
              address={"Tel Aviv"}
              phone={"054-1138238"}
            />
            <CardForAll
              img={
                "https://cdn.pixabay.com/photo/2016/03/31/17/33/avatar-1293744_1280.png"
              }
              name={"Mike"}
              description={"CEO"}
              address={"Ramat Gan"}
              phone={"052-9445638"}
            />
            <CardForAll
              img={
                "https://cdn.pixabay.com/photo/2016/03/31/17/33/avatar-1293744_1280.png"
              }
              name={"John"}
              description={"WEB Developer"}
              address={"Tel Aviv"}
              phone={"050-2348200"}
            />
            <CardForAll
              img={
                "https://cdn.pixabay.com/photo/2016/03/31/17/33/avatar-1293744_1280.png"
              }
              name={"Angela"}
              description={"Graphic Designer"}
              address={"Jerusalem"}
              phone={"052-3345672"}
            />
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
