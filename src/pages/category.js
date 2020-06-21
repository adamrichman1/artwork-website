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

const Category = () => {
    let {id} = useParams();
    return (
        <div className={"category"}>
            <NavBar pageLinks={pages} artCategories={artCategories}/>
            <CategoryHeader title = {id} image={"/headers/hand-drawn.jpg"}/>
            <ContentHeader contentHeader={handDrawn.contentHeader}/>
            <ArtCategory images={handDrawn.images}/>
            <Footer contact={contact}/>
        </div>
    );
};


export default Category;
