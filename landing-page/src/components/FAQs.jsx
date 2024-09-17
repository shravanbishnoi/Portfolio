import React, { useState } from 'react';
import '../styles/FAQs.css';

const FAQs = () => {
  const faqData = [
    {
      question: "How long does it take to build a website?",
      answer: "1 day",
    },
    {
      question: "How much a project cost",
      answer: "10$",
    },
    {
      question: "What services do you offer?",
      answer: "We build a website",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we offer worldwide shipping. Shipping rates and delivery times may vary depending on the destination.",
    },
    {
      question: "How can I contact support?",
      answer: "You can reach our support team by emailing us at support@example.com or by calling our customer service hotline at 1-800-123-456.",
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faqs-container">
      <h2 className="faqs-title">FAQs</h2>
      <div className="faqs-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
