const BubblesCard = ({ bubbles }) => {
  return (
    <div className="bubbles-card">
      <h3>{bubbles.title}</h3>
      <p>{bubbles.method}</p>
      <div className="rating">{bubbles.rating}</div>
    </div>
  );
};

export default BubblesCard;
