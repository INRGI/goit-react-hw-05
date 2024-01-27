import { Img, Li, Ul } from "./MoviesList.styled";

const MoviesList = ({movies}) => {
    return (
        <Ul>
            {movies.map(movie => (
                <Li key={movie.id}>
                    <h3>{movie.title}</h3>
                    <Img src = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                </Li>
            ))}
        </Ul>
    );
};

export default MoviesList;