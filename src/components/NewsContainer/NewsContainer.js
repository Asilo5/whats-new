import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsContainer = (props) => {
    const currentNews = props.news.map(article => {
        return < NewsArticle key={article.id} article={article} />
    })

    return (
        <section className='news-container'>
            {currentNews}
        </section>
    )
}

export default NewsContainer;