import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
    return (
        <section className='news-article'>
            <img src={props.article.img} alt={props.article.headline} />
            <h2>{props.article.headline}</h2>
            <p>{props.article.description}</p>
            <button className='article-button'>
            <a href={props.article.url}>Link To Article -></a>
            </button>
        </section>
    )
}

export default NewsArticle;