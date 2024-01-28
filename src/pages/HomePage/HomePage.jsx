import { useEffect, useState } from 'react';
import { fetchTrendingMoviesPages } from '../../services/TMDBAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MoviesList from '../../components/MoviesList/MoviesList';
import Loader from '../../components/Loader'
import Pagination from '@mui/material/Pagination';
import { Container, Title } from './HomePage.styled';
import { VscFlame } from "react-icons/vsc";

const HomePage = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setIsLoading(true);
                const data = await fetchTrendingMoviesPages(currentPage);
                setTrendingMovies(data.results);
                setTotalPages(data.total_pages);
                setIsLoading(false);
            } catch {
                toast.error('Something went wrong 😿', {
                    position: 'top-right',
                });
            } finally {
                setIsLoading(false);
            }
        };
        fetchMovies();
    }, [currentPage]);

    return (
        <Container>
            <Title>Trending Today <VscFlame size={30}/></Title>

                {isLoading ? (
                    <Loader />
                ) : (
                    <>
                        <MoviesList movies={trendingMovies} />
                        <Pagination
                            count={totalPages}
                            color="secondary"
                            size="large"
                            page={currentPage}
                            onChange={handleChange}
                        />
                    </>
                )}

            <ToastContainer />
        </Container>
    );
};

export default HomePage;
