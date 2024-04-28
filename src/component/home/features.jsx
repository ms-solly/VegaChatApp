import { createSignal } from 'solid-js';

function features() {
    return (
        <div class='bg-transparent h-full w-full py-200'>
            <div class="flex flex-wrap justify-center mt-10">

                <div class="p-4 max-w-sm">
                    <div class="flex rounded-lg border-l-4 border-pink-500   h-full dark:bg-gray-800 p-8 flex-col">
                        <div class="flex items-center mb-3 ">
                            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-pink-500 bg-indigo-500 text-white flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <h2 class="text-white dark:text-white text-lg font-medium">Discover Inspiring Vegan Recipes</h2>
                        </div>
                        <div class="flex flex-col justify-between flex-grow">
                            <p class="leading-relaxed text-base text-white dark:text-gray-300">
                                Explore a diverse collection of mouthwatering vegan recipes from around the world. From quick and easy meals to gourmet delights, find the perfect dish to tantalize your taste buds and inspire your culinary journey.
                            </p>
                            <a href="#" class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="p-4 max-w-sm">
                    <div class="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col border-l-4 border-pink-500 ">
                        <div class="flex items-center mb-3">
                            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-pink-500 bg-pink-500 text-white flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <h2 class="text-white dark:text-white text-lg font-medium">Connect with Like-minded Individuals</h2>
                        </div>
                        <div class="flex flex-col justify-between flex-grow">
                            <p class="leading-relaxed text-base text-white dark:text-gray-300">
                                Join a vibrant community of vegans and health-conscious individuals who share your passion for plant-based living. Connect with fellow members, share experiences, and support each other on your journey towards a healthier and more sustainable lifestyle.
                            </p>
                            <a href="#" class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="p-4 max-w-sm">
                    <div class="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col border-l-4 border-pink-500 ">
                        <div class="flex items-center mb-3">
                            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-pink-500 bg-pink-500 text-white flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <h2 class="text-white dark:text-white text-lg font-medium">Personalized Nutrition Guidance</h2>
                        </div>
                        <div class="flex flex-col justify-between flex-grow">
                            <p class="leading-relaxed text-base text-white dark:text-gray-300">
                                Receive personalized nutrition guidance tailored to your dietary preferences and health goals. Whether you're looking to optimize your nutrient intake, manage weight, or address specific health concerns, our expert nutritionists are here to provide personalized recommendations and support.
                            </p>
                            <a href="#" class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default features;
