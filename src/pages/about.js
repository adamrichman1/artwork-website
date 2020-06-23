import React, {useEffect} from "react";
import './overflow.css'
import NavBar from "../components/navbar/NavBar";
import pages from "../constants/pages";
import artCategories from "../constants/art-categories";
import Footer from "../components/footer/Footer";
import contact from "../constants/contact";
import Properties from "../components/properties/properties";
import Bio from "../components/bio/bio";
import bio from '../constants/bio'

function About() {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className={"overflow"}>
            <Properties/>
            <NavBar pageLinks={pages} artCategories={artCategories}/>
            <Bio bio={bio}/>
            <Footer contact={contact}/>
        </div>
    )
}

export default About;
