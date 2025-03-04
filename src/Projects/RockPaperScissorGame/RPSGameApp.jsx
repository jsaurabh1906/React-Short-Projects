import React from "react";
import { motion } from "framer-motion";
import RockPaperScissor from "./RockPaperScissor";
import RockPaperScisscorsAnimate from "./RockPaperScisscorsAnimate";
import RockPaperScissorsAdvanced from "./RockPaperScissorsAdvanced";
import RPSGame from "./OptimizedVersion/RPSGame";
const tabs = [
  {
    id: 1,
    name: "Simple RPS",
    label: "Simple",
    component: <RockPaperScissor />,
    props: {},
  },
  {
    id: 2,
    name: "Animation RPS",
    label: "Animation & Sound",
    component: <RockPaperScisscorsAnimate />,
    props: { showAnimation: true },
  },
  {
    id: 3,
    name: "Advanced RPS with Scores",
    label: "With Scores",
    component: <RockPaperScissorsAdvanced />,
    props: { showAnimation: true, showScores: true },
  },
];
const RPSGameApp = () => {
  const [activeTab, setActiveTab] = React.useState(tabs[0].id);

  return (
    <div className=" bg-gray-900 p-4">
      <h1 className="text-3xl text-gray-50 font-bold text-center mb-6">
        Rock Paper Scissors
      </h1>
      <div className="relative bg-gray-800 rounded-md flex flex-wrap justify-center gap-4 border-b border-gray-100 w-full text-white">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-4 py-2 text-md font-medium transition-all duration-300 cursor-pointer ${
              activeTab === tab.id
                ? "text-white"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.span
                layoutId="underline"
                className="absolute left-0 bottom-0 h-1 w-full bg-white rounded-t-md"
              />
            )}
          </button>
        ))}
      </div>
      <div className="p-4 w-full bg-blue-950 rounded-lg shadow-md mt-4 text-center">
        <RPSGame
          {...tabs.find((tab) => tab.id === activeTab).props}
          activeTab={activeTab}
        />
      </div>
    </div>
  );
};

export default RPSGameApp;
{
  /* <div className="p-4 w-full  bg-blue-950 rounded-lg shadow-md mt-4 text-center">
        {tabs.find((tab) => tab.id === activeTab).component}
      </div> */
}
