import { useFetch } from "../hooks/useFetch";

function GitUser({loginId}) {
  const uri = `https://api.github.com/users/${loginId}`;
  const {loading, data , error} = useFetch(uri);

  if(loading) return <p>loding....</p>;
  if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  
  if(data) {
    return <div>
      <img src={data.avatar_url} alt={data.login} style={{width:200}}/>
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>;
  }

}

export default GitUser;