"use client";

import PolicyLayout from "@/components/layout/PolicyLayout";

export default function Returns() {
  return (
    <PolicyLayout title="Refunds & Returns">
      <div className="mx-auto space-y-10 text-gray-700">

        {/* Intro */}
        <div className="text-center">
          <p className="text-lg leading-relaxed">
            At <strong>TanaRiri Overseas LLP</strong>, your satisfaction is our top priority. 
            We offer a transparent and customer-friendly return policy to ensure you shop with confidence. 
            If your product doesn’t meet your expectations, return it within <strong>15 days</strong> of delivery.
          </p>
        </div>

        {/* Return Window */}
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-5 text-[#1E3A8A]">Return Window</h3>
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              <strong>Standard Products:</strong> Eligible for return within <strong>15 calendar days</strong> from the date of delivery.
            </p>
            <p>
              <strong>Customized or Engraved Items:</strong> Non-returnable unless received damaged, defective, or incorrect.
            </p>
            <p>
              <strong>Used, Washed, or Altered Items:</strong> Strictly not accepted under any circumstances.
            </p>
            <p>
              <strong>Return Initiation Deadline:</strong> Must be reported within the 15-day window. 
              Requests made after this period will not be entertained.
            </p>
            <p>
              <strong>Delivery Date Proof:</strong> The delivery date on the courier’s tracking page is considered final.
            </p>
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-6 text-[#1E3A8A]">Eligibility Criteria</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm leading-relaxed">
            {/* LEFT: Eligible Items */}
            <div>
              <p className="font-semibold text-green-700 mb-3">Items Eligible for Return:</p>
              <ul className="list-disc list-inside ml-4 space-y-1.5">
                <li>Product is unused and in the same condition as received</li>
                <li>Original packaging, boxes, and polybags are intact</li>
                <li>All original tags, stickers, and labels are attached</li>
                <li>Free gifts, accessories, or combo items are returned together</li>
                <li>Original invoice (physical or digital) is provided</li>
                <li>Product is not from the “Non-Returnable” list</li>
                <li>No signs of wear, tear, scratches, or odor</li>
                <li>Security seals, hygiene stickers, or tamper-proof packaging are undamaged</li>
              </ul>
            </div>

            {/* RIGHT: Not Eligible */}
            <div>
              <p className="font-semibold text-red-700 mb-3">Items Not Eligible for Return:</p>
              <ul className="list-disc list-inside ml-4 space-y-1.5">
                <li>Customized, engraved, or personalized products</li>
                <li>Brass, copper, or steel utensils used for cooking or serving</li>
                <li>Ceramic crockery, plates, or bowls that have been washed</li>
                <li>Items missing original packaging or tags</li>
                <li>Gift-wrapped items (unless defective or damaged)</li>
                <li>Products marked as “Final Sale” or “Non-Returnable”</li>
                <li>Innerwear, socks, or personal hygiene-related items</li>
                <li>Items with signs of wear, scratches, or odor</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step-by-Step Return Process */}
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-5 text-[#1E3A8A]">Step-by-Step Return Process</h3>
          <ol className="space-y-5 text-sm leading-relaxed list-decimal list-inside ml-4">
            <li>
              <strong>Initiate Return Request:</strong><br />
              Send an email to <strong>returns@tanariri.com</strong> with:
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>Order ID (e.g., #TN12345)</li>
                <li>Product name and quantity</li>
                <li>Reason for return (e.g., size issue, color mismatch)</li>
                <li>3–5 clear photos of the product, packaging, and any defect</li>
                <li>Your preferred resolution: Refund or Replacement</li>
              </ul>
            </li>
            <li>
              <strong>Approval & Pickup Scheduling:</strong><br />
              Our team reviews your request within <strong>24 working hours</strong>. 
              If approved, we schedule a <strong>free pickup</strong> from your address (India only).
            </li>
            <li>
              <strong>Pack the Item Securely:</strong><br />
              Use the original packaging. Include invoice and all accessories. 
              Write the <strong>RMA number</strong> (provided in approval email) on the box.
            </li>
            <li>
              <strong>Pickup & Inspection:</strong><br />
              Courier collects the package. Once received at our warehouse, 
              we inspect within <strong>48 hours</strong>.
            </li>
            <li>
              <strong>Refund or Replacement:</strong><br />
              If approved, refund is processed within <strong>5–7 business days</strong>. 
              Replacement shipped within <strong>3–5 days</strong> of approval.
            </li>
          </ol>
        </div>

        {/* Refund Policy + Non-Returnable + Special Cases - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT COLUMN */}
          <div className="space-y-8">

            {/* Refund Policy */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-5 text-[#1E3A8A]">Refund Policy</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  <strong>Refund Method:</strong> Credited to the <strong>original payment source</strong> 
                  (UPI, Credit/Debit Card, Net Banking, Wallet, or Bank Transfer).
                </p>
                <p>
                  <strong>Processing Time:</strong> 5–7 business days after successful quality check at our warehouse.
                </p>
                <p>
                  <strong>Original Shipping Charges:</strong> Non-refundable in all cases.
                </p>
                <p>
                  <strong>Return Shipping (India):</strong> Free pickup for approved returns. No cost to customer.
                </p>
                <p>
                  <strong>International Returns:</strong> Customer is responsible for return shipping cost. 
                  Refund issued only after item is received and inspected in India.
                </p>
                <p>
                  <strong>Defective/Damaged/Wrong Item:</strong> 
                  Full refund including original shipping + free return pickup. 
                  Replacement offered if stock is available.
                </p>

                {/* FIXED: <ul> OUTSIDE <p> */}
                <p>
                  <strong>Partial Refunds:</strong> Applied if:
                </p>
                <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                  <li>Product is used but not damaged</li>
                  <li>Missing accessories or packaging</li>
                  <li>Minor wear and tear</li>
                </ul>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">

            {/* Non-Returnable Items */}
            <div className="bg-amber-50 border border-amber-200 p-10 rounded-lg text-sm">
              <h4 className="font-semibold text-amber-800 mb-3">Non-Returnable Items (Final Sale)</h4>
              <ul className="space-y-1 text-amber-900">
                <li>• All customized, engraved, or monogrammed products</li>
                <li>• Brass, copper, or steel utensils used for cooking or storage</li>
                <li>• Ceramic crockery, bowls, or plates that have been washed</li>
                <li>• Innerwear, undergarments, or personal hygiene items</li>
                <li>• Gift cards, vouchers, or digital products</li>
                <li>• Items explicitly marked as “Non-Returnable” on product page</li>
                <li>• Products with removed or damaged security seals</li>
              </ul>
            </div>

            {/* Special Cases */}
            <div className="bg-blue-50 border border-blue-200 p-9 rounded-lg text-sm">
              <h4 className="font-semibold text-blue-800 mb-2">Special Cases</h4>
              <ul className="space-y-2 text-blue-900">
                <li><strong>Wrong Item Received:</strong> Full refund + free return + replacement (if available)</li>
                <li><strong>Damaged on Arrival:</strong> Report within 48 hours with photos. Free return + full refund</li>
                <li><strong>Size Exchange:</strong> Available for apparel only. Customer pays return shipping</li>
                <li><strong>Gift Returns:</strong> Refund issued to original purchaser only</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Contact & Support */}
        <div className="text-center pt-8">
          <p className="text-sm mb-4">
            Questions about returns? Our support team is available <strong>Mon–Sat, 10 AM – 6 PM IST</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:returns@tanariri.com"
              className="inline-block bg-[#1E3A8A] text-white px-8 py-3 rounded-md font-medium hover:bg-[#172554] transition-shadow"
            >
              Email: returns@tanariri.com
            </a>
            <a
              href="/customer-care"
              className="inline-block text-[#1E3A8A] px-8 py-3 rounded-md font-medium hover:bg-[#1E3A8A] hover:text-white transition"
            >
              Contact Support
            </a>
          </div>
        </div>

        {/* Last Updated */}
        <p className="text-xs text-gray-500 text-center">
          Last updated: November 2025
        </p>
      </div>
    </PolicyLayout>
  );
}