import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
    margin-top: 15px;
    margin-left:15px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const StyledLink = styled (Link)`
    text-decoration: none;
`

export const Img = styled.img`
  width: 260px;
  height: 400px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  
  &:hover {
  transform: scale(1.03);
  cursor: pointer;
}  
`;

export const DetailContainer = styled.div`
    display: flex;
    gap: 25px;
`;

export const Detail = styled.div``;

export const Title = styled.h1`
    font-size: 34px;
    padding: 0;
    margin: 0;
`;

export const Genres = styled.h3`
    padding: 0;
    margin: 0;
`;

export const GenresText = styled.p`
    padding: 0;
    margin: 0;
`;

export const OverviewText = styled.p`
    padding: 0;
    margin-bottom: 10px;
    max-width: 600px;
`;

export const Overview = styled.h2`
    padding: 0;
    margin: 0;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-left: 14px;
    margin-bottom: 20px;
`;