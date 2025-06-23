export const aboutContents = {
    title: "ABOUT US",
    company: {
        description: "Appnly is a trusted Google Workspace migration partner with 300+ completed projects and over 20,000 users successfully migrated — all with zero downtime and no data loss. Whether you're transitioning from Outlook, cPanel, or legacy platforms, we ensure every migration is smooth, secure, and uninterrupted.",
        services: "Our services include end-to-end email and app migrations, DNS and authentication setup (SPF, DKIM, DMARC), AppSheet automation, and Google Sheets integration. Whether you're a small business or scaling enterprise, Appnly delivers tailored solutions that simplify complexity and keep your operations running seamlessly.",
        logoText: "A"
    },
    faq: {
        title: "GENERAL FAQS",
        questions: [
            {
                number: "1.",
                question: "Which email systems do you support for migration?",
                answer: "We support migration from all major email systems including Gmail, Outlook, Microsoft Exchange, Microsoft 365 (Office 365), Zoho Mail, Yahoo Mail, ProtonMail, Zimbra, Strato, IONOS, Rackspace, cPanel Email, IMAP servers, and many others. Our platform is designed to handle virtually any email system migration to Google Workspace."
            },
            {
                number: "2.",
                question: "What if my email provider isn't listed—can I still migrate?",
                answer: "Yes, absolutely! Even if your email provider isn't specifically listed, we can still migrate your data. Our migration tools support IMAP and other standard protocols, which means we can connect to virtually any email system. Contact us and we'll assess your specific setup and provide a customized migration solution."
            },
            {
                number: "3.",
                question: "What types of data can be transferred during migration?",
                answer: "We can migrate all types of data including emails, contacts, calendars, tasks, notes, folder structures, labels, and file attachments. We also handle Google Drive migrations, shared drives, and can preserve folder hierarchies and permissions. Our migration process ensures complete data integrity throughout the transfer."
            },
            {
                number: "4.",
                question: "Is Appnly compatible with both Windows and Mac environments?",
                answer: "Yes, our migration services are platform-independent and work seamlessly with both Windows and Mac environments. Since we handle server-to-server migrations, your local operating system doesn't affect the migration process. We support all modern versions of Windows and macOS."
            },
            {
                number: "5.",
                question: "Which Windows versions are compatible with your solutions?",
                answer: "We support all modern Windows versions including Windows 10, Windows 11, and Windows Server 2016/2019/2022. For older systems like Windows 8.1 or Windows Server 2012, we can still provide migration services, though we recommend updating to a newer version for optimal security and performance."
            },
            {
                number: "6.",
                question: "What features are available in the Free Trial version?",
                answer: "Our Free Trial includes access to essential tools to test email connectivity, sample migration, and email health checks. It's a great way to experience our interface and performance before committing. You can test the migration of a limited number of emails and see how our platform works with your specific email system."
            }
        ]
    }
} as const;