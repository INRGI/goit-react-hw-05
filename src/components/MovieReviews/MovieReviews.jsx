import { useEffect, useState } from "react";
import { fetchMovieReviews } from "../../services/TMDBAPI";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router-dom";
import { Author, Container, ImageAuthor, List, ListContainer, Title, WithoutInfo } from "./MovieReviews.styled";

import noactor from '../images/actor.png';

const MovieReviews = () => {
    const { movieId } = useParams();
    const [review, setReview] = useState([]);

    useEffect(() => {
        const reviews = async () => {
            try {
                const data = await fetchMovieReviews(movieId);
                setReview(data);
            } catch {
                toast.error('Something went wrong 😿', {
                    position: 'top-right',
                });
            }
        }
        reviews()
    }, [movieId])

    return (
        <Container>
            {review.length !== 0 && (
                <>
                    <Title>Movie Reviews</Title>
                    <List>
                        {review.map(item => (
                            <ListContainer key={item.id}>
                                <Author>
                                <ImageAuthor src={item.author_details.avatar_path
                                    ? `https://image.tmdb.org/t/p/w500${item.author_details.avatar_path}`
                                    :  `${noactor}`
                                    } alt={item.author_details.name} />
                                    <h4>{item.author}</h4>
                                </Author>
                                <p>{item.content}</p>
                            </ListContainer>
                        ))}
                    </List>
                </>
            )}
            {review.length === 0 && (
                <WithoutInfo>Sorry, we don&apos;t have any reviews for this movie.</WithoutInfo>
            )}
            <ToastContainer />
        </Container>
    );
};

export default MovieReviews;