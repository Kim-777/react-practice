import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%auto;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;



const NewsList = ({ category }) => {

    // const [articles, setArticles] = useState(null);
    // const [loading, setloading] = useState(false);

    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apikey=aab1960a2eb041219d9c0c552618f5f6`);
    }, [category])

    // useEffect(() => {
    
    //     // async를 사용하는 함수 따로 선언
    //     const fetchData = async () => {
    //         setloading(true);
    //         try {
    //             const query = category === 'all' ? '' : `&category=${category}`;
    //             const response =  await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apikey=aab1960a2eb041219d9c0c552618f5f6`);
    //             setArticles(response.data.articles);
    //         } catch (e) {
    //             console.log(e);
    //         }
    //         setloading(false);
    //     }

    //     fetchData();

    // }, [category]);

    if(loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>
    }

    if(!response) {
        return null;
    }

    if(error) {
        return <NewsListBlock>에러 발생!</NewsListBlock>
    }

    const { articles } = response.data;

    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    )
}

export default NewsList
