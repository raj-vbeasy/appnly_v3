export const contactModalContents = {
    title: "Contact Us",
    subtitle: "Get in touch with our migration experts",
    form: {
        personal: {
            title: "Personal & Organization Info:",
            fields: [
                { name: "country", label: "Country:", type: "select", required: true, options: ["United States", "United Kingdom", "Australia", "Others"] },
                { name: "firstName", label: "", type: "text", placeholder: "First Name", required: true },
                { name: "lastName", label: "", type: "text", placeholder: "Last Name", required: true },
                { name: "jobTitle", label: "", type: "text", placeholder: "Job Title", required: false },
                { name: "organization", label: "", type: "text", placeholder: "Organization", required: false },
                { name: "email", label: "", type: "email", placeholder: "Email Address", required: true },
                { name: "phone", label: "", type: "tel", placeholder: "Phone Number", required: false },
                { name: "mailboxes", label: "", type: "text", placeholder: "Mailboxes to Migrate", required: false }
            ]
        },
        inquiry: {
            title: "Migration Inquiry:",
            fields: [
                { name: "inquiryType", label: "Type of Inquiry:", type: "select", required: true, options: ["Consulting & Setup", "Google Workspace Setup", "Microsoft 365 Setup", "User Access Management", "Shared Drive & Permissions", "Admin Console Training"] },
                { name: "migrationFrom", label: "Migration From:", type: "select", required: true, options: ["Gmail", "Outlook", "Microsoft Exchange", "Microsoft 365 (Office 365)", "Zoho Mail", "Yahoo Mail", "ProtonMail", "Zimbra", "Strato", "IONOS", "Rackspace", "cPanel Email", "IMAP (Generic Email Server)", "Other (please specify)"] },
                { name: "migrationTo", label: "Migration To:", type: "select", required: true, options: ["Google Workspace", "Microsoft 365 (Office 365)"] }
            ]
        },
        submitButton: "Submit"
    }
} as const;