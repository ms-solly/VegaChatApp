import { createSignal } from 'solid-js';
// import logo from '../logo.webp';
import rabbit from '../../images/rabbitt.png';

const message = () => {
    return (
      <>

<div class='sticky'>
      <div class="h-40"></div>
      
      <div class='text-black h-60 bg-transparent static pl-5'> 
      <h1 class='font-black bg-transparent text-left	text-5xl  font-serif drop-shadow-2xl	tracking-wide indent-1	pb-10'>Your digital sanctuary for plant-powered connections.</h1>
      <div>
      <button class="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded-full ">
  Get started
</button>
<button class="bg-white  text-pink-300 font-bold py-2 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded-full border-2	  hover:bg-pink-700 hover:text-white">
  Log in
</button>
      </div>
      </div>
      
           <div className="bg-transparent px-8 py-4 rounded-lg shadow-lg">
      <div class="flex md:flex-row-reverse flex-wrap py-24 z-0">
      <div class="w-full md:w-2/5  p-4 text-center text-gray-700 z-0"><img src={rabbit} class=''></img></div>

  <div class="w-full md:w-3/5 bg-white shadow-inner	rounded-lg	 text-center pt-11 text-gray-200 py-5 p-4 ">

        <div class=' text-left'>

            <div class='font-mono'>       
        
      <h1 className="text-3xl font-bold text-gray-800 mb-4 ">Welcome to Vegachat!🍀</h1>
      <p className="text-lg text-gray-700 mb-6">
        Where compassion meets community! We're not just another social platform — we're a passionate collective of individuals committed to making a difference. Whether you're a vegan, aspiring vegan, vegetarian, or simply someone looking to reduce harm to animals through dietary changes, Vegachat is the platform for you.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Unlike corporate-run social media giants, we prioritize people over profits. We won't sell your data or compromise your values. Instead, we're here to empower you on your journey towards a more compassionate lifestyle.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Vegachat is a space for learning, sharing, and connecting. Whether you're seeking support, advice, or inspiration, our vibrant community is here to welcome you with open arms. Together, we can create a world where every meal is a step towards a better future.
      </p>
      <p className="text-lg text-gray-700">
        So, whether you're taking your first steps towards a plant-based diet or you're a seasoned advocate for animal rights, we invite you to join us. Let's connect, collaborate, and inspire change — one chat at a time. Welcome to Vegachat, where compassion knows no bounds!
      </p></div>
      </div>
    </div> 
    </div>
    </div>
    </div>
    </>
    );
};

export default message;