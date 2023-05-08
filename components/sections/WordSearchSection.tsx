import PortfolioTechStack from "../portfolioTechStack";
import RenderIf from "../renderIf";
import Wordsearch from "../wordsearch";
import BottomWave from "../waves/Bottom";
import uuid from "react-uuid";
import { getHexColor } from "../utils";

type PropType = {
  isLoading: boolean;
  grid: any;
  words: any;
  onDragStart: (squ: any) => void;
  onDragStop: (squ: any) => void;
  gridSize: number;
};

const WordSearchSection = (props: PropType) => {
  const { isLoading, grid, words, onDragStart, onDragStop, gridSize } = props;

  return (
    <section id="game-section" className="pt-[60px] pb-[150px]">
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
          {grid && words && !isLoading && (
            <Wordsearch
              data={grid}
              words={words}
              grigSize={gridSize}
              onDragStart={onDragStart}
              onDragStop={onDragStop}
            />
          )}
        </div>
        <div className="basis-1/1 lg:basis-1/3 flex flex-col gap-5">
          <div id="words" className=" flex flex-wrap bg-white rounded-xl p-5">
            <h2 className="text-xl mb-5">Find these words:</h2>

            <RenderIf isTrue={words}>
              <ul className="inline-block">
                {words?.map(({ word, found, colour }: any) => {
                  return (
                    <li
                      key={uuid()}
                      className={`${
                        found ? "line-through" : ""
                      }  py-1 px-2 rounded-lg text-sm inline-flex flex-wrap gap-10 mb-2 mr-2 capitalize`}
                      style={{
                        backgroundColor: found
                          ? getHexColor(colour)
                          : "#efefef",
                        opacity: found ? 0.5 : 1,
                      }}
                    >
                      {word}
                    </li>
                  );
                })}
              </ul>
            </RenderIf>
          </div>
          <div className=" flex flex-wrap bg-white rounded-xl p-5 h-auto relative">
            <h3>Built With:</h3>
            <PortfolioTechStack next typescript pixi tailwind tsNode express />
          </div>
        </div>
      </div>
      <BottomWave colour="fill-black" />
    </section>
  );
};

export default WordSearchSection;
