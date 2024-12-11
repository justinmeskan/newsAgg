import React, {useEffect, useState, FC} from 'react';
import {HeaderWrapperSC} from './styles';
import {useAppDispatch} from "../../app/hooks";
import {filterArticles, setArticles} from "../../features/areticles/articleSlice";
import axios from "axios";

const Header = () => {
    const dispatch = useAppDispatch()
    const [searchWord, setSearchWord] = useState<string>('')
    return (
        <HeaderWrapperSC>
            <input
                onChange={(e) => {
                    setSearchWord(e.target.value)
                }}
                type={'text'} value={searchWord} />
            <button
                onClick={(e) => {
                    axios('http://localhost:3000').then((data: any) => {
                        dispatch(setArticles(data.data))
                        dispatch(filterArticles(searchWord))
                    })
                }}
            > Search </button>
        </HeaderWrapperSC>
    );
}

export default Header;
