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
        content: "From OneDrive to Google Drive, or one Google Drive to another including Shared Drive structure creation."
      },
      {
        imageSrc: "/assets/solutions/google-drive.png",
        title: "New Service: Google Workspace Consultation",
        content: "End-to-end strategic guidance to optimize your Google Workspace environment: setup, organization structure, admin console optimization, security, and policy management."
      }
    ],
    highlight: "Migrate from IMAP / cPanel / GoDaddy / Namecheap / STRATO / IONOS / Others"
  },
  automation: {
    heading: "AUTOMATION SERVICES",
    article: [
      {
        title: "Google Sheets Automation",
        content: "Automate and streamline business operations using custom-built Google Apps Scripts.",
        items: [
          {
            imageSrc: "/assets/svgs/presentation-chart-line.svg",
            title: "Data Syncing & Integration",
            content: "Auto-sync data from other Google Sheets, Forms, or external platforms (CRM, ERP, API)."
          },
          {
            imageSrc: "/assets/svgs/envelope.svg",
            title: "Email Notifications",
            content: "Trigger automatic emails based on due dates, form responses, or changes in data."
          },
          {
            imageSrc: "/assets/svgs/photo.svg",
            title: "PDF Generation",
            content: "Generate and email PDFs of invoices, quotes, reports, or assessments with one click."
          },
          {
            imageSrc: "/assets/svgs/circle-stack.svg",
            title: "Data Validation & Cleanup",
            content: "Automatically detect errors, duplicates, or missing values and alert users."
          },
          {
            imageSrc: "/assets/svgs/window.svg",
            title: "Custom Dashboards",
            content: "Real-time reporting dashboards for sales, attendance, inventory, etc."
          },
          {
            imageSrc: "/assets/svgs/clock.svg",
            title: "Scheduled Backups",
            content: "Daily or weekly backups of sheets to Google Drive or external folders."
          },
          {
            imageSrc: "/assets/svgs/document-chart-bar.svg",
            title: "Sheet-to-Doc",
            content: "Automates the creation of Google Docs by populating templates with data from Google Sheets."
          },
          {
            imageSrc: "/assets/svgs/eye.svg",
            title: "Gmail Parsing",
            content: "Automates the extraction of specific data, like sender details or keywords, from Gmail emails."
          }
        ]
      },
      {
        title: "AppSheet Automation",
        content: "Use AppSheet to build no-code mobile/web apps connected to Google Sheets and automate workflows.",
        items: [
          {
            imageSrc: "/assets/svgs/squares-2x2.svg",
            title: "Approval Workflows",
            content: "Automate leave requests, purchase approvals, or task sign-offs with email triggers."
          },
          {
            imageSrc: "/assets/svgs/presentation-chart-bar.svg",
            title: "Inventory Management",
            content: "Update stock levels, reorder items, and send alerts when thresholds are met."
          },
          {
            imageSrc: "/assets/svgs/calendar-date-range.svg",
            title: "Calendar/Event Integration",
            content: "Sync events with Google Calendar, send reminders, or auto-create tasks."
          },
          {
            imageSrc: "/assets/svgs/viewfinder-circle.svg",
            title: "Photo/Data Capture Apps",
            content: "Mobile apps for on-field staff to capture images, notes, and sync to Sheets instantly."
          },
          {
            imageSrc: "/assets/svgs/tv.svg",
            title: "Client Onboarding",
            content: "Create structured onboarding flows for new clients or employees."
          },
          {
            imageSrc: "/assets/svgs/pencil-square.svg",
            title: "Task Management",
            content: "Assign tasks automatically based on form inputs, roles, or time triggers."
          }
        ]
      },
      {
        title: "Google Apps Script",
        content: "A cloud-based scripting platform for automating and extending Google Workspace applications.",
        items: [
          {
            imageSrc: "/assets/svgs/wrench-screwdriver.svg",
            title: "Automating Google Sheets",
            content: "Create, update, or delete calendar events based on external data or user input."
          },
          {
            imageSrc: "/assets/svgs/information-circle.svg",
            title: "Google Forms Enhancements",
            content: "Automatically send confirmation emails, validate form responses in real-time, and sync data with Sheets."
          },
          {
            imageSrc: "/assets/svgs/document-chart-bar.svg",
            title: "Google Docs Automation",
            content: "Automate document creation for invoices, contracts, or reports."
          },
          {
            imageSrc: "/assets/svgs/calendar-date-range.svg",
            title: "Google Calendar Management",
            content: "Create, update, or delete calendar events based on external data or user inputs."
          }
        ]
      }
    ]
  },
  pricing: {
    heading: "PRICING",
    pricingList: [
      {
        title: "Setup-only",
        content: "Simple automation for your repetitive tasks",
        price: "$20",
        button: {
          type: "hollow",
          text: "Get Started"
        }
      },
      {
        title: "Ongoing Admin",
        content: "Everything you need to run your business for 10x efficiency",
        price: "$100 Best value",
        button: {
          type: "solid",
          text: "Get Started"
        }
      },
      {
        title: "Premium Automation",
        content: "Complex automation systems for large organizations",
        price: "$200",
        button: {
          type: "hollow",
          text: "Get Started"
        }
      }
    ]
  },
  freeTools: {
    heading: "FREE TOOLS",
    tools: [
      {
        hashtag: "#Lead gen",
        name: "Email Health Checker",
        imageSrc: "/assets/svgs/wrench.svg"
      },
      {
        hashtag: "#Lead gen",
        name: "DMARC Lookup",
        imageSrc: "/assets/svgs/shield-check.svg"
      }
    ]
  },
  contact: {
    heading: "CONTACT US",
    form: {
      inquiry: {
        title: "Migration Inquiry:",
        inputs: [
          {
            type: "select",
            name: "Type of Inquiry:",
            values: [
              "Consulting & Setup",
              "Google Workspace Setup",
              "Microsoft 365 Setup",
              "User Access Management",
              "Shared Drive & Permissions",
              "Admin Console Training"
            ]
          },
          {
            type: "select",
            name: "Migration From:",
            values: [
              "Gmail",
              "Outlook",
              "Microsoft Exchange",
              "Microsoft 365 (Office 365)",
              "Strato",
              "IONOS",
              "Rackspace",
              "cPanel Email",
              "IMAP (Generic Email Server)",
              "Other (please specify)"
            ]
          },
          {
            type: "select",
            name: "Migration To:",
            values: ["Google Workspace", "Microsoft 365 (Office 365)"]
          }
        ]
      },
      info: {
        title: "Personal & Organization Info:",
        inputs: [
          {
            type: "select",
            name: "Country:",
            values: ["United States", "United Kingdom", "Australia", "Others"]
          },
          { type: "text", name: "First Name" },
          { type: "text", name: "Last Name" },
          { type: "text", name: "Job Title" },
          { type: "text", name: "Organization" },
          { type: "text", name: "Email Address" },
          { type: "text", name: "Phone Number" },
          { type: "text", name: "Mailboxes to Migrate" }
        ]
      },
      submitButton: "Submit"
    }
  },
  testimonials: {
    heading: "TESTIMONIALS",
    description: "Trusted by 300+ clients, Appnly has migrated 20,000+ users to Google Workspace with zero downtime. We specialize in secure, efficient, and hassle-free migrations tailored to your needs.",
    reviews: [
      {
        name: "OT Sports Sewing Dept.",
        comment: "Raj is a dedicated and diligent coder and has really helped us in the implementation of our Google-based efficiency systems. Thanks Raj!",
        imageSrc: "/assets/clients/OT_Sports_Sewing_Dept.png",
        companyTitle: ""
      },
      {
        name: "James Simmons",
        comment: "Raj did a great job for us in a timely manner and with quality. I would highly recommend hiring him.",
        imageSrc: "/assets/clients/James.png",
        companyTitle: ""
      },
      {
        name: "Paramount Digital",
        comment: "Excellent work, would recommend.",
        imageSrc: "/assets/clients/Paramount_Digital.png",
        companyTitle: ""
      },
      {
        name: "TzviAir Office",
        comment: "Amazing work! Fast and accurate. Pleasure to work with!",
        imageSrc: "/assets/clients/TzviAir_Office.png",
        companyTitle: ""
      }
    ]
  }
} as const;
