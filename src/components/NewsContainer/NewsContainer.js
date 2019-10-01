import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsContainer = () => {
    return (
        <section className='news-container'>
            <NewsArticle />
        </section>
    )
}

export default NewsContainer;