import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFD]">
      <Navbar />
      <main className="flex-1 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-display)] font-bold text-3xl mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: January 2024
            </p>

            <section className="mb-8">
              <h2 className="font-semibold text-xl mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect information that you provide directly to us, including when you create an account, 
                fill out a form, or communicate with us. This may include your name, email address, phone number, 
                and device information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-semibold text-xl mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To provide and maintain our services</li>
                <li>To process your transactions</li>
                <li>To communicate with you about your account</li>
                <li>To improve our services and develop new features</li>
                <li>To detect and prevent fraud</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-semibold text-xl mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Service providers who perform services on our behalf</li>
                <li>Law enforcement when required by law</li>
                <li>Business partners with your consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-semibold text-xl mb-4">4. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-semibold text-xl mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-semibold text-xl mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at 
                privacy@mobitrade.com or through our Help Center.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
