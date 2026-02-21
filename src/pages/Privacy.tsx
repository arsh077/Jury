export function Privacy() {
  return (
    <div className="py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-serif font-bold text-white mb-8">Privacy Policy</h1>
        <div className="w-24 h-1 bg-gold mb-12"></div>
        
        <div className="prose prose-lg max-w-none text-gray-300 space-y-8">
          <section>
            <h2 className="text-2xl font-serif font-bold text-gold mb-4">1. Introduction</h2>
            <p>
              JurySolve ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
              how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-gold mb-4">2. Information We Collect</h2>
            <p>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fill out a contact form</li>
              <li>Subscribe to our newsletter</li>
              <li>Request a quote or consultation</li>
              <li>Communicate with us via email or phone</li>
            </ul>
            <p className="mt-4">
              This information may include your name, email address, phone number, and any other details you provide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-gold mb-4">3. How We Use Your Information</h2>
            <p>
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and provide legal services</li>
              <li>Send updates, newsletters, and marketing communications</li>
              <li>Improve our website and user experience</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-gold mb-4">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data 
              against unauthorized access, loss, or alteration. However, no method of transmission over 
              the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-gold mb-4">5. Third-Party Disclosure</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to outside parties 
              except as required by law or to provide the services you have requested.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-gold mb-4">6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. To exercise 
              these rights, please contact us at info@jurysolve.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-gold mb-4">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this 
              page with an updated effective date.
            </p>
          </section>

          <p className="text-sm text-gray-400 mt-12">
            Last updated: February 2024
          </p>
        </div>
      </div>
    </div>
  );
}
