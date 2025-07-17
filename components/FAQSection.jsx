"use client"
import { useState } from "react"

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqs = [
    {
      question: "What is the difference between a secured and an unsecured education loan?",
      answer:
        "A secured education loan requires collateral (property, fixed deposits, etc.) while an unsecured loan does not require any collateral but may have higher interest rates and stricter eligibility criteria.",
    },
    {
      question: "What is the maximum loan amount I can get?",
      answer:
        "The maximum loan amount varies by lender and can range from ₹20 lakhs to ₹1.5 crores depending on the course, university, and your financial profile.",
    },
    {
      question: "Can I apply for education loan without any collateral?",
      answer:
        "Yes, many banks and NBFCs offer unsecured education loans up to ₹40 lakhs without requiring any collateral, subject to eligibility criteria.",
    },
    {
      question: "What are the margin requirements for taking a loan?",
      answer:
        "Margin requirements typically range from 5% to 15% of the total loan amount, depending on the loan amount and the lender's policy.",
    },
    {
      question: "Why does my education loan affect the entire credit score?",
      answer:
        "Education loans are reported to credit bureaus and affect your credit score. Timely repayments improve your score while defaults can negatively impact it.",
    },
    {
      question: "When does the loan repayment start?",
      answer:
        "Loan repayment typically starts 6 months to 1 year after course completion or 6 months after getting a job, whichever is earlier.",
    },
    {
      question: "What are the tax benefits for Education loan?",
      answer:
        "Under Section 80E of the Income Tax Act, you can claim deduction on the interest paid on education loans for up to 8 years.",
    },
    {
      question: "Is there any benefit on an education loan?",
      answer:
        "Yes, education loans offer benefits like tax deductions, lower interest rates compared to personal loans, and flexible repayment options.",
    },
    {
      question: "How long does it take for the sanction and disbursement?",
      answer:
        "Loan sanction typically takes 7-15 days after document submission, and disbursement happens as per university fee payment schedule.",
    },
  ]

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">FAQ</h2>
        <p className="text-center text-gray-600 mb-12">Get your questions answered</p>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question w-full text-left" onClick={() => toggleFAQ(index)}>
                <span className="font-medium text-gray-800 pr-4">{faq.question}</span>
                <i className={`fas ${openFAQ === index ? "fa-minus" : "fa-plus"} text-blue-600 flex-shrink-0`}></i>
              </button>

              {openFAQ === index && (
                <div className="faq-answer animate__animated animate__fadeIn">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
