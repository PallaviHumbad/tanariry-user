"use client";
import PolicyLayout from "@/components/layout/PolicyLayout";

export default function Terms() {
  return (
    <PolicyLayout title="Terms of Service">
      <div className="mx-auto space-y-6 text-gray-700">

        {/* Intro */}
        <div className="text-center">
          <p className="text-lg leading-relaxed  mx-auto">
            Welcome to TanaRiri Overseas LLP. By accessing our website, placing an order, or using any of our services, 
            you acknowledge that you have read, understood, and agree to be bound by these Terms of Service in their entirety. 
            These terms constitute a legally binding agreement between you and TanaRiri Overseas LLP. If you do not agree with any part of these terms, 
            you must immediately discontinue use of our website and services.
          </p>
        </div>

        {/* 1. General */}
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-5 text-[#1E3A8A]">1. General Terms</h3>
          <div className="space-y-5 text-sm leading-relaxed">
            <p>
              These Terms of Service apply to all users of the website, including without limitation users who are browsers, vendors, customers, merchants, 
              and/or contributors of content. We reserve the right to update, change, or replace any part of these Terms of Service by posting updates 
              and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access 
              to the website following the posting of any changes constitutes acceptance of those changes.
            </p>
            <p>
              You represent and warrant that you are at least 18 years old or are accessing the site under the supervision of a parent or legal guardian. 
              You must have the legal capacity to enter into contracts. Any use or access by anyone under 18 is strictly prohibited and in violation of these terms.
            </p>
          </div>
        </div>

        {/* 2. Orders & Payment */}
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-5 text-[#1E3A8A]">2. Orders and Payment</h3>
          <div className="space-y-5 text-sm leading-relaxed">
            <p>
              All orders placed through our website are subject to acceptance and availability. We reserve the right to refuse or cancel any order 
              for any reason at any time, including but not limited to product availability, errors in product or pricing information, or suspected fraud. 
              You will be notified via email if your order is canceled or modified.
            </p>
            <p>
              Prices for our products are listed in Indian Rupees (INR) and are inclusive of Goods and Services Tax (GST) as applicable. 
              We reserve the right to modify prices at any time without prior notice. In case of a pricing error, we will inform you before processing 
              the order and give you the option to either proceed with the correct price or cancel the order with a full refund.
            </p>
            <p>
              Payment must be made in full at the time of placing the order. We accept payments via UPI, credit/debit cards, net banking, and select digital wallets. 
              Your payment information is encrypted and processed through secure third-party payment gateways. We do not store your full card details on our servers.
            </p>
          </div>
        </div>

        {/* 3. Shipping & Delivery */}
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-5 text-[#1E3A8A]">3. Shipping and Delivery</h3>
          <div className="space-y-5 text-sm leading-relaxed">
            <p>
              We ship to all pin codes across India and select international destinations. Domestic orders are typically delivered within 5–7 business days 
              from the date of dispatch, while international orders may take 7–15 business days depending on the destination and customs clearance procedures. 
              Delays due to logistics partners, weather conditions, holidays, or customs processes are beyond our control and will be communicated via email.
            </p>
            <p>
              Shipping charges are calculated at checkout based on order value, weight, and destination. Free shipping is available on all prepaid orders above ₹5,000 within India. 
              For international orders, shipping costs include packaging and insurance up to ₹5,000. Additional duties, taxes, or customs fees imposed by the destination country 
              are the sole responsibility of the recipient and must be paid at the time of delivery.
            </p>
            <p>
              Risk of loss and title for items purchased pass to you upon our delivery to the carrier. We are not liable for any loss, damage, or delay 
              that occurs after the package has been handed over to the courier service.
            </p>
          </div>
        </div>

        {/* 4. Returns & Refunds */}
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-5 text-[#1E3A8A]">4. Returns and Refunds</h3>
          <div className="space-y-5 text-sm leading-relaxed">
            <p>
              We offer a 15-day return window for standard products from the date of delivery. Items must be unused, in original condition, 
              with all original packaging, tags, and accessories intact. Customized, engraved, or personalized products are non-returnable unless defective. 
              To initiate a return, please email returns@tanariri.com with your order details and clear photos of the product and packaging.
            </p>
            <p>
              Upon approval, we arrange free pickup from your address within India. Once the item is received and inspected at our warehouse, 
              a full refund will be processed to your original payment method within 5–7 business days. Original shipping charges are non-refundable. 
              For international returns, the customer is responsible for return shipping costs.
            </p>
            <p>
              Partial refunds may be issued if the returned item shows signs of use, missing accessories, or minor wear and tear. 
              We reserve the right to deduct an amount proportional to the diminished value of the product.
            </p>
          </div>
        </div>

        {/* 5. Product Care */}
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-5 text-[#1E3A8A]">5. Product Care and Maintenance</h3>
          <div className="space-y-5 text-sm leading-relaxed">
            <p>
              Our brass and copper utensils are handcrafted and require proper care to maintain their shine and longevity. Wash with mild soap and warm water, 
              dry immediately with a soft cloth, and avoid dishwashers or abrasive cleaners. For natural polishing, use a paste of tamarind and salt or lemon and baking soda. 
              Store in a dry place to prevent tarnishing.
            </p>
            <p>
              Ceramic crockery is microwave and dishwasher safe but should be handled with care to avoid chipping. Use mild detergent and avoid sudden temperature changes 
              (e.g., from freezer to oven). Do not use on direct flame. For colored ceramics, wash separately for the first few uses to prevent color bleeding.
            </p>
            <p>
              Apparel items should be washed according to the care label instructions. Use cold water for colored fabrics, avoid bleach, and dry in shade to prevent fading. 
              Iron on low heat if required. Proper care ensures the product lasts longer and maintains its original quality.
            </p>
          </div>
        </div>

        {/* 6. Warranty & Liability */}
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-5 text-[#1E3A8A]">6. Warranty and Liability</h3>
          <div className="space-y-5 text-sm leading-relaxed">
            <p>
              All products come with a 1-year warranty against manufacturing defects from the date of purchase. This warranty covers issues related to material 
              or workmanship under normal use. It does not cover damage due to misuse, accident, improper care, normal wear and tear, or unauthorized modifications.
            </p>
            <p>
              To claim warranty, email warranty@tanariri.com with your order number, proof of purchase, and photos of the defect. We may require the product 
              to be returned for inspection. Upon validation, we will repair or replace the item at our discretion. Warranty claims must be made within the warranty period.
            </p>
            <p>
              Our liability is limited to the purchase price of the product. We shall not be liable for any indirect, incidental, special, or consequential damages 
              arising out of or in connection with the use of our products or services. We are not responsible for delays caused by events beyond our control, 
              including but not limited to natural disasters, strikes, or government regulations.
            </p>
          </div>
        </div>

        {/* 7. Intellectual Property */}
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-5 text-[#1E3A8A]">7. Intellectual Property</h3>
          <div className="space-y-5 text-sm leading-relaxed">
            <p>
              All content on this website, including but not limited to text, graphics, logos, images, product designs, and software, 
              is the intellectual property of TanaRiri Overseas LLP and is protected by copyright, trademark, and other applicable laws. 
              You may not reproduce, distribute, modify, or create derivative works without our prior written consent.
            </p>
            <p>
              The brand name "TanaRiri" and associated logos are registered trademarks. Unauthorized use, including imitation or misrepresentation, 
              is strictly prohibited and may result in legal action. User-generated content submitted to our platform grants us a non-exclusive, royalty-free license 
              to use, modify, and display such content for promotional purposes.
            </p>
          </div>
        </div>

        {/* 8. Governing Law */}
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-5 text-[#1E3A8A]">8. Governing Law and Dispute Resolution</h3>
          <div className="space-y-5 text-sm leading-relaxed">
            <p>
              These Terms of Service and any separate agreements whereby we provide you services shall be governed by and construed in accordance 
              with the laws of India without regard to its conflict of law provisions.
            </p>
            <p>
              Any dispute, controversy, or claim arising out of or relating to these Terms shall be subject to the exclusive jurisdiction 
              of the courts located in Indore, Madhya Pradesh, India. Both parties agree to attempt resolution through good-faith negotiation 
              before initiating legal proceedings. Arbitration may be considered under the Indian Arbitration and Conciliation Act, 1996.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center pt-8">
          <p className="text-sm mb-4 max-w-2xl mx-auto">
            For any questions, concerns, or feedback regarding these Terms of Service, please reach out to our support team. 
            We are available Monday to Saturday, 10:00 AM to 6:00 PM IST.
          </p>
          <a
            href="/customer-care"
            className="inline-block bg-[#1E3A8A] text-white px-8 py-3 rounded-md font-medium hover:bg-[#172554] transition"
          >
            Contact Support
          </a>
        </div>

        <p className="text-xs text-gray-500 text-center">
          Last updated: November 2025
        </p>
      </div>
    </PolicyLayout>
  );
}