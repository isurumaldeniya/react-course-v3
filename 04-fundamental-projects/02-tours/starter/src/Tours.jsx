import Tour from './Tour';

const Tours = ({ tours, removeTours }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour {...tour} key={tour.id} removeTours={removeTours} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
