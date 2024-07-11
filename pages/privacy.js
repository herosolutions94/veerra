import Link from "next/link";
import React from "react";

const Privacy = () => {
  return (
    <>
      <main>
        <section className="uj_smallbanner">
          <div className="contain">
            <div className="inner">
              <h1>Privacy policy</h1>
            </div>
          </div>
        </section>
        {/* ===== */}
        <section className="uj_policy_detail">
          <div className="contain">
            <div className="inner">
              <p>
                Welcome to veerra! We are committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website{" "}
                <Link href="">veerra.com</Link>, use our platform, or engage
                with our services. By using our platform, you agree to the
                collection and use of information in accordance with this
                policy.
              </p>
              <h4 className="margin_it">Information We Collect</h4>
              <h5>Personal Information</h5>
              <p>
                We collect personal information that you provide to us directly,
                such as when you create an account, update your profile, or
                contact us. This information may include:
              </p>
              <ol>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Address</li>
                <li>Payment information</li>
                <li>
                  Profile information, including photos and biographies for
                  agents
                </li>
              </ol>
              <h5>Non-Personal Information</h5>
              <p>
                We also collect non-personal information automatically when you
                use our platform. This may include:
              </p>
              <ol>
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>
                  Usage data (e.g., pages visited, time spent on the site)
                </li>
              </ol>
              <h4>How We Use Your Information</h4>
              <p>
                We use the information we collect for various purposes,
                including:
              </p>
              <ol>
                <li>To provide and maintain our services</li>
                <li>
                  To process transactions and send you related information
                </li>
                <li>To personalize your experience on our platform</li>
                <li>To improve our website and services</li>
                <li>
                  To communicate with you, including responding to your
                  comments, questions, and requests
                </li>
                <li>
                  To send you promotional materials and other communications
                </li>
                <li>
                  To detect, prevent, and address technical issues and security
                  concerns
                </li>
              </ol>
              <h4>Cookies and Tracking Technologies</h4>
              <p>
                Our platform uses cookies and similar tracking technologies to
                enhance your experience. Cookies are small data files stored on
                your device. We use cookies to:
              </p>
              <ol>
                <li>Remember your login details</li>
                <li>Understand how you use our platform</li>
                <li>Personalize content and advertisements</li>
                <li>Improve our services</li>
              </ol>
              <p>
                You can choose to disable cookies through your browser settings,
                but this may affect your ability to use certain features of our
                platform.
              </p>
              <h4>Sharing Your Information</h4>
              <p>
                We do not sell, trade, or otherwise transfer your personal
                information to outside parties without your consent, except in
                the following circumstances:
              </p>
              <ol>
                <li>
                  To trusted third-party service providers who assist us in
                  operating our platform, conducting our business, or providing
                  services to you
                </li>
                <li>
                  To comply with legal obligations, such as responding to a
                  subpoena or similar legal process
                </li>
                <li>To protect and defend our rights or property</li>
                <li>
                  In connection with a merger, acquisition, or sale of all or a
                  portion of our assets
                </li>
              </ol>
              <h4>Data Security</h4>
              <p>
                We implement a variety of security measures to maintain the
                safety of your personal information. These measures include:
              </p>
              <ol>
                <li>Using SSL encryption for sensitive data</li>
                <li>
                  Restricting access to personal information to authorized
                  personnel only
                </li>
                <li>
                  Regularly updating our security practices to protect against
                  unauthorized access
                </li>
              </ol>
              <h4>Changes to This Privacy Policy</h4>
              <p className="margin_it">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page. You are advised to review this Privacy Policy
                periodically for any changes. Changes to this Privacy Policy are
                effective when they are posted on this page.
              </p>
              <h4>Contact Information</h4>
              <p>
                If you have any questions or concerns about this Privacy Policy,
                please contact us at:
              </p>
              <ul>
                <li>
                  <p>
                    Email: <Link href="">support@example.com</Link>
                  </p>
                </li>
                <li>
                  <p>
                    Phone: <Link href="">(123) 456-7890</Link>
                  </p>
                </li>
                <li>
                  <p>Address: 123 Main Street, Anytown, USA</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Privacy;
