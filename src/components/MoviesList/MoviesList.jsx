import { useLocation } from "react-router-dom";
import { Img, Li, MovieDetail, Ul } from "./MoviesList.styled";
import noactor from '../images/actor.png';

const MoviesList = ({ movies }) => {
    const location = useLocation();

    return (
        <Ul>
            {movies.map(movie => (
                <Li key={movie.id}>
                    <MovieDetail to={`/movies/${movie.id}`} state={{ from: location }}>
                        <Img src={movie.poster_path
                                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                    :  `${noactor}`
                                    }
                        />
                    </MovieDetail>
                </Li>
            ))}
        </Ul>
    );
};

export default MoviesList;