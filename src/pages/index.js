import React, {Component} from "react";
import HomeCategories from "../components/home-categories/HomeCategories";
import artCategories from '../constants/art-categories';
import PageHeader from '../components/headers/PageHeader';
import NavBar from "../components/navbar/NavBar";
import ContentHeader from "../components/headers/ContentHeader";

class HomePage extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <PageHeader image={"/headers/beach-banner.png"}/>
                <ContentHeader/>
                <HomeCategories artCategories={artCategories}/>
            </div>
        )
    }
}
export default HomePage;
