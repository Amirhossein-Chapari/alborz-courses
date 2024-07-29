import './globals.css';

export const metadata = {
  title: "مجتمع فنی مهندسی البرز",
  description: ""
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
