export default async function BlogPage({ params }) {
  const { id } = await params;

  const random = Math.random();
  console.log(random);

  if (random > 0.5) {
    throw new Error("Error Occured");
  }
  return <div>BlogPage {id}</div>;
}
