import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <Header />
      <section
        style={{
          padding: "48px 24px",
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "12px" }}>
          Welcome to the App
        </h1>
        <p style={{ fontSize: "1rem", lineHeight: 1.6 }}>
          This page uses the theme context, header, footer, and toggle button.
        </p>
      </section>
      <Footer />
    </main>
  );
}
