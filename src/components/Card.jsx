import '../styles/components/card.scss';

const Card = ({ appartment }) => {
  return (
    <div className='cards'>
      <a href={`/logement/${appartment.id}`}>
        <img src={appartment.cover} alt={appartment} />
        <p>{appartment.title}</p>
      </a>
    </div>
  );
};

export default Card;
