import { createSignal } from "solid-js";
import { onCleanup } from "solid-js";
import { createEffect } from "solid-js";
import { onMount } from "solid-js";

const FeatureHighlights = () => {
  // Define feature highlights
  const features = [
    {
      title: "Veggie Vibes Feed",
      description: "Dive into a feed curated exclusively for vegans, vegetarians, and plant-based enthusiasts. Discover mouthwatering recipes, insightful articles, and inspiring stories from our vibrant community.",
    },
    {
      title: "Recipe Sharing",
      description: "Share your favorite plant-based recipes with fellow foodies and explore a diverse array of culinary creations. From decadent desserts to wholesome meals, there's something for every palate.",
    },
    {
      title: "Health & Wellness Hub",
      description: "Elevate your well-being with expert advice, fitness tips, and mindfulness practices. Connect with health-conscious individuals who prioritize nourishing their bodies and nurturing their minds.",
    },
    {
      title: "Community Connections",
      description: "Forge meaningful connections with like-minded individuals who share your values and passions. Join groups, participate in discussions, and support one another on your journey towards a healthier, more compassionate lifestyle.",
    },
    {
      title: "Exclusive Events",
      description: "Join virtual meetups, workshops, and cooking classes hosted by renowned chefs, nutritionists, and wellness experts. Expand your knowledge, sharpen your skills, and connect with fellow members of our community in real-time.",
    },
    {
      title: "Interactive Challenges",
      description: "Challenge yourself and others to embrace sustainable habits, adopt mindful practices, and explore new culinary experiences. From meatless Mondays to zero-waste initiatives, there's always a new challenge to inspire positive change.",
    },
    {
      title: "Empowering Education",
      description: "Access a wealth of educational resources, articles, and videos to deepen your understanding of veganism, sustainability, and ethical living. Stay informed, stay inspired, and empower yourself to make informed choices.",
    },
    {
      title: "Customizable Profiles",
      description: "Personalize your profile with photos, bio, and interests to showcase your unique personality and passions. Connect with others who resonate with your lifestyle and forge authentic connections based on shared values.",
    },
  ];

  return (
    <div class="container mx-auto py-16 bg-transparent">
      <h1 class="text-3xl font-bold text-center mb-8 text-black-700">Discover Our Features</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div class="bg-white rounded-lg shadow-xl py-6  text-white font-bold px-4  border-b-4 border-r-4 border-pink-700  ">
            <h2 class="text-xl font-semibold mb-4 text-[#fca5a5]">{feature.title}</h2>
            <p class="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default FeatureHighlights;
