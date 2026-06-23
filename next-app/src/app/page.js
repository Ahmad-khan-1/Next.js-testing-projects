import Footer from "../components/Footer";
import style from "./homepage.module.css";
export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <section
        style={{
          padding: "48px 24px",
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "16px" }}>Home Page</h1>
        <p className={style.paragraph}>
          Welcome to our website! Use the navbar above to go to About, Blogs, or
          return home.
        </p>
      </section>
      <Footer />
    </main>
  );
}
