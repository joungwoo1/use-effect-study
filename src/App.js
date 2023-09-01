import React, {useState, useEffect, useMemo} from 'react';
import './App.css';
import { FixedSizeList } from "react-window";
import { faker } from "@faker-js/faker";
import P240Windowing from './App_p240FixSizeList';
import LoadByFetchHooks from "./App_p242_LoadByFetchHooks"
import { useIterator } from './hooks/useIterator';
import RepoItem from './component/RepoMenu';
import GitUserRepositories from './component/GitUserRepositories';
import GitUserByFetch from './component/GitUserByFetch';

function App() {
    return (<GitUserByFetch loginId={"moonhighway"}/>)
    
    //(<GitUserRepositories loginId={"moonhighway"}/>)
    //ivarbae : 레포 빈아이디

    //const items = ['aaa', 'bbb'];
    //return <RepoItem repositories={items}/>

    //const items = ['a', 'b', 'c'];
    //const {item, prev, next} = useIterator(items);
    //return (<P240Windowing/>)
    //return (<LoadByFetchHooks/>)

    
}

export default App;
