import { createSignal } from 'solid-js';

const FaqSection = () => {
  const faqs = [
    {
      question: "How do I get started on Vegachat?",
      answer: "To get started on Vegachat, simply sign up for an account using your email address. Once registered, you can explore our community, join discussions, and connect with like-minded individuals.",
    },
    {
      question: "Is Vegachat only for vegans?",
      answer: "While Vegachat is designed with vegans in mind, our platform welcomes individuals from all dietary backgrounds. Whether you're a vegan, vegetarian, flexitarian, or simply curious about plant-based living, you'll find a supportive community here.",
    },
    {
      question: "How can I contribute to the Vegachat community?",
      answer: "There are many ways to contribute to the Vegachat community! You can share your favorite vegan recipes, participate in discussions, join interest groups, or even organize virtual events. Your voice and contributions are valued!",
    },
    {
      question: "Is my data secure on Vegachat?",
      answer: "Yes, we take the security and privacy of our users seriously. We use encryption and best practices to protect your data, and we never sell or share your personal information with third parties.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = createSignal(-1);

  const toggleAccordion = (index) => {
    setExpandedIndex(index === expandedIndex() ? -1 : index);
  };

  return (
    <div class="bg-gray-100 dark:bg-gray-800 py-8 lg:py-12">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl mb-6">FAQs</h2>
        <div class="space-y-4 lg:space-y-6">
          {faqs.map((faq, index) => (
            <div class="border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden">
              <button
                class="flex justify-between items-center w-full p-4 focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span class="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</span>
                <svg
                  class={`w-6 h-6 transition-transform transform ${
                    expandedIndex() === index ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d={expandedIndex() === index ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
                  />
                </svg>
              </button>
              {expandedIndex() === index && (
                <div class="p-4 bg-white dark:bg-gray-900">
                  <p class="text-gray-700 dark:text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;