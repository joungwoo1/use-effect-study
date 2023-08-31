import React, {useState, useEffect, useMemo} from 'react';
import './App.css';

const loadJSON = (key) =>
  key && JSON.parse(localStorage.getItem(key));

const saveJSON = (key, data) => {
  console.log(`진짜 뭐꼬? localStorage.setItem(${key}, ${JSON.stringify(data)})`);
  localStorage.setItem(key, JSON.stringify(data));
  }
//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
function GithubUser({loginId}) {
  const [savedUserData] = useState(loadJSON(`user:${loginId}`));
  const [userData, setUserData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    //null이면 할일이 없군
    if(!loginId) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${loginId}`, {
      method: "Get", 
      headers: { Authorization: `Bearer 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`}
    }).then(response => response.json()).then(setUserData).then(setLoading(false))
      .catch(setError);
  }, [loginId]);

  useEffect(()=>{
    if(!userData) return;
    console.log(`userData 저장 준비 중!!!`)

    if(savedUserData && savedUserData.updated_at === userData.updated_at) {
      console.log(`userData 저장 되어있거든...`)
      return;
    }
    console.log(`userData 저장 한다...`)
    const {login, name, avatar_url, html_url, updated_at} = userData;
    const savingDataImage = {login, name, avatar_url, html_url, updated_at };
    console.log(`${savingDataImage} 이렇게 한다`)
    saveJSON(`user:${loginId}`, savingDataImage);
  }, [userData]);

  if(loading) return <p>loding....</p>;
  if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  
  if(userData) {
    return <div>
      <img src={userData.avatar_url} alt={userData.login} style={{width:"200px"}}/>
      <div>
        <h1>{userData.login}</h1>
        {userData.name && <p>{userData.name}</p>}
        {userData.location && <p>{userData.location}</p>}
      </div>
    </div>;

  } else {
    return null;
  }

}
function App() {
  return (
    <GithubUser loginId="moonhighway" />
    
    
  );
}
//기억해 높은. cache. 성능향상.
export default App;
