const Figure = props => {
  return (
    <figure>
      <img src={props.url} alt={props.name} />
      <figcaption><em>{props.name}</em></figcaption>
    </figure>
  );
}

export default Figure;