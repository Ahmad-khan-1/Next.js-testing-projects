// components/ServiceList.jsx

"use client"; // ← ye isko client component banata hai

// ✅ ServiceItem ko yahan IMPORT NAHI kiya

export default function ServiceList({ children }) {
  // children prop me humara ServiceItem aayega
  return (
    <div>
      <h3>All Services</h3>
      <ul>{children}</ul>
    </div>
  );
}
