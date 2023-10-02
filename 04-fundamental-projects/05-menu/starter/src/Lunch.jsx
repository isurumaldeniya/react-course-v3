const Lunch = ({ menuItems }) => {
  const lunchMenu = menuItems.filter((item) => {
    return item.category == 'lunch';
  });
  return (
    <div className="section-center">
      {lunchMenu.map((item) => {
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

export default Lunch;
