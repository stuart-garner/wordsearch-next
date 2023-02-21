import React, { useEffect, useState } from "react";
import { getHexColor } from "@/components/utils";
import axios from "axios";
import uuid from "react-uuid";
import Confetti from "react-confetti";
import Head from "next/head";
import { COLOURS } from "@/components/constants";
import Wordsearch from "@/components/wordsearch";
import Footer from "@/components/footer";
import BottomWave from "@/components/waves/Bottom";

export default function Home() {
  const [gridSize, setGridSize] = useState(15);
  const [grid, setGrid] = useState<any>();
  const [words, setWords] = useState<any>();
  const [isError, setIsError] = useState<any>(false);
  const [isLoading, setIsLoading] = useState<any>(false);
  const [firstSquare, setFirstSquare] = useState<any>();
  const [lastSquare, setLastSquare] = useState<any>();
  const [windowSize, setWindowSize] = useState<any>({
    width: 800,
    height: 800,
  });
  const [isComplete, setIsComplete] = useState<any>(false);

  useEffect(() => {
    setIsLoading(true);
    if (!grid) {
      axios
        .get(`https://wordsearch-api.onrender.com/api/grid/${gridSize}`)
        .then((response) => {
          setIsLoading(false);
          setGrid(response.data.grid);
          setWords(response.data.words);
        })
        .catch((error) => {
          setIsLoading(false);
          setIsError(true);
        });
    }
    const onResize = (event: any) => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", onResize);
    onResize(null);
  }, [null]);

  useEffect(() => {
    if (words) {
      setIsComplete(
        !words.find((item: any) => {
          if (!item.found) {
            return true;
          }
        })
      );
    }
  }, [words]);

  const onDragStart = (squ: any) => {
    setLastSquare(null);
    setFirstSquare(squ);
  };

  const onDragStop = (squ: any) => {
    setLastSquare(squ);
  };

  useEffect(() => {
    if (firstSquare && lastSquare) {
      const random = Math.floor(Math.random() * COLOURS.length);
      const clone = [...words];
      clone.forEach((item: any) => {
        const itemfirstIndex = item.startIndex;
        const itemLastIndex = item.endIndex;
        if (
          itemfirstIndex === firstSquare.id &&
          itemLastIndex === lastSquare.id
        ) {
          item.found = true;
          item.colour = COLOURS[random];
          setWords(clone);
        }
      });
    }
  }, [firstSquare, lastSquare]);

  if (isError) return <div>ERROR</div>;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isComplete && (
        <Confetti width={windowSize.width} height={windowSize.height} />
      )}
      <main>
        <section id="game-section" className="py-2 md:pt-5 pb-[150px]">
          <div className="container flex justify-center items-center lg:items-start flex-col gap-5 p-2 md:p-5 lg:flex-row max-w-[1200px]">
            <div
              id="grid"
              className="bg-white max-w-[750px] w-full aspect-square flex justify-center items-center rounded-xl overflow-hidden"
            >
              {isLoading && (
                <div>
                  <span className="loader"></span>
                </div>
              )}
              {grid && !isLoading && (
                <Wordsearch
                  data={grid}
                  words={words}
                  grigSize={gridSize}
                  onDragStart={onDragStart}
                  onDragStop={onDragStop}
                />
              )}
            </div>
            <div
              id="words"
              className="basis-1/1 lg:basis-1/3 flex flex-wrap bg-white rounded-xl p-5"
            >
              {words && (
                <ul className="inline-block">
                  {words.map(({ word, found, colour }: any) => {
                    return (
                      <li
                        key={uuid()}
                        className={`${
                          found ? "line-through" : ""
                        }  py-1 px-2 rounded-lg text-sm inline-flex flex-wrap gap-10 mb-2 mr-2 capitalize`}
                        style={{
                          backgroundColor: getHexColor(colour),
                        }}
                      >
                        {word}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
          <BottomWave colour="fill-black" />
        </section>
      </main>
      <Footer />
    </>
  );
}
