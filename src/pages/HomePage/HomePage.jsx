import { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { fetchTrendingMovies } from '../../services/TMDBAPI';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MoviesList from '../../components/MoviesList/MoviesList';

const HomePage = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await fetchTrendingMovies();
                setTrendingMovies(data);
            } catch {
                toast.error('Something went wrong 😿', {
                position: 'top-right',
            });
            }
        }
        fetchMovies();
    },[])

    return (
        <div>
            <h2>Trending Today</h2>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">

                {trendingMovies.length === 0 ? (
                    <Skeleton count={20} />
                ) : (
                        <MoviesList movies={trendingMovies} />
                )}

            </SkeletonTheme>
            <ToastContainer />
        </div>
    );
};

export default HomePage;