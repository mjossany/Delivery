import styled from 'styled-components';

export const ProductsContainer = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 1rem;
    flex-wrap: wrap;
`;

export const Product = styled.div`
    width: 200px;
    height: 300px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
`;

export const ProductImage = styled.img`
    display: flex;
    width: 100%;
    height: 200px;
    border-radius: 5px;
`;

export const GoToCartButton = styled.button`
    width: 200px;
    height: 40px;
    border-radius: 5px;
    border: none;
    color: #000;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    position: fixed;
    bottom: 10px;
    right: 0;
    background-color: green;
    color: #fff;
`;
