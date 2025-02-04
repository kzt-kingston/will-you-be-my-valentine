"use client";

import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

export default function ValentinePage() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [yesButtonSize, setYesButtonSize] = useState(1);

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    setYesButtonSize(yesButtonSize + 1.2);
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
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-5 w-full overflow-hidden">
      {yesPressed ? (
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
      ) : (
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
              className={`bg-green-500 hover:bg-green-600 text-white font-bold p-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-110`}
              style={{ fontSize: `${yesButtonSize}rem` }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            {noCount < 10 && (
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold p-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-110"
                onClick={handleNoClick}
              >
                {getNoButtonText()}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
