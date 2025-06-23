"use client"

import Footer from "@/components/footer/Footer";
import Landing from "@/components/page/landing/Landing";
import SmoothScrollRegisterContextProvider from "@/lib/gsap/SmoothScrollRegisterContextProvider";



export default function Home() {
    return (
        <SmoothScrollRegisterContextProvider>
            <Landing />
            <Footer />
        </SmoothScrollRegisterContextProvider>
    );
}
