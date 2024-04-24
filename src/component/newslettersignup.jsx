import { createSignal } from 'solid-js';

const NewsletterSignup = () => {
  const [email, setEmail] = createSignal('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your newsletter signup logic here
    console.log(`Subscribed email: ${email()}`);
    // Reset the input field after submission
    setEmail('');
  };

  return (
    <div class="bg-gray-100 dark:bg-gray-800 py-12">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl mb-4">Subscribe to Our Newsletter</h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Stay up-to-date with the latest platform news, events, and content by subscribing to our newsletter.
        </p>
        <form onSubmit={handleSubmit} class="flex flex-col sm:flex-row justify-center items-center">
          <input
            type="email"
            class="px-4 py-3 sm:mr-4 mb-4 sm:mb-0 w-full sm:w-auto border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-green-500"
            placeholder="Enter your email address"
            value={email()}
            onInput={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-green-500"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;
