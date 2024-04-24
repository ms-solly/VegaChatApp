const Footer = () => {
    return (
      <footer class="bg-gray-900 text-white py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 class="text-xl font-semibold mb-4">Stay Connected</h2>
              <p>Follow us on social media to stay updated on the latest news, events, and community highlights.</p>
              <div class="flex space-x-4 mt-4">
                <a href="#" class="text-gray-300 hover:text-white">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12 0a12 12 0 0 1 7.16 20.85v-.01l-1.2 1.2-.04.06c-.02.04-.06.1-.12.17l-.15.12-.17.08c-.16.06-.41.12-.75.16a9.85 9.85 0 0 1-5.06.01c-.32-.04-.57-.1-.74-.16l-.17-.08-.15-.12c-.06-.06-.1-.12-.13-.17l-.04-.06-1.2-1.2-.01-.01A12 12 0 0 1 12 0zm3.45 5.23a.72.72 0 0 0-.76.09 5.3 5.3 0 0 0-4.3-2.15 5.37 5.37 0 0 0-4.3 2.15.71.71 0 0 0-.74-.1 7.11 7.11 0 0 0-2.71 2.71 1.58 1.58 0 0 0-.06 1.3 52.73 52.73 0 0 0 4.18 7.33 7.22 7.22 0 0 0 5.61 2.58 6.74 6.74 0 0 0 2.88-.62c.85-.38 1.59-.89 2.18-1.53s1.06-1.34 1.36-2.15a9.18 9.18 0 0 0 .51-2.71c0-.92-.16-1.81-.46-2.67a6.69 6.69 0 0 0-1.31-2.18 7.2 7.2 0 0 0-1.85-1.52 5.8 5.8 0 0 0-2.23-.51zm-4.56 10.49l-.04.01c-.9.35-1.87.53-2.85.53a9.3 9.3 0 0 1-2.57-.36 4.32 4.32 0 0 1-1.92-1.08 3.96 3.96 0 0 1-1.1-1.85c-.27-.74-.4-1.53-.4-2.33a9.28 9.28 0 0 1 .35-2.41 4.32 4.32 0 0 1 1.08-1.92 4.02 4.02 0 0 1 1.85-1.1 4.53 4.53 0 0 1 2.33-.39c.91.13 1.78.4 2.57.81a6.13 6.13 0 0 1 1.9 1.5 6.56 6.56 0 0 1 1.23 2.11c.27.66.41 1.36.41 2.07 0 .7-.14 1.4-.41 2.07a6.48 6.48 0 0 1-1.23 2.1 6.19 6.19 0 0 1-1.9 1.5z" clip-rule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" class="text-gray-300 hover:text-white">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 5.52 0 10-4.48 10-10 0-5.52-4.48-10-10-10zm2.5 15h-5v-8.75l3.75 2.125-1.75 1-5.25-3v9.625l5.25-3 1.75 1-3.75 2.125z"></path>
                  </svg>
                </a>
                <a href="#" class="text-gray-300 hover:text-white">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.705 8.456c.05 1.151-.256 2.279-.81 3.322-.554 1.042-1.325 1.972-2.278 2.776-.95.805-2.044 1.459-3.234 1.916-1.191.456-2.439.685-3.744.685-1.305 0-2.553-.229-3.744-.685-1.191-.457-2.284-1.111-3.234-1.916-.95-.804-1.72-1.734-2.278-2.776-.554-1.043-.86-2.17-.81-3.322-.05-1.151.256-2.279.81-3.322.558-1.043 1.329-1.972 2.278-2.776.95-.805 2.043-1.459 3.234-1.916 1.191-.457 2.439-.685 3.744-.685 1.305 0 2.553.228 3.744.685 1.191.457 2.284 1.111 3.234 1.916.95.804 1.72 1.734 2.278 2.776.554 1.043.86 2.17.81 3.322zm-3.705-2.456c-1.647 0-3 1.352-3 3s1.353 3 3 3 3-1.352 3-3-1.353-3-3-3zm6.823 9.544c-.081-.147-.177-.283-.281-.405-.104-.122-.215-.23-.335-.322-.121-.092-.25-.168-.388-.233-.138-.065-.284-.12-.435-.163-.152-.043-.307-.065-.467-.065-.344 0-.67.108-.96.32-.289.213-.522.495-.697.849-.174.354-.261.778-.261 1.272v1.164h-1.548v-1.209c0-.283-.031-.556-.093-.816-.062-.26-.157-.501-.285-.723a1.978 1.978 0 0 0-.485-.538c-.192-.138-.412-.249-.663-.332-.251-.083-.523-.125-.816-.125-.407 0-.748.093-1.022.278-.273.186-.498.434-.674.746-.175.313-.262.674-.262 1.083v2.209c0 .14.014.286.043.439.029.153.084.297.163.432.079.135.186.259.322.371.136.112.296.205.479.279.183.074.389.125.618.155.228.031.475.047.74.047.619 0 1.13-.143 1.535-.43.404-.286.723-.66.957-1.121.234-.46.35-.998.35-1.614v-.047h1.548v.05c0 .379-.072.73-.216 1.054z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h2 class="text-xl font-semibold mb-4">Quick Links</h2>
              <ul class="space-y-2">
                <li><a href="#" class="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" class="text-gray-300 hover:text-white">Contact Us</a></li>
                <li><a href="#" class="text-gray-300 hover:text-white">Terms of Service</a></li>
                <li><a href="#" class="text-gray-300 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h2 class="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
              <p>Stay updated on the latest news, events, and special offers by subscribing to our newsletter.</p>
              <form class="mt-4 flex">
                <input type="email" class="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring focus:ring-gray-500" placeholder="Enter your email address" />
                <button type="submit" class="bg-gray-800 text-white px-6 py-2 rounded-r-md hover:bg-gray-700 transition duration-300">Subscribe</button>
              </form>
            </div>
          </div>
          <hr class="mt-8 border-t border-gray-700"/>
          <p class="text-center text-gray-300 mt-4">&copy; 2024 Vegachat. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  