import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFD]">
      <Navbar />
      <main className="flex-1 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-display)] font-bold text-3xl mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: January 2024
            </p>

            <section className="mb-8">
              <h2 className="font-semibold text-xl mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing or using MobiTrade&apos;s services, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-semibold text-xl mb-4">2. Eligibility</h2>
              <p className="text-muted-foreground mb-4">
                You must be at least 18 years old and capable of forming a binding contract to use our services. 
                By using MobiTrade, you represent and warrant that you meet all eligibility requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-semibold text-xl mb-4">3. Account Registration</h2>
              <p className="text-muted-foreground mb-4">
                To access certain features, you must register for an account. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Promptly update your account information</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-semibold text-xl mb-4">4. Buying and Selling</h2>
              <p className="text-muted-foreground mb-4">
                When using MobiTrade to buy or sell devices:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>You must accurately describe the condition of devices you sell</li>
                <li>You agree to our pricing and inspection process</li>
                <li>All sales are subject to our verification procedures</li>
                <li>You must comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-semibold text-xl mb-4">5. Prohibited Activities</h2>
              <p className="text-muted-foreground mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Sell stolen or counterfeit devices</li>
                <li>Provide false or misleading information</li>
                <li>Interfere with other users&apos; transactions</li>
                <li>Use our services for illegal purposes</li>
                <li>Attempt to circumvent our fees or policies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-semibold text-xl mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                MobiTrade is not liable for any indirect, incidental, special, consequential, or punitive damages 
                resulting from your use of our services. Our total liability shall not exceed the amount 
                you paid to us in the six months preceding the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-semibold text-xl mb-4">7. Changes to Terms</h2>
              <p className="text-muted-foreground mb-4">
                We may modify these terms at any time. We will notify you of significant changes. 
                Your continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-semibold text-xl mb-4">8. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these Terms, please contact us at legal@mobitrade.com.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
