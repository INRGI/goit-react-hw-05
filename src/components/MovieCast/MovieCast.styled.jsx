import styled from "@emotion/styled";

export const WithoutInfo = styled.h3`
    
`;

export const List = styled.ul`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    align-items: center;
    justify-content: center;
`;

export const ImageActor = styled.img`
    width: 200px;
    height: 300px;
    border: 5px;
`;

export const ListContainer = styled.li`
    border: 1px solid;
    border-radius: 10px;
    overflow: hidden;
    align-items: center;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
    background-color: #333;
    color: white;
    font-size: 18px;
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        transform: scale(1.02);
    }  
`;

export const Title = styled.h2`
    font-size: 40px;
    padding: 0;
    margin: 0;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;