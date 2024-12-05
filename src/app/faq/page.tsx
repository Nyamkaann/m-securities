// src/app/faq/page.tsx
export default function FAQ() {
    const faqs = [
      { question: "What is this app about?", answer: "This app helps users manage their tasks efficiently." },
      { question: "How can I contact support?", answer: "You can contact support at support@example.com." },
      { question: "Is this app free to use?", answer: "Yes, this app offers a free plan with optional premium features." },
    ];
  
    return (
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">{faq.question}</h2>
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  