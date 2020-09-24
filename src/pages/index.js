import React, {useEffect} from "react";
import HomeCategories from "../components/home-categories/HomeCategories";
import artCategories from '../constants/art-categories';
import HomeHeader from '../components/headers/HomeHeader';
import NavBar from "../components/navbar/NavBar";
import pages from '../constants/pages'
import Footer from "../components/footer/Footer";
import contact from "../constants/contact";
import "./overflow.css"
import Properties from "../components/properties/properties";

function HomePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <div className={"overflow"}>
            <Properties/>
            <NavBar pageLinks={pages} artCategories={artCategories}/>
            <HomeHeader image={"/banners/beach-banner-alt.jpg"}/>
            <HomeCategories artCategories={artCategories}/>
            <Footer contact={contact}/>
        </div>
    )
}

export default HomePage;
