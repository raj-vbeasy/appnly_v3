export const landingContents = {
  hero: {
    headline: "Simplifying email & App migrations to Google Workspace",
    description: "Streamline your transition to Google Workspace with our migration, automation, and security solutions.",
    images: ["/assets/header.png", "/assets/header2.png", "/assets/header3.png", "/assets/header4.png"],
    button: "Get Started"
  },
  migration: {
    heading: "MIGRATION SOLUTIONS",
    solutions: [
      {
        imageSrc: "/assets/header2.png",
        title: "Migrate to Google Workspace",
        content: "Securely transfers emails, contacts, calendars, and files from legacy systems to Google Workspace."
      },
      {
        imageSrc: "/assets/solutions/outlook-svgrepo-com.png",
        title: "Migrate from Outlook/Exchange",
        content: "Transition smoothly from Microsoft Outlook or Exchange to cloud-based platforms."
      },
      {
        imageSrc: "/assets/solutions/gmail.png",
        title: "Gmail to Gmail Transfer",
        content: "Seamlessly moves emails, contacts, and labels between Gmail accounts."
      },
      {
        imageSrc: "/assets/solutions/server-stack.svg",
        title: "Email Authentication & DNS Setup",
        content: "Full configuration of DNS records including SPF, DKIM, DMARC, MX, TXT, and CNAME to secure email delivery, verify sender identity, and prevent spoofing or phishing attacks."
      },
      {
        imageSrc: "/assets/solutions/google-drive.png",
        title: "Google Drive/Shared Drive Migrations",
        content: "From One Drive to Google Drive, From One Google Drive to another Drive Shared Drive Structure Creations"
      },
      {
        imageSrc: "/assets/solutions/google-drive.png",
        title: "New Service: Google Workspace Consultation",
        content: "End-to-end strategic guidance to optimize your Google Workspace environment: setup, organization structure, admin console optimization, security, and policy management."
      }
    ],
    highlight: "Migrate from imap/ cpanel/ Godaddy/ Namecheap/ STRATO/ IONOS/ OTHERS"
  },
  // ...rest of your original code continues
  testimonials: {
    heading: "TESTIMONIALS",
    description: "Trusted by 300+ clients, Appnly has migrated 20,000+ users to Google Workspace with zero downtime. We specialize in secure, efficient, and hassle-free migrations tailored to your needs.",
    reviews: [
      {
        name: "OT Sports Sewing Dept.",
        comment: "Raj is a dedicated and diligent coder and has really helped us in the implementation of our google based efficiency systems, thanks Raj!",
        imageSrc: "/assets/clients/OT_Sports_Sewing_Dept.png",
        companyTitle: " "
      },
      {
        name: "James Simmons",
        comment: "Raj did a great job for us in a timely manner and with quality. I would highly recommend hiring him.",
        imageSrc: "/assets/clients/James.png",
        companyTitle: " "
      },
      {
        name: "Paramount Digital",
        comment: "Excellent work would recommend.",
        imageSrc: "/assets/clients/Paramount_Digital.png",
        companyTitle: " "
      },
      {
        name: "TzviAir Office",
        comment: "Amazing work! Fast and accurate. Pleasure to work with!",
        imageSrc: "/assets/clients/TzviAir_Office.png",
        companyTitle: " "
      }
    ]
  }
} as const;
