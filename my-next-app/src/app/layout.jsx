import "./globals.css";

export const metadata = {
  title: {
    default: "Next Agency",
    template: "%s | Next Agency",
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
