import styled from 'styled-components';

export const Container = styled.div`
    
`;


export const Contador = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    >h1{
        color: #53ac6a;
    }
    >span{
        font-size: 62px;
        color: #fff;
        margin: 20px;
    }
    >div button{
        background-color: #53ac6a;
        border: none;
        border-radius: 25px;
        margin: 10px;
        padding: 10px 30px;
    }
`;

export const Formulario = styled.div`
    text-align: center;

    >input{
        border: 1px solid #53ac6a;
        border-radius: 25px;
        padding: 10px 20px;
        margin: 40px;
    }
`;
