import RemoteImage from "./RemoteImage.jsx";

export default function ArtworkItem({ art, onOpen }) {
  return (
    <li>
      <button className="art" onClick={() => onOpen(art)} aria-label={`Open ${art.title}, ${art.category}`}>
        <RemoteImage src={art.image} fallback={art.fallback} alt={art.alt || art.title} width="400" height="300" />
        <span className="art-info">
          <span className="art-cat">{art.category}</span>
          <span className="art-title">{art.title}</span>
        </span>
      </button>
    </li>
  );
}
