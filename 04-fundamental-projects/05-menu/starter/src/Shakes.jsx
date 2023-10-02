const Shakes = ({ menuItems }) => {
  const shakesMenu = menuItems.filter((item) => {
    return item.category == 'shakes';
  });
  return (
    <div className="section-center">
      {shakesMenu.map((item) => {
        const { id, title, price, img, desc } = item;
        return (
          <article key={id} className="menu-item">
            <img className="img" src={img} alt={title}></img>
            <div className="item-info">
              <header>
                <h5>{title}</h5>
                <span className="item-price">$ {price}</span>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Shakes;
