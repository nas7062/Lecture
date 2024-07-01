import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 500px;
    height:400px;
    max-width: 100%;
    text-align:center;
    & input{
        width:400px;
        height:30px;
        margin-bottom:10px;
    }
    span
    {
        border:0px;
        color:red;
        background-color:white;
        font-size:1.5rem;
        position:relative;
        left:250px;
        top:-20px;
        cursor:pointer;
    }
    button{
        border:1px solid grey;
        background-color:white;
        font-size:1.5rem;
        display:flex;
        position:relative;
        left:200px;
        cursor:pointer;
    }
`;

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) 
        return null;
    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <span onClick={onClose}>X</span>
                {children}
            </ModalContent>
        </ModalOverlay>
    );
};

export default Modal;
