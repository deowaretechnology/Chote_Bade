import type { Metadata } from "next";
import siteConfig from "@/data/siteConfig.json";

export const metadata: Metadata = {
  title: "Privacy Policy | ChoteBade",
  description:
    "Read ChoteBade's privacy policy to understand what information we collect, how we use it, and how we protect your data.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="section">
        <div className="container-page max-w-3xl">
          <span className="eyebrow">Legal</span>
          <h1 className="font-display font-extrabold text-4xl mb-4 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-ink-soft text-[14px] mb-10">Last updated: September 2026</p>

          <div className="flex flex-col gap-8 text-ink-soft text-[15px] leading-relaxed">
            <p>
              ChoteBade (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates this website
              (&ldquo;the Site&rdquo;) and provides web development, digital product, and automation
              services for small businesses. This Privacy Policy explains what information we collect
              when you use the Site or contact us, how we use it, and the choices you have.
            </p>

            <div>
              <h2 className="font-display font-bold text-xl text-ink mb-3">1. Information We Collect</h2>
              <p className="mb-3">We collect information in the following ways:</p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>
                  <strong className="text-ink">Information you provide directly</strong> — such as your
                  name, business name, email address, phone number, and project details when you fill
                  out our contact form, message us on WhatsApp, or email us.
                </li>
                <li>
                  <strong className="text-ink">Usage data</strong> — basic, non-identifying information
                  such as pages visited, browser type, and device type, which helps us understand how
                  the Site is used and improve it.
                </li>
                <li>
                  <strong className="text-ink">Communications</strong> — records of correspondence if
                  you contact us by email, WhatsApp, or phone.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink mb-3">2. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>Respond to your enquiries and discuss potential projects.</li>
                <li>Provide, maintain, and improve our services.</li>
                <li>Send you information you&apos;ve requested, such as quotes or project updates.</li>
                <li>Understand how visitors use the Site so we can improve it.</li>
                <li>Comply with legal obligations where applicable.</li>
              </ul>
              <p className="mt-3">We do not sell your personal information to third parties.</p>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink mb-3">3. Sharing of Information</h2>
              <p>
                We do not share your personal information with third parties except: (a) with your
                consent, (b) with service providers who help us operate the Site or deliver our
                services (e.g. hosting, email, or messaging providers), who are only permitted to use
                your information to provide services to us, or (c) where required by law.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink mb-3">4. Cookies &amp; Similar Technologies</h2>
              <p>
                The Site may use basic cookies or similar technologies necessary for it to function
                correctly and to understand aggregate usage patterns. You can control cookies through
                your browser settings; disabling them may affect some Site functionality.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink mb-3">5. Third-Party Services</h2>
              <p>
                Our contact form and chat options may direct you to third-party platforms such as
                WhatsApp or your email client. Your use of those platforms is governed by their own
                privacy policies, which we encourage you to review.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink mb-3">6. Data Retention</h2>
              <p>
                We retain the information you share with us for as long as necessary to respond to
                your enquiry, deliver services, or comply with our legal obligations, after which it
                is deleted or anonymised.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink mb-3">7. Your Rights</h2>
              <p>
                You may request access to, correction of, or deletion of the personal information we
                hold about you by contacting us using the details below. We will respond within a
                reasonable timeframe.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink mb-3">8. Data Security</h2>
              <p>
                We take reasonable technical and organisational measures to protect your information.
                However, no method of transmission over the internet is completely secure, and we
                cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink mb-3">9. Children&apos;s Privacy</h2>
              <p>
                The Site is not directed at children, and we do not knowingly collect personal
                information from children.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink mb-3">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this
                page with an updated &ldquo;Last updated&rdquo; date.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink mb-3">11. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or how we handle your information,
                contact us at:
              </p>
              <ul className="list-disc pl-5 mt-3 flex flex-col gap-1.5">
                <li>Email: {siteConfig.brand.email}</li>
                <li>Phone: {siteConfig.brand.phone1} / {siteConfig.brand.phone2}</li>
                <li>Address: {siteConfig.brand.address}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}