import React, {useState, useEffect, useMemo} from 'react';
import './App.css';

const useAnyKeyToRender = () => {
  const [_,forceRender] = useState();

  useEffect (()=>{
    window.addEventListener("keydown", forceRender);
    console.log(`AnyKeyToRender `)
    return () => window.removeEventListener("keydown", forceRender)
  }, []);

};

function WordCount ({children = ""}) {
  //랜더링 강제화
  useAnyKeyToRender();
  const words = useMemo(()=>{
    console.log(`children.split 재 계산`)

    return children.split(" ");
  }, []);
  

  useEffect (()=>{
    //반복적으로 구동되는 군 !!! 노리는 효과가 아님...
    console.log(`refresh render`);
  }, [words]); 

  return (
    <>
      <p>children</p>
      <p><strong>{words.length} : 단어들</strong></p>
    </>
  );
}

function App() {
  return (
    <WordCount>
      Favorite phrase
    </WordCount>
  );
}
//기억해 높은. cache. 성능향상.
export default App;
