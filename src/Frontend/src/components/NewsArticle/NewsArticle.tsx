import React from 'react';
import {NewsWrapperSC, ArticleWrapperSC, ImgSC, SpanSC} from './styles';
import {useAppSelector} from "../../app/hooks";
const NewsArticle = () => {

  const newsArticles = useAppSelector((state) => {
    return state.articles.articles
  })

  return (
    <>
      {newsArticles.length === 0 ? "No Articles Found!!!" :
        newsArticles.map((data, i: number) => {
          return (
              <NewsWrapperSC key={i}>
                <ArticleWrapperSC>
                  <SpanSC> {data.title}</SpanSC>
                  <ImgSC src={data.urlToImage} />
                  <SpanSC> {data.description}</SpanSC>
                  <SpanSC> {data.content}</SpanSC>
                  <SpanSC> {data.publishedAt}</SpanSC>
                </ArticleWrapperSC>
              </NewsWrapperSC>
          )
        })}
    </>
  );
}

export default NewsArticle;
