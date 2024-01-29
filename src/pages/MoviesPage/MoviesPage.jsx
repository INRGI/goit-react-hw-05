import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../services/TMDBAPI";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../../components/Loader";
import SearchBox from '../../components/SearchBox';
import MoviesList from '../../components/MoviesList';
import { Container } from "./MoviesPage.styled";

const MoviesPage = () => {
    const [searchData, setSearchData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const movieName = searchParams.get("query") ?? "";

    const updateQueryString = (query) => {
        const nextParams = query !== "" && { query };
        setSearchParams(nextParams);
    };

    useEffect(() => {
        const search = async () => {
            try {
                setIsLoading(true);
                const data = await searchMovies(movieName);
                setSearchData(data);
            } catch {
                toast.error('Something went wrong 😿', {
                    position: 'top-right',
                });
            } finally {
                setIsLoading(false);
            }
        }
        search()
    }, [movieName]);

    return (
        <Container>
            <SearchBox value={movieName} onSubmit={updateQueryString} />
            {isLoading ? (
                <Loader/>
            ) : searchData.length === 0 && movieName ? (
                <h2>Nothing Found</h2>
            ) : (
                    <MoviesList movies={searchData} />
            )}
            <ToastContainer />
        </Container>
    );
};

export default MoviesPage;