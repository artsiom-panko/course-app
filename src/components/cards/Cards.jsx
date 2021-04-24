import React from 'react';

import CourseCard from '../course-card/CourseCard';
import './Cards.css';

const Cards = ({cards}) => {

    const elements = cards.map((item) => {
        return (
            <li key={item.id} className="list-group-item">
                <CourseCard
                title={item.title}
                description={item.description}
                authors={item.authors}
                duration={item.duration}
                creationDate={item.creationDate}/>
            </li>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default Cards;