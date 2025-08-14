export const metadata = {
  title: "Peptide Planner",
  description: "Plan • Track • Reorder — peptides companion",
};

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
