import React, {useState, useEffect} from 'react';
import './App.css';

const useAnyKeyToRender = () => {
  const [_,forceRender] = useState();

  useEffect (()=>{
    window.addEventListener("keydown", forceRender);
    console.log(`AnyKeyToRender `)
    return () => window.removeEventListener("keydown", forceRender)
  }, []);

};

function App() {
  useAnyKeyToRender();

  const [val,setVal] = useState("");
  const [phrase, setPhrase] = useState("example phrase");

  const createPhrase = () => {
    setPhrase(val);
    setVal("");
  };

  useEffect (()=>{
    //PWD 대 소 특 숫자 8글자 이상. 패턴 매칭
    console.log(`typing "${val}"`)
  }, [val]);

  useEffect (()=>{
    console.log(`save phrase "${phrase}"`)
  }, [phrase]);

  return (
    <div className='App'>
      <label>Favorite phrase:</label>
      {/* 연달아 */}
      <input 
        value={val} 
        placeholder={phrase} 
        onChange={e => setVal(e.target.value)} 
      />
      <button onClick={createPhrase}>send</button>
    </div>
  );
}

export default App;
