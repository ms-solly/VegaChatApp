import { createSignal, createEffect } from "solid-js";

const FullScreenEmojiComponent = () => {
  const [emojis, setEmojis] = createSignal([]);

  // Function to check if two emojis overlap
  const emojisOverlap = (emoji1, emoji2) => {
    const distance = Math.sqrt(Math.pow(emoji1.top - emoji2.top, 2) + Math.pow(emoji1.left - emoji2.left, 2));
    return distance < 50; // Radius for emojis to not overlap, adjust as needed
  };

  // Function to generate random emojis without overlapping
  const generateEmojis = () => {
    const emojiList = ["😀", "😎", "😊", "🤖", "🚀", "🎉", "💡", "🌟","🍏", "🥑", "🥦", "🥕", "🌽", "🍆","🍇", "🍓", "🥥", "🍅", "🍍", "🥭", "🥬", "🍉", "🍊", "🍋", "🍌", "🍒","🍐", "🍎", "🥔", "🍟", "🍕", "🥪", "🌮", "🥗", "🥘", "🍝", "🍜", "🍲", "🍛", "🍱", "🍣", "🍔", "🍕", "🍩", "🍪", "🎂", "🍰", "🧁", "🥧", "🍨", "🍦", "🍧", "🍫", "🍬", "🍭", "🍮", "🍯", "☕", "🍵", "🥤", "🍹",  "🍷", "🥃", "🍸", "🍴", "🍽️", "🥄", "🔪", "🥢","🥄", "🥢", "🥡","😎","😀","🤓","👻","🐯","🦁","🐱","🐺","🐨","🦝","🐰","🦊","🦒","🕊","🦚","🐣","🐥","🎶"];
    const newEmojis = [];

    for (let i = 0; i < 100; i += 1) {
      const emoji = emojiList[Math.floor(Math.random() * emojiList.length)];
      let nextEmoji = undefined;
      for (let attempt = 0; attempt < 20; attempt += 1) {
        const origin = {
          top: Math.random() * window.innerHeight,
          left: Math.random() * window.innerWidth,
        };
        if (newEmojis.some((existingEmoji) => emojisOverlap(existingEmoji, origin)))
          continue; // try another origin
    
        // this is a keeper
        nextEmoji = { emoji, ...origin };
        break;
      }
    
      if (nextEmoji) newEmojis.push(nextEmoji);
      else break; // it's time to stop trying
    }
    return newEmojis;
  };

  // Effect to generate emojis on component mount
  createEffect(() => {
    setEmojis(generateEmojis());

    // Regenerate emojis on window resize
    const handleResize = () => {
      setEmojis(generateEmojis());
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div class="fixed inset-0 z-[-1] pointer-events-none" style={{ filter: "grayscale(100%)" }}>
      {emojis().map((emojiObj, index) => (
        <span class="absolute" style={{ top: emojiObj.top + "px", left: emojiObj.left + "px", fontSize: "24px"}} key={index}>
          {emojiObj.emoji}
        </span>
      ))}
    </div>
  );
};

export default FullScreenEmojiComponent;
