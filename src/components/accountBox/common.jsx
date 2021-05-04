import styled from "styled-components";


export const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-item: center;
    margin-top: 0px;
    margin-left: 100px;   
`;

export const FormContainer = styled.form`
    width: 75%;
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    
   
`;

export const MutedLink = styled.a`
  font-size: 15px;
  color: #a479a2;
  font-weight: 500;
  text-decoration: none;
  padding-bottom: 2px 2px;
`;

export const BoldLink = styled.h2`
    font-size: 15px;
    color:  #4e2862;
    font-weight: 500;
    text-decoration: none;
`;

export const Input = styled.input`
    width: 100%;
    heigth: 42px;
    outline: none;
    border: 1px solid rgba(200 200 200 0.0.3);
    pading: 0px 10px; 
    border-buttom; 1.4px solid transparent;
    height: 35px;
    transition: all 200ms ease-in-out;
    font-size:15px;
    &::placeholder{
        color: rgba(200, 200, 200, 1);
    }
    &::not(:last-of-type){
        border-bottom: 1.5px solid rgba(200, 200, 200, 0.4)
    }

    &: focus {
    outline: none;
    border-bottom: 2px solid rgba(200, 200, 200, 0.4);
    }
`;
    export const SubmitButton = styled.button`
    width: 75%;
    padding: 10px 15%;
    color: rgba(200, 200, 200, 1);
    font-size: 15px;
    font-weigth: 900;
    border: none;
    margin-left: 0px;
    border-radius: 5px 5px 5px 5px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;    
    background: #4e2862;
    margin-top: 10px;
   
    &:hover{
        filter: brightness(1.03);
    }
`;
