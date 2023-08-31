import React, {useState, useEffect, useMemo} from 'react';
import './App.css';

const loadJSON = (key) =>
  key && JSON.parse(localStorage.getItem(key));

const saveJSON = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));


//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
function GithubUser({loginId}) {
  const [userData, setUserData] = useState(loadJSON(`user:${loginId}`));
  useEffect(()=>{
    //null이면 할일이 없군
    if(!loginId) return;
    fetch(`https://api.github.com/users/${loginId}`, {
      method: "Get", 
      headers: { Authorization: `Bearer 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`}
    }).then(response => response.json())
      .then(setUserData)
      .catch(console.error);
  }, [loginId]);

  useEffect(()=>{
    if(!userData) return;
    console.log(`userData 저장 준비 중!!!`)
    if(userData.login === loginId) return;
    console.log(`userData 저장 한다...`)
    const {login, name, avatar_url, html_url} = userData;
    saveJSON(`user:${login}`, {login, name, avatar_url, html_url});
  }, [userData]);

  if(userData) {
    return <pre>{JSON.stringify(userData, null, 2)}</pre>;

  } else {
    return null;
  }

}
function App() {
  return (
    <GithubUser loginId="joungwoo1" />
    
    
  );
}
//기억해 높은. cache. 성능향상.
export default App;
