import { Suspense } from "react";
import Footer from "@/components/footer/Footer";
import Privacy from "@/components/privacy/Privacy";

export default function PrivacyPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Privacy />
            <Footer />
        </Suspense>
    );
}