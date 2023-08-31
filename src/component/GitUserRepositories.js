import React from 'react'
import RepoItem from './RepoItem';
import { Fetch } from './toolbox/Fetch';

function GitUserRepositories({loginId,
    onSelect = f => f
    }) {

    const uri = `https://api.github.com/users/${loginId}/repos`;
    return <Fetch uri={uri} renderSuccess={
        (rapositoyInfo)=>{
        return <RepoItem repositories={rapositoyInfo.data} onSelect={onSelect}></RepoItem>
        }} />;
        
}

export default GitUserRepositories;
