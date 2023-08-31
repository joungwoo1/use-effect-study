import GitUserRepositories from "./GitUserRepositories";
import { Fetch } from "./toolbox/Fetch";

export default function GitUserByFetch({loginId}) {
  const uri = `https://api.github.com/users/${loginId}`;

  return <Fetch uri={uri} renderSuccess={RenderSuccess}/>;
  }

  function RenderSuccess({data}) {
    return (
    <div>
      <img src={data.avatar_url} alt={data.login} style={{width:200}}/>
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
      <GitUserRepositories loginId={data.login}/>
    </div>);
}