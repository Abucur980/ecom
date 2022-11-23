import './category-item.style.scss';
import * as React from 'react';
import Button from '@mui/material/Button';

const CategoryItem = ({category}) => {

    const {img, title} = category;

    return (
        <div className="category-container">
            <img className="p-image" src={img} alt="Logo" />
            <div className="category-body-container">
                <h2>{title}</h2>
                <Button color="secondary" variant="contained" size="large" >See more</Button>
            </div>
        </div>
    )
}

export default CategoryItem;