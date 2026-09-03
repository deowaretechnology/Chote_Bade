import type { Metadata } from "next";
import siteConfig from "@/data/siteConfig.json";

export const metadata: Metadata = {
  title: "Terms & Conditions | ChoteBade",
  description:
    "Read the terms and conditions governing the use of the ChoteBade website and our web development, digital product, and automation services.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsAndConditions() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="section">
        <div className="container-page max-w-3xl">
          <span className="eyebrow">Legal</span>
          <h1 className="font-display font-extrabold text-4xl mb-4 leading-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-ink-soft text-[14px] mb-10">Last updated: September 2026</p>

          <div className="flex flex-col gap-8 text-ink-soft text-[15px] leading-relaxed">
            <p>
              These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of the ChoteBade
              website (&ldquo;the Site&rdquo;) and the services we provide (&ldquo;Services&rdquo;).
              By using the Site or engaging our Services, you agree to these Terms. If you do not
              agree, please do not use the Site or engage our Services.
            </p>

            <div>
              <h2 className="font-display font-bold text-xl text-ink mb-3">1. About ChoteBade</h2>
              <p>
                ChoteBade provides websites, digital tools, automation, and related services for
                small businesses. The demos, examples, and illustrative results shown on the Site are
                fictional and for demonstration purposes only, unless clearly labelled as a real case
                study.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink mb-3">2. Use of the Site</h2>
              <p>
                You agree to use the Site only for lawful purposes and in a way that does not
                infringe the rights of, or restrict or inhibit the use and enjoyment of, the Site by
                any third party. You must not attempt to gain unauthorised access to any part of the
                Site or its underlying systems.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink mb-3">3. Enquiries &amp; Project Engagements</h2>
              <p>
                Submitting the contact form, messaging us on WhatsApp, or emailing us does not, by
                itself, create a binding contract for services. A project begins only once both
                parties agree on scope, pricing, and timelines, typically confirmed in writing (email
                or a formal agreement).
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink mb-3">4. Pricing &amp; Payment</h2>
              <p>
                Any pricing shown on the Site (such as the website starting price) is indicative and
                may vary based on project scope, features, and requirements. Final pricing, payment
                schedule, and terms will be confirmed with you before work begins.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink mb-3">5. Intellectual Property</h2>
              <p>
                All content on the Site — including text, graphics, logos, and design — is the
                property of ChoteBade or its licensors and is protected by applicable intellectual
                property laws, unless otherwise stated. For client projects, ownership of final
                deliverables transfers to the client upon full payment, unless agreed otherwise in
                writing.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink mb-3">6. Third-Party Links &amp; Services</h2>
              <p>
                The Site may link to third-party platforms such as WhatsApp or your email client. We
                are not responsible for the content, policies, or practices of any third-party sites
                or services.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink mb-3">7. Limitation of Liability</h2>
              <p>
                The Site and its content are provided on an &ldquo;as is&rdquo; basis. To the fullest
                extent permitted by law, ChoteBade shall not be liable for any indirect, incidental,
                or consequential damages arising from your use of the Site or our Services.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink mb-3">8. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. Continued use of the Site after changes
                are posted constitutes acceptance of the updated Terms.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink mb-3">9. Governing Law</h2>
              <p>
                These Terms are governed by the laws of India, and any disputes shall be subject to
                the jurisdiction of the courts in Kolkata, West Bengal.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink mb-3">10. Contact Us</h2>
              <p>If you have questions about these Terms, contact us at:</p>
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