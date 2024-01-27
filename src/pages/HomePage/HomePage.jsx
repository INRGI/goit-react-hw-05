import { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { fetchTrendingMoviesPages } from '../../services/TMDBAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MoviesList from '../../components/MoviesList/MoviesList';
import Pagination from '@mui/material/Pagination';
import { Container, Title } from './HomePage.styled';
import { VscFlame } from "react-icons/vsc";

const HomePage = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const handleChange = (event, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await fetchTrendingMoviesPages(currentPage);
                setTrendingMovies(data.results);
                setTotalPages(data.total_pages);
            } catch {
                toast.error('Something went wrong 😿', {
                    position: 'top-right',
                });
            }
        };
        fetchMovies();
    }, [currentPage]);

    return (
        <Container>
            <Title>Trending Today <VscFlame size={30}/></Title>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                {trendingMovies.length === 0 ? (
                    <Skeleton count={20} />
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
            </SkeletonTheme>
            <ToastContainer />
        </Container>
    );
};

export default HomePage;
