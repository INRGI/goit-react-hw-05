import styled from "@emotion/styled";

export const WithoutInfo = styled.h3`
    
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h2`
    font-size: 40px;
    padding: 0;
    margin: 0;
`;

export const List = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    max-width: 800px;
    margin: 0;
    padding: 0;
    margin-top: 30px;
`;

export const ListContainer = styled.li`
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid;
    border-radius: 10px;
    overflow: hidden;
    padding: 15px;
    background-color: #333;
    color: white;
    &:hover {
        transform: scale(1.02);
    }  
`;

export const ImageAuthor = styled.img`
    width: 80px;
    border-radius: 5px;
`;

export const Author = styled.div`
    display: flex;
    gap: 20px;
`;