import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../../services/TMDBAPI";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, ImageActor, List, ListContainer, Title, WithoutInfo } from "./MovieCast.styled";

import noactor from '../images/actor.png';

const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const castInfo = async () => {
            try {
                const data = await fetchMovieCredits(movieId)
                setCast(data)
            } catch {
                toast.error('Something went wrong 😿', {
                    position: 'top-right',
                });
            }
        }

        castInfo();
    }, [movieId]);

    return (
        <Container>
            {cast.length !== 0 && (
                <>
                    <Title>Movie Cast</Title>
                    <List>
                        {cast.map(actor => (
                            <ListContainer key={actor.id}>
                                <ImageActor src={actor.profile_path
                                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                                    :  `${noactor}`
                                    } alt={actor.name} />
                                <p>{actor.name}</p>
                            </ListContainer>
                        ))}
                    </List>
                </>
            )}
            {cast.length === 0 && (
                <WithoutInfo>Sorry, we don&apos;t have any casts for this movie.</WithoutInfo>
            )}
            <ToastContainer />
        </Container>
        
    );
};

export default MovieCast;