import React, {Component} from "react";
import './overflow.css'
import NavBar from "../components/navbar/NavBar";
import pages from "../constants/pages";
import artCategories from "../constants/art-categories";

class About extends Component {
    render() {
        return (
            <div className={"overflow"}>
                <NavBar pageLinks={pages} artCategories={artCategories}/>
            </div>
        )
    }
}

export default About;
