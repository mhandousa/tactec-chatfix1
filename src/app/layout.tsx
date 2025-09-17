import "../styles/globals.css";

export const metadata = {
  title: "TacTec — Revolutionising Football Club Management",
  description: "A modern platform consolidating football club operations into one powerful system."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
