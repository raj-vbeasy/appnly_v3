import type { Metadata } from "next";
import "../style/globals.css";
import GsapPluginRegisterWrapper from "@/lib/gsap/GsapPluginRegisterWrapper";
import FixedHeader from "@/components/header/FixedHeader";

import { metadataTags } from "@/metadatas/metadata";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import PopupContextProvider from "@/components/popup/PopupContextProvider";

export const metadata: Metadata = metadataTags;

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode; 
}>) {
    return (
        <html lang={"en"} >
            <GoogleAnalytics gaId="G-SKV1MB80FS" />
            <GoogleTagManager gtmId="GTM-5HCTZQDG" />
            <body>

                <PopupContextProvider>
                    <FixedHeader />
                </PopupContextProvider>

                <GsapPluginRegisterWrapper>
                    {children}
                </GsapPluginRegisterWrapper>

                

            </body>
        </html>
    );
}
