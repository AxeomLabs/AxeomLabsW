import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: November 16, 2025</p>

          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Agreement to Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using AxeomLabs services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Services Provided</h2>
              <p className="text-muted-foreground mb-3">AxeomLabs provides:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Research services (public and private)</li>
                <li>Robotics development and consulting</li>
                <li>AI research and engineering</li>
                <li>Security solutions and audits</li>
                <li>Educational programs and mentorship</li>
                <li>Paid guidance and coaching</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                <strong className="text-foreground">Important:</strong> We provide research only (not professional advice) for medical and legal fields.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">BadWater Innovation</h2>
              <p className="text-muted-foreground">
                BadWater Innovation is a free service where humans provide guidance. While we strive for accuracy and helpfulness, responses are provided as-is without warranties. BadWater is not a substitute for professional advice in regulated fields.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content, research, and materials provided by AxeomLabs remain our intellectual property unless otherwise agreed in writing. Clients receive appropriate usage rights as specified in individual agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                AxeomLabs shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Modifications</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, contact us at{' '}
                <a href="mailto:founder@axeomlabs.site" className="text-primary hover:underline">
                  founder@axeomlabs.site
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
