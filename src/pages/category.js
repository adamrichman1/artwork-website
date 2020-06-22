import React from "react";
import {useParams} from 'react-router-dom';
import ArtCategory from "../components/category/ArtCategory";
import handDrawn from '../constants/hand-drawn';
import NavBar from "../components/navbar/NavBar";
import pages from "../constants/pages";
import artCategories from "../constants/art-categories";
import ContentHeader from "../components/headers/ContentHeader";
import CategoryHeader from "../components/headers/CategoryHeader";
import './category.css'
import Footer from "../components/footer/Footer";
import contact from "../constants/contact";
import digital from "../constants/digital";
import design from "../constants/design";
import photomontage from "../constants/photomontage";

const Category = () => {
    let data = getContent(useParams());
    return (
        <div className={"category"}>
            <NavBar pageLinks={pages} artCategories={artCategories}/>
            <CategoryHeader title = {data.pageHeader} image={data.banner}/>
            <ContentHeader contentHeader={data.contentHeader}/>
            <ArtCategory images={data.images}/>
            <Footer contact={contact}/>
        </div>
    );
};

const getContent = ({id}) => {
    switch (id) {
        case "hand-drawn":
            return handDrawn;
        case "digital":
            return digital;
        case "design":
            return design;
        case "photomontage":
            return photomontage;
        default:
            return null;
    }
};

export default Category;
