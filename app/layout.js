import "./globals.css";

export const metadata = {
  title: "PULSEGYM-Revitalize Your Workout, Energize Your Life",
  description: "Revitalize Your Workout, Energize Your Life",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
