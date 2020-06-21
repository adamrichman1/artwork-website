import React, {Component} from "react";
import HomeCategories from "../components/home-categories/HomeCategories";
import artCategories from '../constants/art-categories';
import PageHeader from '../components/headers/PageHeader';
import NavBar from "../components/navbar/NavBar";
import ContentHeader from "../components/headers/ContentHeader";
import pages from '../constants/pages'
import Footer from "../components/footer/Footer";
import contact from '../constants/contact'
import socialMedia from "../constants/socialMedia";
import "./index.css"
class HomePage extends Component {
    render() {
        return (
            <div className={"index"}>
                <meta name="viewport" content="width=device-width"/>
                <NavBar pageLinks={pages} artCategories={artCategories}/>
                <PageHeader image={"/headers/beach-banner.png"}/>
                <ContentHeader text={"Check out my work ↓"}/>
                <HomeCategories artCategories={artCategories}/>
                <Footer contact={contact} socialMedia={socialMedia}/>
            </div>
        )
    }
}
export default HomePage;
