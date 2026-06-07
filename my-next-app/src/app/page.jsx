export default async function Home({ searchParams }) {
  console.log(await searchParams);
  return (
    <>
      <h1>Live Chat Message Sender</h1>
    </>
  );
}
