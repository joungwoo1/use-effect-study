import React from 'react';

const peaks = [{name:"kim mount", elev:55}, {name:"kim pong", elev: 50099}];

function List({data=[], itemRenderMethod={}, empty}) {
  console.log("step 2");
  if(!data || data.length == 0)
    return empty;
    console.log("step 3");
  return (<>
    {data.map((item, idx) => { return <li key={idx}> {itemRenderMethod(item)} </li>})}
  </>);
  }

function App() {
  return <List data={peaks}
   empty={<p>this list is empty!</p>}
   itemRenderMethod={
    item=> (
      <>
      {item.name} - {item.elev} 높이입니다.
      </>
    )
   }
  />
}
//기억해 높은. cache. 성능향상.
export default App;
