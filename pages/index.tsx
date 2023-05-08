import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";

import Head from "next/head";
import { COLOURS } from "@/components/constants";
import DefaultLayout from "@/templates/defaultLayout";
import RenderIf from "@/components/renderIf";
import WordSearchSection from "@/components/sections/WordSearchSection";
import reducer, { initialState } from "@/reducers/gameReducer";
import { GameActionKind } from "@/types/GameTypes";
import Popup from "@/components/popup";

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [colourIndex, setColourIndex] = useState(0);
  const {
    grid,
    gridSize,
    words,
    isLoading,
    firstSquare,
    lastSquare,
    windowSize,
    isError,
    isComplete,
    resetGame,
  } = state;

  useEffect(() => {
    const onResize = () => {
      dispatch({
        type: GameActionKind.WINDOW_RESIZE,
        payload: { width: window.innerWidth, height: window.innerHeight },
      });
    };
    window.addEventListener("resize", onResize);
    onResize();
  }, []);

  useEffect(() => {
    if (!grid) {
      dispatch({ type: GameActionKind.LOAD_GAME_DATA_REQUEST });
      axios
        .get(`https://wordsearch-api.onrender.com/api/grid/${gridSize}`)
        .then((response) => {
          dispatch({
            type: GameActionKind.LOAD_GAME_DATA_SUCCESS,
            payload: response.data.grid,
          });
          dispatch({
            type: GameActionKind.SET_WORDS,
            payload: response.data.words,
          });
        })
        .catch((error) => {
          dispatch({
            type: GameActionKind.LOAD_GAME_DATA_ERROR,
          });
        });
    }
  }, [gridSize, grid]);

  useEffect(() => {
    if (words) {
      const allWordsFound = words.filter((item: any) => {
        if (item.found) {
          return item;
        }
      });

      if (allWordsFound.length === words.length) {
        dispatch({
          type: GameActionKind.GAME_COMPLETE,
          payload: true,
        });
      }
    }
  }, [words]);

  const onDragStart = (squ: any) => {
    dispatch({
      type: GameActionKind.SET_LAST_SQUARE,
      payload: null,
    });
    dispatch({
      type: GameActionKind.SET_FIRST_SQUARE,
      payload: squ,
    });
  };

  const onDragStop = (squ: any) => {
    dispatch({
      type: GameActionKind.SET_LAST_SQUARE,
      payload: squ,
    });
  };

  const onRestart = () => {
    dispatch({
      type: GameActionKind.RESET_GAME,
    });
  };

  useEffect(() => {
    if (firstSquare && lastSquare) {
      const wordsClone = [...words];
      wordsClone.forEach((item: any) => {
        const itemfirstIndex = item.startIndex;
        const itemLastIndex = item.endIndex;
        if (
          itemfirstIndex === firstSquare.id &&
          itemLastIndex === lastSquare.id
        ) {
          item.found = true;
          item.colour = COLOURS[colourIndex];
          setColourIndex(
            colourIndex === COLOURS.length - 1 ? 0 : colourIndex + 1
          );

          dispatch({
            type: GameActionKind.SET_WORDS,
            payload: wordsClone,
          });
        }
      });
    }
  }, [firstSquare, lastSquare]);

  return (
    <>
      <Head>
        <title>[SG] - Word Search Game</title>
        <meta
          name="description"
          content="A random word search generator built with Next, React, TypeScript, Node and Tailwind. Hosted on Vercel and Render"
        />
        <meta property="og:title" content="[SG] - Random Word Search Game" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wordsearch-ui.vercel.app/" />
        <meta
          property="og:image"
          content={`https://wordsearch-ui.vercel.app/logo.jpg`}
        />

        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
        <meta
          property="og:image:alt"
          content="Screen Shot of Game in Actiion"
        />
        <link rel="canonical" href="https://wordsearch-ui.vercel.app/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RenderIf isTrue={isComplete}>
        <Popup
          width={windowSize.width}
          height={windowSize.height}
          onRestart={onRestart}
        ></Popup>
      </RenderIf>

      <DefaultLayout>
        <WordSearchSection
          isLoading={isLoading}
          grid={grid}
          words={words}
          onDragStart={onDragStart}
          onDragStop={onDragStop}
          gridSize={gridSize}
        />
        <RenderIf isTrue={isError}>
          <div>ERROR</div>
        </RenderIf>
      </DefaultLayout>
    </>
  );
};

export default Home;
