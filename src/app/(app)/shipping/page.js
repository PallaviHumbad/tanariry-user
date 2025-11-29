import PolicyLayout from "@/components/layout/PolicyLayout";

export default function Shipping() {
  return (
    <PolicyLayout title="Shipping & Delivery">
      <div className=" mx-auto space-y-10 text-gray-700">

        {/* Intro */}
        <div className="text-center">
          <p className="text-lg leading-relaxed">
            At <strong>TanaRiri Overseas LLP</strong>, we ensure your order reaches you safely and on time. 
            We ship to every pin code in India and to over <strong>15 countries worldwide</strong> using trusted logistics partners.
          </p>
        </div>

        {/* Domestic Shipping */}
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-5 text-[#1E3A8A]">Domestic Shipping (India)</h3>
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              <strong>Standard Delivery:</strong> 5–7 business days from the date of dispatch. 
              This includes order processing (1–3 days) and transit time.
            </p>
            <p>
              <strong>Express Delivery:</strong> 2–3 business days, available in select metro cities. 
              Additional charges: ₹200–₹500 depending on weight and location.
            </p>
            <p>
              <strong>Free Shipping:</strong> Applicable on all prepaid orders above ₹5,000. 
              Automatically applied at checkout.
            </p>
            <p>
              <strong>Courier Partners:</strong> DTDC, Blue Dart, Delhivery, and India Post. 
              We select the best partner based on your pin code for fastest delivery.
            </p>
            <p>
              <strong>Order Tracking:</strong> You will receive a tracking link via <strong>SMS and email</strong> 
              within 24 hours of dispatch. You can track your order on the courier’s official website.
            </p>
            <p>
              <strong>Serviceable Areas:</strong> We deliver to <strong>28,000+ pin codes</strong> across India, 
              including remote villages and Tier-3 towns.
            </p>
          </div>
        </div>

        {/* International Shipping */}
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-5 text-[#1E3A8A]">International Shipping</h3>
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              <strong>Delivery Timeline:</strong> 7–15 business days depending on destination country and customs clearance.
            </p>
            <p>
              <strong>Supported Countries:</strong> United States, United Kingdom, United Arab Emirates, Canada, 
              Germany, Australia, Singapore, Saudi Arabia, Qatar, New Zealand, France, Netherlands, Malaysia, 
              and select others.
            </p>
            <p>
              <strong>Shipping Cost:</strong> Calculated at checkout based on order weight, dimensions, and destination. 
              Includes packaging and insurance up to ₹5,000.
            </p>
            <p>
              <strong>Courier Partners:</strong> DHL, FedEx, and India Post (for lightweight items under 2kg).
            </p>
            <p>
              <strong>Customs & Duties:</strong> All import duties, taxes, and customs fees are the responsibility of the recipient. 
              These are not included in our shipping charges and must be paid at the time of delivery.
            </p>
            <p>
              <strong>Documentation:</strong> We provide all required export documents including commercial invoice, 
              packing list, and certificate of origin (if needed).
            </p>
          </div>
        </div>

        {/* Processing & Packaging */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-5 text-[#1E3A8A]">Order Processing & Packaging</h3>
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              <strong>Processing Time:</strong> 3–7 business days from the date of order confirmation. 
              Custom or engraved items may take up to 10 days.
            </p>
            <p>
              <strong>Quality Check:</strong> Every item is inspected for defects before packing.
            </p>
            <p>
              <strong>Packaging Standards:</strong> 
              All fragile items (ceramic crockery, brass utensils, glassware) are packed with:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Double-layer bubble wrap</li>
              <li>Thermocol padding inside the box</li>
              <li>Wooden crate for high-value or bulk orders</li>
              <li>“Fragile” and “Handle with Care” stickers</li>
              <li>Tamper-proof sealing tape</li>
            </ul>
            <p>
              <strong>Environment-Friendly:</strong> We use recyclable cardboard and minimal plastic.
            </p>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg text-sm">
          <h4 className="font-semibold text-amber-800 mb-2">Important Notes</h4>
          <ul className="space-y-2 text-amber-900">
            <li>• We are not liable for delays or damages <strong>after the package is handed over to the courier</strong>.</li>
            <li>• However, we assist with insurance claims and courier disputes if required.</li>
            <li>• Delays due to weather, holidays, strikes, or customs will be communicated via email.</li>
            <li>• Orders placed after 2 PM IST may be processed the next business day.</li>
            <li>• We do not ship to PO Boxes for international orders.</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center pt-6">
          <a
            href="/customer-care"
            className="inline-block bg-[#1E3A8A] text-white px-8 py-3 rounded-md font-medium hover:bg-[#172554] transition-shadow"
          >
            Have Questions? Contact Support
          </a>
        </div>
      </div>
    </PolicyLayout>
  );
}