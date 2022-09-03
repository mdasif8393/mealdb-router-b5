import React from 'react';
import { useParams } from 'react-router-dom';
import './MeadDetail.css'

const MealDetail = () => {
    const {id} = useParams();
    
    return (
        <div>
            <h1>Hello{id}</h1>
        </div>
    );
};

export default MealDetail;