import ThemeButton from "./ThemeButton";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 24px",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <h2 style={{ margin: 0 }}>My Next App</h2>
      <ThemeButton />
    </header>
  );
}
