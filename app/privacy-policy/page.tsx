import Container from "@/components/Container";

export const metadata = {
  title: "Privacy Policy | Zenvest Wealth",
  description: "Privacy Policy for Zenvest Wealth"
};

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <Container className="max-w-4xl">
        <h1 className="text-4xl font-display font-bold text-navy-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-navy max-w-none space-y-6 text-navy-700 leading-relaxed text-sm">
          <p>
            This privacy policy sets out how Zenvest Wealth uses and protects any information that you share when you use this website. Zenvest Wealth is committed to ensuring that your privacy is protected at all times. Should we ask you to provide certain information by which you can be identified when using this website, you can be assured that it will only be used in accordance with this privacy statement.
          </p>
          <p>
            Zenvest Wealth may change this policy from time to time by updating this page. This policy is effective from June 1, 2018. Zenvest Wealth understands that our relationship is strongly built on trust and faith. In course of using information on this website or availing the services, Zenvest Wealth may become privy to the personal information of its customer including information that is of confidential nature.
          </p>
          <p>
            Zenvest Wealth is strictly committed to protecting the privacy of its Customer and has taken reasonable measures to protect the confidentiality of the customer information and its transmission through World Wide Web. However it shall not be liable in any manner for disclosure of the confidential information in accordance with this Privacy Commitment or in terms of the agreement if any with the Customer or by reasons beyond its control. We may however be required to disclose your personal information to Government, Judicial bodies, and our Regulators or to any person to whom the Firm is under an obligation to make disclosure under the requirements of any law binding on the Firm or any of its branches, if required.
          </p>
          <p>
            <strong>Hyperlink Policy for user</strong> Any hyperlink to other Internet sites is at customers own risk. The contents of which and the accuracy of opinions expressed are not verified, monitored or endorsed by Zenvest Wealth, in any way or manner. Zenvest Wealth is not responsible for the setup of any hyperlink from a third party website to Zenvest Wealth.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">What we collect</h2>
          <p>We may collect the following information:</p>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">Name and contact details</h2>
          <p>
            We may collect personal information directly from you, such as your name, email address, contact details, or other identifiers, when you register an account, make a purchase, or interact with certain features of the application. Your personal information is used to provide you with access to the application's features and functionalities, personalize your experience, and communicate with you about your account or transactions. We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. You have the right to control and manage your personal information within the application. You can update your account details, manage your communication preferences, or exercise your rights under applicable data protection laws. You can also choose to delete your account or request the deletion of certain personal information by contacting us through the provided channels or there is an option in app settings page. 
          </p>
          <p>
            <strong>Collection/Use of image data</strong> When you grant permission, our application may access your device's camera or photo gallery to enable features that involve capturing, uploading. The images you upload or capture within our application may be used for document verification in Video KYC by the application. We do not share your image data with third parties unless required by law or necessary to provide the services you have requested.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">Controlling your personal information</h2>
          <p>
            You may choose to restrict the collection or use of your personal information. If you have previously agreed to us using your personal information, you may change your mind at any time by writing to or emailing us at <strong>zenvestw@gmail.com</strong>. We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so.
          </p>
        </div>
      </Container>
    </div>
  );
}
