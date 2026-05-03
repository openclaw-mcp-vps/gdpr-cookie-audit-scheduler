import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GDPR Cookie Audit Scheduler – Automated Cookie Compliance Monitoring",
  description: "Schedule weekly scans of your websites for GDPR cookie compliance issues. Get compliance reports and email alerts for critical violations."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="509eb92b-7289-4f6a-b38b-4b9da51ecd26"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
