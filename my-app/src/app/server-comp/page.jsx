const ServerComp = async () => {
  const URl = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(URl);
  const data = await res.json();

  console.log(data);
  return (
    <>
      <h1>Server Component</h1>
      <ul className="grid grid-cols-3 gap-5">
        {data.map((item, index) => {
          return <li key={index}>{item.body}</li>;
        })}
      </ul>
    </>
  );
};

export default ServerComp;
