export default function Loading() {
  return (
    <main className="parallel-shimmer-shell">
      <div className="parallel-shimmer-header">
        <div className="parallel-shimmer-title"></div>
        <div className="parallel-shimmer-subtitle"></div>
      </div>

      <div className="parallel-shimmer-grid">
        {Array.from({ length: 3 }).map((_, index) => (
          <section key={index} className="shimmer-card">
            <div className="shimmer-card-heading">
              <div className="shimmer-circle"></div>
              <div className="shimmer-card-title"></div>
            </div>
            <div className="shimmer-card-body">
              <div className="shimmer-line short"></div>
              <div className="shimmer-line"></div>
              <div className="shimmer-line"></div>
              <div className="shimmer-line"></div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
