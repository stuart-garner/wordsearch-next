import { GameAction, GameActionKind, StateType } from "@/types/GameTypes";

export const initialState: StateType = {
  gridSize: 15,
  grid: null,
  words: null,
  isError: false,
  isLoading: false,
  firstSquare: null,
  lastSquare: null,
  windowSize: { width: 800, height: 800 },
  isComplete: false,
  resetGame: true,
};

const reducer = (state: StateType, action: GameAction): StateType => {
  const { type, payload } = action;
  switch (type) {
    case GameActionKind.LOAD_GAME_DATA_REQUEST:
      return { ...state, isLoading: true };
    case GameActionKind.LOAD_GAME_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        grid: payload,
        resetGame: false,
      };
    case GameActionKind.LOAD_GAME_DATA_ERROR:
      return { ...state, isLoading: false };
    case GameActionKind.SET_FIRST_SQUARE:
      return { ...state, firstSquare: payload };
    case GameActionKind.SET_LAST_SQUARE:
      return { ...state, lastSquare: payload };
    case GameActionKind.GAME_COMPLETE:
      return { ...state, isComplete: payload };
    case GameActionKind.WINDOW_RESIZE:
      return { ...state, windowSize: payload };
    case GameActionKind.SET_WORDS:
      return { ...state, words: payload };
    case GameActionKind.RESET_GAME:
      return { ...initialState, resetGame: true };
    default:
      throw new Error();
  }
};

export default reducer;
