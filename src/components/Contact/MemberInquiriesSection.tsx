export default function MemberInquiriesSection() {
  const faqs = [
    {
      question: "How flexible are membership transitions?",
      answer: "We understand that professional needs evolve. Membership adjustments can be made seamlessly, with changes taking effect at your next billing cycle. Any differences are carefully prorated to ensure fairness and transparency."
    },
    {
      question: "What commitment structure do you offer?",
      answer: "We honor your autonomy with month-to-month arrangements that require no long-term commitments. Should your circumstances change, a respectful 30-day notice allows for graceful transition."
    },
    {
      question: "What is your guest policy?",
      answer: "We welcome your distinguished guests. Experience Pass holders may host one guest, Professional members may invite up to three guests, while Executive and Enterprise members enjoy unlimited guest privileges."
    }
  ];

  return (
    <section className="py-20 px-8 ">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Member Inquiries
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Thoughtful answers to the questions most valued by our distinguished community
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-12">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-8 last:border-b-0">
              <h3 className="text-xl font-medium text-gray-800 mb-4 leading-relaxed">
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
}