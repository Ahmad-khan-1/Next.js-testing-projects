"use client";

export default function GlobalError() {
  return (
    <html lang="en">
      <body>
        <div>
          <h1>Something went wrong in the Root Layout</h1>
          <button onClick={() => window.location.reload()}>Reload</button>
        </div>
      </body>
    </html>
  );
}
