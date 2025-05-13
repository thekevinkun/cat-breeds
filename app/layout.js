import "@/styles/globals.css";

export const metadata = {
  title: "Cat Breeds",
  description: "Discover cat breeds around the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
