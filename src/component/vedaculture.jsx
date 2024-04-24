const VedaCulture = () => {
  const paragraphs = [
    {
      title: "Embracing Vedas & Indian Culture",
      content: "Journey with us as we delve into the timeless wisdom of the Vedas and the rich tapestry of India's cultural heritage."
    },
    {
      title: "Ahimsa: Embracing Compassion",
      content: "Explore the profound concept of Ahimsa, rooted in non-violence and compassion towards all living beings. Let us cultivate kindness and respect in every interaction."
    },
    {
      title: "Vasudhaiva Kutumbakam: Unity in Diversity",
      content: "Discover the beauty of Vasudhaiva Kutumbakam, the ancient Indian philosophy that celebrates unity in diversity. Join us in fostering a sense of kinship and interconnectedness."
    },
    {
      title: "Guiding Your Journey",
      content: "Let the wisdom of the Vedas and the spirit of Indian culture guide your journey towards a more compassionate and harmonious existence. Join us in embracing Ahimsa and celebrating the oneness of humanity."
    }
  ];

  return (
 <div class="max-w-7xl mx-auto px-4  text-center py-12 sm:px-6 lg:px-8 ">       
      <h2 class="text-3xl font-extrabold text-gray-900 dark:text-black sm:text-4xl ">Our culture</h2> 
      <p class="mt-4 text-lg text-gray-500 dark:text-gray-300">Journey with us as we delve into the timeless wisdom of the Vedas and the rich tapestry of India's cultural heritage.</p>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div class="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 ">
            
          {paragraphs.map((paragraph, index) => (
            <div class="text-center rounded-xl	 dark:bg-gray-800  p-8" key={index}>       
              <div class="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md bg-white dark:bg-gray-900">
                {paragraph.title && (      
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {paragraph.title}
                  </h3>
                )}
                <p class="text-gray-500 dark:text-gray-300">
                  {paragraph.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VedaCulture;
