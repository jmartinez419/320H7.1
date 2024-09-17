export default function MovieDisplay({ movie }) {
  //function to return loaded jsx
  const loaded = () => {
    // The component must return some JSX
    return (
    <>
    <h1>{movie.Title}</h1>
    <h2>{movie.Genre}</h2>
    <img src={movie.Poster} alt={movie.Title} />
    <h2>{movie.Year}</h2>
    </>
    );
  };

  // function to return loading jsx
  const loading = () => {
    return <h1>No Movie to Display</h1>
  }

  //Ternary operator will determine which functions jsx we will return
  return movie ? loaded() : loading();
}