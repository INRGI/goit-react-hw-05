import { Suspense, useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMoviesDetail } from "../../services/TMDBAPI";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../../components/Loader";
import Button from "../../components/Button";
import { Container, Detail, DetailContainer, Img, StyledLink } from "./MovieDetailsPage.styled";

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const location = useLocation();
    const [movieDetails, setMovieDetails] = useState([]);
    const backLinkHref = useRef(location.state?.from || "/");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getMovie = async () => {
            try {
                setIsLoading(true);
                const movie = await fetchMoviesDetail(movieId);
                setMovieDetails(movie)
                setIsLoading(false);
            } catch {
                toast.error('Something went wrong 😿', {
                    position: 'top-right',
                });
            } finally {
                setIsLoading(false);
            }
        };
        
        getMovie()
    }, [movieId]);

    const userScore = Math.round(movieDetails.vote_average * 10);


    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <Container>
                        <StyledLink to={backLinkHref.current}>
                            <Button text="Back"/>
                        </StyledLink>

                        <DetailContainer>
                            <Img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} />

                            <Detail>
                                <h1>{movieDetails.original_title}</h1>
                                <h4>User score: {userScore}%</h4>

                                <h2>Overview</h2>
                                <p>{movieDetails.overview}</p>

                                <h2>Genres</h2>

                               <p>
                                    {movieDetails.genres &&
                                        movieDetails.genres.map(genre => (
                                            <span key={genre.id}> {genre.name}</span>
                                        ))
                                    }
                                </p>

                            </Detail>
                        </DetailContainer>

                        <div>
                            <h3>Additional information</h3>
                            <StyledLink to="cast">
                                <Button text="Cast" />
                            </StyledLink>
                            <StyledLink to="reviews">
                                <Button text="Reviews" />
                            </StyledLink>
                        </div>

                        <Suspense fallback={<Loader />}>
                            <Outlet />
                        </Suspense>

                </Container>    
            )}
            <ToastContainer />
        </>
    );
};

export default MovieDetailsPage;