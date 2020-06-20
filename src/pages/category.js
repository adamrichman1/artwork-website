import React from "react";
import {useParams} from 'react-router-dom';

const Category = () => {
    let {title} = useParams();
    return (
        <div>
            Category: {title}!
        </div>
    );
};


export default Category;
