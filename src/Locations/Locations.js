import axios from "axios";
import { useQuery } from "react-query";
export default function Locations() {
  const getData =  () => {
    return axios.get("https://rickandmortyapi.com/api/character");

    //  return response
  };
  // getData()
  const { isLoading, data } = useQuery("vacations", getData);
  // const {} = useQuery("vacations")

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
//   console.log(data?.data.results);
  return (
    <>
      {data?.data?.results.map((it) => (
        <div key={it.name}><p>{it.name}</p><p>{it.status}</p><img height="113px" src={it.image}/><hr/></div>
      ))}
    </>
  );
}
