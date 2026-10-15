import "./globals.css";
import business from "../business.json";

if (!business.logoUrl) {
  throw new Error("business.json needs logoUrl. The real logo is required before a build.");
}

export const metadata = {
  title: `${business.name} | ${business.niche} in ${business.city}`,
  description: business.copy.heroSub,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ "--accent": business.accent || "#0d6468" }}>
      <body>{children}</body>
    </html>
  );
}
