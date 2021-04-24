import React from 'react'

import './CourseCard.css'

const CourseCard = ({title, description, authors = 'none', duration, creationDate}) => {
    return (
        <div className="app-list-item">
            <h3>{title}</h3>
            <span>{description}</span>
            <span>{authors}</span>
            <span>{duration}</span>
            <span>{creationDate}</span>
        </div>
    )
}

export default CourseCard;