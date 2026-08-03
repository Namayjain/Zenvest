import Container from "@/components/Container";

export const metadata = {
  title: "Terms & Conditions | Zenvest Wealth",
  description: "Terms and Conditions for Zenvest Wealth"
};

export default function TermsAndConditions() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <Container className="max-w-4xl">
        <h1 className="text-4xl font-display font-bold text-navy-900 mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-navy max-w-none space-y-6 text-navy-700 leading-relaxed text-sm">
          <p>
            When investing through Mutual Fund Distributors (MFDs), investors need to understand the following terms and conditions:
          </p>
          <ul className="space-y-4 list-disc pl-5">
            <li>
              <strong>Net Asset Value (NAV):</strong> The value of mutual fund units is based on the applicable NAV, which fluctuates based on market conditions.
            </li>
            <li>
              <strong>Commissions and Fees:</strong> Distributors may receive commissions (upfront, trail, or otherwise) from Asset Management Companies (AMCs). These should be transparently disclosed to the investor.
            </li>
            <li>
              <strong>Entry and Exit Loads:</strong> Some mutual fund schemes may charge entry (at the time of purchase) or exit loads (at the time of redemption). Investors should be informed about these charges beforehand.
            </li>
            <li>
              <strong>Execution-Only Platform:</strong> MFDs may offer an execution-only platform, meaning they execute transactions without providing investment advice.
            </li>
            <li>
              <strong>KYC Compliance:</strong> Investors must complete the Know Your Customer (KYC) process before investing.
            </li>
            <li>
              <strong>Right to Information:</strong> Investors have the right to receive all relevant information about the mutual fund schemes, including scheme information documents, key information memorandums, and periodic statements.
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
