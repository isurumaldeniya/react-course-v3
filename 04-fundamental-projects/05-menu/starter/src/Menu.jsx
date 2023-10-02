const Menu = ({ getMenu }) => {
  return (
    <section className="menu">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="title-underline"></div>
      </div>
      <div className="btn-container">
        <button className="btn" onClick={() => getMenu('all')}>
          all
        </button>
        <button className="btn" onClick={() => getMenu('breakfast')}>
          breakFast
        </button>
        <button className="btn" onClick={() => getMenu('lunch')}>
          lunch
        </button>
        <button className="btn" onClick={() => getMenu('shakes')}>
          shakes
        </button>
      </div>
    </section>
  );
};

export default Menu;
