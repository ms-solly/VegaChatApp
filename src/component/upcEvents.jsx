const UpcomingEvents = () => {
  return (
    <div class="">
    <div class="bg-gray-200 dark:bg-gray-800 py-8 lg:py-12">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl mb-6">Upcoming Events</h2>
        <div class="flex flex-col gap-4">
          <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <div class="p-4">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Webinar: The Power of Plant-Based Nutrition</h3>
              <p class="text-gray-700 dark:text-gray-300 mt-2">Join us for an insightful webinar on the benefits of plant-based nutrition and its impact on health and the environment. Learn from experts in the field and discover practical tips for adopting a more plant-centric lifestyle.</p>
              <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">Date: June 15, 2024</p>
              <p class="text-sm text-gray-500 dark:text-gray-400">Time: 10:00 AM - 12:00 PM (PST)</p>
            </div>
            <div class="bg-gray-100 dark:bg-gray-700 p-4">
              <button class="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition duration-300 ease-in-out">Register Now</button>
            </div>
          </div>
          <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <div class="p-4">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Cooking Class: Delicious Vegan Desserts</h3>
              <p class="text-gray-700 dark:text-gray-300 mt-2">Indulge your sweet tooth with our upcoming cooking class featuring delectable vegan desserts. Learn how to create mouthwatering treats that are cruelty-free, delicious, and perfect for any occasion.</p>
              <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">Date: June 20, 2024</p>
              <p class="text-sm text-gray-500 dark:text-gray-400">Time: 2:00 PM - 4:00 PM (PST)</p>
            </div>
            <div class="bg-gray-100 dark:bg-gray-700 p-4">
              <button class="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 ease-in-out">Register Now</button>
            </div>
          </div>
          <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <div class="p-4">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Workshop: Sustainable Living 101</h3>
              <p class="text-gray-700 dark:text-gray-300 mt-2">Join us for an interactive workshop where we'll explore practical strategies for embracing a more sustainable lifestyle. From reducing waste to eco-friendly shopping tips, this workshop will empower you to make a positive impact on the planet.</p>
              <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">Date: June 25, 2024</p>
              <p class="text-sm text-gray-500 dark:text-gray-400">Time: 6:00 PM - 8:00 PM (PST)</p>
            </div>
            <div class="bg-gray-100 dark:bg-gray-700 p-4">
              <button class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Register Now</button>
            </div>
          </div>
        </div>
      </div>
    </div></div>
  );
};

export default UpcomingEvents;
