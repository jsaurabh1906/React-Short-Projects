import React, { useState } from "react";
import { useTheme } from "./ThemeContext";
import styles from "./LightDarkMode.module.css";
const LightDarkMode = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={`${styles.container} ${
        theme === "dark" ? styles.dark : styles.light
      } `}
    >
      <h1 className="text-2xl w-full text-center font-bold bg-cyan-700 text-white mb-6 py-2 rounded-2xl">
        Toggle Light Dark Mode
      </h1>
      <div className="flex flex-col space-y-8 justify-center">
        <button
          onClick={toggleTheme}
          className={`bg-cyan-950 text-white w-40 mx-auto px-4 py-2 text-lg border-none rounded-md cursor-pointer transition-all duration-300 ease-in`}
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
        <p>
          The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
          quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
          quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs
          grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright
          vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim.
          Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV
          quiz. How quickly daft jumping zebras vex. Two driven jocks help fax
          my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz
          Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed.
          Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug
          of bad milk. A very bad quack might jinx zippy fowls. Few quips
          galvanized the mock jury box. Quick brown dogs jump over the lazy fox.
          The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight
          for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A
          wizard’s job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex
          Trebek's fun TV quiz game. Woven silk pyjamas exchanged for blue
          quartz.
        </p>
      </div>
    </div>
  );
};

export default LightDarkMode;
