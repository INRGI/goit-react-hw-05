import { Suspense, useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMoviesDetail } from "../../services/TMDBAPI";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TbPointFilled } from "react-icons/tb";
import { FaRankingStar } from "react-icons/fa6";
import Loader from "../../components/Loader";
import Button from "../../components/Button";
import { ButtonContainer, Container, Detail, DetailContainer, Genres, GenresText, Img, Overview, OverviewText, StyledLink, Title } from "./MovieDetailsPage.styled";

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
                                <Title>{movieDetails.original_title}</Title>
                                <h4><FaRankingStar size={14}/> User score: {userScore}%</h4>

                                <Overview>Overview</Overview>
                                <OverviewText>{movieDetails.overview}</OverviewText>

                                <Genres>Genres</Genres>

                               <GenresText>
                                    {movieDetails.genres &&
                                        movieDetails.genres.map(genre => (
                                            <span key={genre.id}> <TbPointFilled size={10}/> {genre.name}</span>
                                        ))
                                    }
                                </GenresText>

                            </Detail>
                        </DetailContainer>
                        

                            <ButtonContainer>
                                <StyledLink to="cast">
                                    <Button text="Cast" />
                                </StyledLink>
                                <StyledLink to="reviews">
                                    <Button text="Reviews" />
                                </StyledLink>
                            </ButtonContainer>


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