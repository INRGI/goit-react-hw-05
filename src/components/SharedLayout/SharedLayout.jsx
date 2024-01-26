import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, Logo, LogoContainer, StyledLink } from "./SharedLayout.styled";
import { FcFilm } from "react-icons/fc";

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
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
};

export default SharedLayout;