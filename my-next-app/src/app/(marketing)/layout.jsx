export default function RootLayout({ children }) {
  return (
    <div>
      <header style={{ background: "yellow" }}>Header (marketing)</header>
      {children}
      <header style={{ background: "green" }}>Footer(marketing )</header>
    </div>
  );
}
