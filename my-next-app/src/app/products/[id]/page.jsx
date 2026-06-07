// export default async function ProcutIdPage({ params }) {
//   const { productId } = await params;
//   return <h1>Product ID: {productId}</h1>;
// }

// async function Product1({ params }) {
//   const { id } = await params;

//   return <div>Blog Id : {id} </div>;
// }
// export default Product1;
export default async function ProductPage({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

  if (!id)
    return (
      <div>
        <div>No `id` parameter received in route.</div>
        <div>params: {JSON.stringify(resolvedParams)}</div>
      </div>
    );

  try {
    const res = await fetch(url);

    if (!res.ok) {
      return (
        <div>
          <div>Requested id: {id}</div>
          <div>Fetch URL: {url}</div>
          <div>Product not found (status: {res.status})</div>
        </div>
      );
    }

    const blog = await res.json();

    return (
      <div>
        <div>Requested id: {id}</div>
        <h1>{blog.title}</h1>
        <p>{blog.body}</p>
      </div>
    );
  } catch (err) {
    return (
      <div>
        <div>Requested id: {id}</div>
        <div>Fetch error: {err.message}</div>
      </div>
    );
  }
}
