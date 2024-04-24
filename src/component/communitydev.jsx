import dev1Img from '../images/rabit.webp';
import dev2Img from '../images/exercise.webp';
import dev3Img from '../images/rabbitt.png';

const CommunityDevs = () => {
  return (
    <div class="bg-white dark:bg-gray-800 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Meet Our Team
          </h2>
          <p class="mt-4 text-lg text-gray-500 dark:text-gray-300">
            The brilliant minds behind Vegachat
          </p>
        </div>
        <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div class="flex flex-col items-center space-y-4 bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
            <img class="h-40 w-40 rounded-full" src={dev1Img} alt="Developer 1" />
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">khdoos-sisso</h3>
            <p class="text-gray-500 dark:text-gray-300">Backend Engineer</p>
          </div>
          <div class="flex flex-col items-center space-y-4 bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
            <img class="h-40 w-40 rounded-full" src={dev2Img} alt="Developer 2" />
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Khdoos dida</h3>
            <p class="text-gray-500 dark:text-gray-300">UX/UI Designer</p>
          </div>
          <div class="flex flex-col items-center space-y-4 bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
            <img class="h-40 w-40 rounded-full" src={dev3Img} alt="Developer 3" />
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Ms solly</h3>
            <p class="text-gray-500 dark:text-gray-300">Developer (Role TBD)</p>
          </div>
        </div>
      </div>
      <div class="mt-16 text-center bg-gradient-to-r from-[#c0392b] to-[#8e44ad] py-12 px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          Sprout Your Voice
        </h2>
        <p class="mt-4 text-lg text-white py-5">
          Dive into Vegachat, where fresh ideas blossom and conversations flourish. Join our budding community of like-minded souls, where every voice has the power to plant seeds of change. From budding vegans to seasoned activists, discover a space where passion meets purpose, and where every interaction cultivates a greener, more compassionate world. Join us in sowing the seeds of a brighter tomorrow, one chat at a time. 🌱🌍
        </p>
        <button class="bg-white text-pink-500 py-2 px-6 rounded-full shadow-md hover:bg-green-900 hover:text-white transition duration-300 ease-in-out border-l-4 border-b-4 border-green-600 hover:border-green-800">Get Started</button>
      </div>
    </div>
  );
};

export default CommunityDevs;
