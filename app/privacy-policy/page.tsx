import Container from "@/components/Container";

export const metadata = {
  title: "Privacy Policy | Zenvest Wealth",
  description: "Privacy Policy for Zenvest Wealth.",
};

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto prose prose-navy prose-lg">
          <h1 className="text-4xl font-display font-bold text-navy-900 mb-8">Privacy Policy</h1>
          
          <p>
            This privacy policy sets out how Zenvest Wealth uses and protects any information that you share when you use this website. Zenvest Wealth is committed to ensuring that your privacy is protected at all times. Should we ask you to provide certain information by which you can be identified when using this website, you can be assured that it will only be used in accordance with this privacy statement. Zenvest Wealth may change this policy from time to time by updating this page. This policy is effective from July 29, 2026.
          </p>

          <p>
            Zenvest Wealth understands that our relationship is strongly built on trust and faith. In course of using information on this website or availing the services, Zenvest Wealth may become privy to the personal information of its customer including information that is of confidential nature. Zenvest Wealth is strictly committed to protecting the privacy of its Customer and has taken reasonable measures to protect the confidentiality of the customer information and its transmission through World Wide Web. However it shall not be liable in any manner for disclosure of the confidential information in accordance with this Privacy Commitment or in terms of the agreement if any with the Customer or by reasons beyond its control. We may however be required to disclose your personal information to Government, Judicial bodies, and our Regulators or to any person to whom the Firm is under an obligation to make disclosure under the requirements of any law binding on the Firm or any of its branches, if required.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Hyperlink Policy for user</h2>
          <p>
            Any hyperlink to other Internet sites is at customers own risk. The contents of which and the accuracy of opinions expressed are not verified, monitored or endorsed by Zenvest Wealth, in any way or manner. Zenvest Wealth is not responsible for the setup of any hyperlink from a third party website to Zenvest Wealth.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">What we collect</h2>
          <p>We may collect the following information:</p>

          <h3 className="text-xl font-bold text-navy-800 mt-6 mb-3">Name and contact details</h3>
          <p>
            We may collect personal information directly from you, such as your name, email address, contact details, or other identifiers, when you register an account, make a purchase, or interact with certain features of the application. Your personal information is used to provide you with access to the application's features and functionalities, personalize your experience, and communicate with you about your account or transactions. We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. You have the right to control and manage your personal information within the application. You can update your account details, manage your communication preferences, or exercise your rights under applicable data protection laws. You can also choose to delete your account or request the deletion of certain personal information by contacting us through the provided channels or there is an option in app settings page.
          </p>
          
          <h3 className="text-xl font-bold text-navy-800 mt-6 mb-3">Collection/Use of image data</h3>
          <p>
            When you grant permission, our application may access your device's camera or photo gallery to enable features that involve capturing, uploading. The images you upload or capture within our application may be used for document verification in Video KYC by the application. We do not share your image data with third parties unless required by law or necessary to provide the services you have requested.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Use of location data</h2>
          <p>
            We access your location to verifying your identity and granting access to the application's features and functionalities.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Security</h2>
          <p>
            We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Links to other websites</h2>
          <p>
            Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over such third-party websites. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites. You should exercise caution and look at the privacy statement applicable to the website in question.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Controlling your personal information</h2>
          <p>
            If you believe that any of your information with us is incorrect or incomplete, please email us as soon as possible at <a href="mailto:zenvestw@gmail.com" className="text-gold-500 hover:underline">zenvestw@gmail.com</a>. We will promptly correct any information found to be incorrect.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Security certificates</h2>
          <p>
            We fully recognise and understand the security implications of being a service provider with whom people trust their money. There are many safeguards we adopt in this regard some of these are technical, and some are structural. When it comes to data security, our goal is to ensure that:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your data is stored safely and securely passwords are one-way encrypted before being stored in the database for high security.</li>
            <li>All communication with you, or with mutual fund companies and other service providers are encrypted using the highest standards.</li>
            <li>Your data is not shared with anyone, unless you have explicitly requested us to do so to fulfil a transaction request.</li>
          </ul>
          <p>
            To ensure that we achieve these goals, we have a variety of certifications/trust verifications in place for our firm, both from technical and legal/operational perspectives. All our communications are encrypted by 256-bit encryption, and our data is hosted with top-tier hosting service providers. Also, our data is continuously backed up to ensure continuity of operations.
          </p>
        </div>
      </Container>
    </div>
  );
}
