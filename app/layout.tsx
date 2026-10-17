import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE } from "./site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: SITE.title,
    description: SITE.description,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  authors: [{ name: SITE.name, url: SITE.github }],
};

export const viewport: Viewport = {
  themeColor: "#f5f0e8",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: "Full-Stack Software Engineer",
  email: `mailto:${SITE.email}`,
  url: SITE.url,
  address: { "@type": "PostalAddress", addressLocality: "Ahmedabad", addressRegion: "Gujarat", addressCountry: "IN" },
  sameAs: [SITE.github, SITE.linkedin],
  worksFor: { "@type": "Organization", name: "Accenture" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=DM+Mono:wght@300;400;500&family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;1,9..40,300&display=swap"
        />
        {/* Without JS, never leave sections invisible */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
