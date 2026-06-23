export default function BlogLayout({ children }) {
  const random = Math.random();
  console.log(random);

  if (random > 0.3) {
    throw new Error("Error Occured");
  }
  return (
    <body>
      <header>This is Header section </header>
      {children}
      <footer>This is footer section </footer>
    </body>
  );
}
