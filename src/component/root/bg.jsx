import { createSignal, createEffect } from "solid-js";

const FullScreenEmojiComponent = () => {
  // Array of emojis to display
  const emojis = ["😀", "😎", "😊", "🤖", "🚀", "🎉", "💡", "🌟", "🍏", "🥑", "🥦", "🥕", "🌽", "🍆", "🍇", "🍓", "🥥", "🍅", "🍍", "🥭", "🥬", "🍉", "🍊", "🍋", "🍌", "🍒", "🍐", "🍎", "🥔", "🍟", "🍕", "🥪", "🌮", "🥗", "🥘", "🍝", "🍜", "🍲", "🍛", "🍱", "🍣", "🍔", "🍕", "🍩", "🍪", "🎂", "🍰", "🧁", "🥧", "🍨", "🍦", "🍧", "🍫", "🍬", "🍭", "🍮", "🍯", "☕", "🍵", "🥤", "🍹", "🍷", "🥃", "🍸", "🍴", "🍽️", "🥄", "🔪", "🥢", "🥄", "🥢", "🥡", "😎", "😀", "🤓", "👻", "🐯", "🦁", "🐱", "🐺", "🐨", "🦝", "🐰", "🦊", "🦒", "🕊", "🦚", "🐣", "🐥", "🎶"];

  // Function to calculate positions of emojis in a staggered pattern
  const calculateGridPositions = (emojis) => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const emojiSize = 50; // Size of emojis in pixels
    const cols = Math.floor(windowWidth / (emojiSize + 70)); // Adjust the column count based on window width and spacing
    const rows = Math.ceil(emojis.length / cols);
    const positions = [];

    const verticalSpacing = windowHeight / rows;
    const horizontalSpacing = windowWidth / cols;

    // Calculate gap factor based on window dimensions and zoom level
    const gapFactor = windowWidth > 768 ? 2 : 4; // Default gap factor
    const zoomLevel = window.devicePixelRatio; // Get current zoom level

    // Adjust gap factor based on zoom level
    const adjustedGapFactor = gapFactor * zoomLevel;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const index = (i * cols + j) % emojis.length; // Repeat the emojis array
        if (i % 2 === 0) {
          positions.push({ top: i * verticalSpacing * adjustedGapFactor, left: j * horizontalSpacing * adjustedGapFactor });
        } else {
          positions.push({ top: i * verticalSpacing * adjustedGapFactor, left: (j + 0.3) * horizontalSpacing * adjustedGapFactor });
        }
      }
    }

    return positions;
  };

  // Array to store positions of emojis
  const [positions, setPositions] = createSignal(calculateGridPositions(emojis));

  // Effect to update positions on window resize or zoom change
  createEffect(() => {
    const handleResize = () => {
      setPositions(calculateGridPositions(emojis));
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div class="fixed inset-0 pointer-events-none z-[-1]" style={{ filter: "grayscale(100%)" }}>
      {emojis.map((emoji, index) => (
        <span
          class="absolute text-sm"
          style={{ top: positions()[index].top + "px", left: positions()[index].left + "px" }}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
};

export default FullScreenEmojiComponent;


