export const footerContents = { 
    logoSrc: "/assets/logo.png",
    contactInfo: {
        title: "Contact Info",
        contacts: ["hello@appnly.com","+91 931384520"]
    },
    discover: {
        title: "Discover",
        links: [
            {
                href: "/about",
                name: "About"
            },
            {
                href: "/blogs",
                name: "Blogs"
            },
        ],
    },
    SocialMedia: {
        title: "Social media",
        images: [
            {
                src: "/assets/social_media/facebook.svg",
                link: "https://www.facebook.com/appnly/"
            },
            {
                src: "/assets/social_media/Vector.svg",
                link: "https://www.instagram.com/appnly/"
            },
            {
                src: "/assets/social_media/whatsapp-brands-solid.svg",
                link: "https://api.whatsapp.com/send/?phone=919313845200"
            }
        ]
    },
    copyRight: {
        termsPagePath: "/terms",
        policyPagePath: "/privacy"
    }

} as const