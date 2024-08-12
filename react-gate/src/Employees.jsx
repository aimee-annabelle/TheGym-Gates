/* eslint-disable react/jsx-key */
import useFetchData from "./useFetchData";
function Employees() {

  const { data, error, loading } = useFetchData("https://dummyjson.com/todos");

  console.log(data);

  if (loading) return <p>Loading.....</p>;
  if (error) return <p>Error.....{error.message}</p>;
  return (
    <div className="App">
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      {data && data.map((ele) => <p>{ele.todo}</p>)}
    </div>
  );
}

export default Employees;
