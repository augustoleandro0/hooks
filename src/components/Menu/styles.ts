import styled from 'styled-components';

export const Container = styled.div`

    > nav{
        width: 100%;
        background-color: #eeeeee;
        display: flex;
        align-items: center;
    }

    > nav ul li {
        display: flex;
        list-style: none;
        font-size: 1.2em;
        margin: 10px;
    }
    > nav ul li a{
        text-decoration: none;
        color: #000;
        margin-left: -10px;
    }
   

    > nav ul li a:hover{
      background: #ccc;
    } 
`;


export const Dropdown = styled.div`
    display: none;
    width: 35%;
    overflow: hidden;
`;

export const Exercicios = styled.div`
    
    &:hover{
        ${Dropdown}{
            display: block;
            background-color: #fff;
            border-radius: 25px;
            position: absolute;
            z-index: 999;
            padding: 15px;
        }
        ${Dropdown} ul li{
           margin: 10px 10px 0px -14px;
           padding: 0px 10px;
        }
        
        
    }
  

`;