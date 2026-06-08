// import { docs } from "../../data/docs";

// export default async function DocsPage({ params }) {
//   const { slug } = await params;

//   const path = slug.join("/");

//   const page = docs[path];

//   if (!page) {
//     return <h1>Documentation Not Found</h1>
//   }

//   return (
//     <div>
//       <h1>{page.title}</h1>
//       <p>{page.content}</p>
//     </div>
//   );
// }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    title: `Blog ${slug}`,
  };
}

export default async function Docs({ params }) {
  //   console.log(await params);
  const { slug } = await params;

  return (
    <div>
      <h1>Document : {slug?.join("/")}</h1>
    </div>
  );
}
