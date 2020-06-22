import React from "react";
import {CloseButton, Image, ModalContainer, NextNavButton, PrevNavButton} from "./styles";

function Modal({image, title, closeModal}) {
    return (
        <ModalContainer>
            <PrevNavButton>PREV</PrevNavButton>
            <CloseButton onClick={closeModal}>X</CloseButton>
            <Image src={image} alt={title}/>
            <NextNavButton>NEXT</NextNavButton>
            <h1>{title}</h1>
        </ModalContainer>
    )
}

export default Modal;
