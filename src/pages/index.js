import React from "react";
import HomeCategories from "../components/home-categories/HomeCategories";
import artCategories from '../constants/art-categories';
import PageHeader from '../components/headers/PageHeader';
import NavBar from "../components/navbar/NavBar";
import ContentHeader from "../components/headers/ContentHeader";
import pages from '../constants/pages'
import Footer from "../components/footer/Footer";
import contact from "../constants/contact";
import "./index.css"

const HomePage = () => {
    return (
        <div className={"index"}>
            <meta name="viewport" content="width=device-width"/>
            <NavBar pageLinks={pages} artCategories={artCategories}/>
            <PageHeader image={"/headers/beach-banner.png"}/>
            <ContentHeader contentHeader={{"title": "", "description": "Check out my work ↓"}}/>
            <HomeCategories artCategories={artCategories}/>
            <Footer contact={contact}/>
        </div>
    )
};
export default HomePage;
