import React, {useEffect, useState} from 'react';
import {AppWrapperSC} from './styles';
import axios from "axios";
import NewsArticle from "../NewsArticle/NewsArticle";
import Header from "../Header/Header";
import {useAppDispatch} from "../../app/hooks";
import {setArticles} from "../../features/areticles/articleSlice";

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    axios('http://localhost:3000/data')
    axios('http://localhost:3000').then((data: any) => {
      // setNewsArticles(data.data)
      dispatch(setArticles(data.data))
      // console.log('data', data.data)
    })
  }, [])

  return (
    <AppWrapperSC>
      <Header />
      <NewsArticle />
    </AppWrapperSC>
  );
}

export default App;
