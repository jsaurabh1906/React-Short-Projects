import React from "react";
import { useDictionaryContext } from "./context/DictionaryContext";
import { BookOpenText, Volume2 } from "lucide-react";

const Definition = () => {
  const { results, isLoading, error, searchTerm } = useDictionaryContext();

  const playAudio = (result) => {
    if (!result.phonetics || result.phonetics.length === 0) {
      console.error("No phonetics available");
      return;
    }

    // Find the first phonetic object that has an audio URL
    const audioObj = result.phonetics.find((p) => p.audio);

    if (audioObj && audioObj.audio) {
      const audio = new Audio(audioObj.audio);
      audio.play();
    } else {
      console.error("No audio pronunciation available");
    }
  };

  if (isLoading) {
    return (
      <div className="w-[90%] mx-auto flex justify-center items-center gap-2 h-64">
        <div className="h-10 w-10 rounded-full border-b-2 border-blue-500 animate-spin"></div>
        <div className="text-lg font-semibold text-blue-500">Loading...</div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="w-[90%] mx-auto bg-red-100 border border-red-200 rounded-lg p-4 mb-4">
        <p className="text-red-700 text-sm font-bold">{error}</p>
        <p className="text-red-600  mt-2">Try searching for another word.</p>
      </div>
    );
  }

  //   No Search State
  if (!results || !searchTerm) {
    return (
      <div className="w-[90%] mx-auto bg-blue-100 dark:bg-gray-700 rounded-lg shadow-md p-6 text-center">
        <BookOpenText
          size={64}
          className="text-gray-500 dark:text-gray-200 mx-auto"
        />
        <h2 className="text-xl font-semibold mt-4">Search for a word</h2>
        <p className="text-gray-600 dark:text-gray-100 mt-2">
          Enter a word in the search bar to see its definition, pronunciation,
          and more.
        </p>
      </div>
    );
  }

  // No Result found
  if (!results && searchTerm) {
    return (
      <div className="w-[90%] bg-white rounded-lg shadow-md p-6 text-center">
        <h3 className="text-xl font-semibold mt-4">No Results Found</h3>
        <p className="text-gray-600 mt-2">
          We couldn't find any definitions for "{searchTerm}".
        </p>
      </div>
    );
  }

  //   Result found
  return (
    <div className="w-[90%] mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
      {results &&
        results.map((result, index) => (
          <div key={index} className="p-6 border-b last:border-0">
            {/* phonetics */}
            <div className="flex items-start justify-between ">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                  {result.word}
                </h2>
                {result.phonetics &&
                  result.phonetics.length > 0 &&
                  result.phonetics[0].text && (
                    <p className="text-gray-600 dark:text-gray-50 text-lg ">
                      {result.phonetics[0].text}
                    </p>
                  )}
              </div>
              {/* Audio pronunciation button */}
              {result.phonetics &&
                result.phonetics.some((phonetic) => phonetic.audio) && (
                  <button
                    onClick={() => playAudio(result)}
                    className="p-2 rounded-full bg-blue-100 text-blue-600  hover:bg-blue-200  transition-colors"
                    aria-label="Play Pronunciation"
                  >
                    <Volume2 />
                  </button>
                )}
            </div>

            {/* Meanings and definitions */}
            <div>
              {/* part of speech */}
              {result.meanings &&
                result.meanings.length > 0 &&
                result.meanings.map((meaning, meaningIndex) => (
                  <div key={meaningIndex} className="mt-6">
                    <div className="flex items-center mb-3">
                      <span
                        className="text-md  font-semibold
                      py-1 px-3 rounded-full bg-gray-200 text-gray-700  "
                      >
                        {meaning.partOfSpeech}
                      </span>
                    </div>
                    <div className="space-y-4">
                      {meaning.definitions.map((def, defIdx) => (
                        <div
                          key={defIdx}
                          className="border-l-4 border-blue-500 pl-4 py-1"
                        >
                          <p className="text-gray-700  dark:text-gray-50 ">
                            ssds{def.definition}
                          </p>
                          {def.example && (
                            <p className="text-gray-600 dark:text-gray-400 mt-2 italic">
                              "{def.example}"
                            </p>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Synonyms and antonyms */}
                    <div className="mt-4 space-y-2">
                      {meaning.synonyms && meaning.synonyms.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-100 mb-1">
                            Synonyms:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {meaning.synonyms.map((synonym, synIndex) => (
                              <span
                                key={synIndex}
                                className="text-blue-600 bg-blue-100 px-2 py-1 rounded-full"
                              >
                                {synonym}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {meaning.antonyms && meaning.antonyms.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-100 mb-1">
                            Antonyms:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {meaning.antonyms.map((antonym, antIndex) => (
                              <span
                                key={antIndex}
                                className="text-red-600 bg-red-100 py-1 px-2 rounded-full"
                              >
                                {antonym}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              {/* Source urls */}
              {result.sourceUrls && result.sourceUrls.length > 0 && (
                <div className="mt-6 pt-4 border-t">
                  <p className="text-sm text-gray-600 dark:text-gray-100">
                    Source:
                  </p>
                  <a
                    href={result.sourceUrls[0]}
                    target="_blank"
                    className="text-sm text-blue-600 hover:underline transition-all duration-300"
                  >
                    {result.sourceUrls[0]}
                  </a>
                </div>
              )}
              <div></div>
            </div>
          </div>
        ))}

      <></>
    </div>
  );
};

export default Definition;
