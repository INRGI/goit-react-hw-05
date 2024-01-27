import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, Logo, LogoContainer, StyledLink } from "./SharedLayout.styled";
import { FcFilm } from "react-icons/fc";
import Loader from "../Loader/Loader";

const SharedLayout = () => {

    return (
        <div>
            <Header>
                <LogoContainer>
                    <FcFilm size={33} color="black" />
                    <Logo>Movies</Logo>
                </LogoContainer>
                
                <nav>
                    <StyledLink to="/" end>Home</StyledLink>
                    <StyledLink to="/movies">Movies</StyledLink>
                </nav>
            </Header>
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
        </div>
    )
};

export default SharedLayout;