"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the Player component with SSR disabled
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

export default function ValentinePage() {
  const [noClickCount, setNoClickCount] = useState(0);
  const [isYesPressed, setIsYesPressed] = useState(false);
  const [yesButtonScale, setYesButtonScale] = useState(1.5);
  const [noButtonScale, setNoButtonScale] = useState(1.5);

  const handleNoClick = () => {
    setNoClickCount(noClickCount + 1);
    setYesButtonScale(yesButtonScale + 1);
    setNoButtonScale(noButtonScale - 0.1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Still no?",
      "Seriously?",
      "Nope",
      "No way!",
      "Not happening",
      "Think again!",
      "Last chance!",
    ];
    return phrases[Math.min(noClickCount, phrases.length - 1)];
  };

  const renderYesContent = () => (
    <div className="mt-8 text-center">
      <Player
        src="/lottie/v-day-yes.json"
        loop
        autoplay
        style={{ height: "300px", width: "300px" }}
      />
      <h2 className="text-2xl font-bold text-pink-600 mb-4">
        Yay! Happy Valentine&apos;s Day! ❤️
      </h2>
      <p className="text-xl text-gray-700">
        I&apos;m so happy you said yes! 😊
      </p>
    </div>
  );

  const renderNoContent = () => (
    <div>
      <Player
        src="/lottie/v-day.json"
        loop
        autoplay
        style={{ height: "300px", width: "300px" }}
      />
      <h1 className="text-2xl text-center font-bold mb-8 text-pink-600">
        Will you be my Valentine?
      </h1>
      <div className="flex justify-center space-x-4 overflow-hidden w-full">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold p-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-110"
          style={{ fontSize: `${yesButtonScale}rem` }}
          onClick={() => setIsYesPressed(true)}
        >
          Yes
        </button>
        {noClickCount < 10 && (
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold p-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-110"
            style={{ fontSize: `${noButtonScale}rem` }}
            onClick={handleNoClick}
          >
            {getNoButtonText()}
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-5 w-full overflow-hidden">
      <a
        href="https://github.com/kzt-kingston/will-you-be-my-valentine" // Add your GitHub repo link here
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4"
      >
        <Player
          src="/lottie/gh-icon.json"
          loop
          autoplay
          style={{ height: "50px", width: "50px" }}
        />
      </a>
      {isYesPressed ? renderYesContent() : renderNoContent()}
    </div>
  );
}
