import { Metadata } from "next";

export const metadataTags: Metadata = {
  title: "Appnly – Google Workspace Migration & Automation Experts",
  description:
    "Appnly specializes in seamless email and app migrations to Google Workspace, Google Sheets automation, and AppSheet development. Trusted by 300+ clients and 20,000+ users globally.",
  keywords: [
    "Google Workspace",
    "email migration",
    "Google Sheets automation",
    "AppSheet development",
    "DNS setup",
    "Gmail filters",
    "Google Workspace setup",
    "cloud migration",
    "workspace consulting",
    "IT automation",
    "appnly"
  ],
  publisher: "Appnly",
  authors: [
    {
      name: "Raj Shakya",
      url: "https://www.upwork.com/freelancers/~01698d1c0db877b32d"
    }
  ],
  robots: "index, follow",
  icons: {
    icon: "/assets/icon.png",
    apple: "/assets/icon.png"
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  alternates: {
    canonical: "https://www.appnly.com",
    languages: {
      en: "en-US"
    }
  },
  category: "IT Services",
  metadataBase: new URL("https://www.appnly.com"),
  openGraph: {
    siteName: "Appnly – Google Workspace Migration & Automation",
    type: "website",
    title: "Appnly – Google Workspace Migration & Automation Experts",
    description:
      "From email migrations to workspace optimization, Appnly provides enterprise-level solutions for businesses looking to streamline with Google Workspace.",
    images: [
      {
        url: "/assets/thumbnail.png",
        type: "image/png",
        width: "1920",
        height: "1080"
      }
    ],
    url: "https://www.appnly.com",
    locale: "en-US",
    emails: "info@appnly.com",
    phoneNumbers: "+91 9313845200"
  },
  twitter: {
    site: "@Appnly",
    creator: "@RajShakya",
    card: "summary_large_image",
    title: "Appnly – Google Workspace Migration & Automation",
    description:
      "Trusted by 300+ businesses and 20,000+ users for Google Workspace migration, DNS setup, AppSheet automation, and more.",
    images: "/assets/thumbnail.png"
  }
};
