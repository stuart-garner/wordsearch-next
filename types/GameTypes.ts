export enum GameActionKind {
  LOAD_GAME_DATA_REQUEST = "LOAD_GAME_DATA_REQUEST",
  LOAD_GAME_DATA_SUCCESS = "LOAD_GAME_DATA_SUCCESS",
  LOAD_GAME_DATA_ERROR = "LOAD_GAME_DATA_ERROR",
  WINDOW_RESIZE = "WINDOW_RESIZE",
  GAME_COMPLETE = "GAME_COMPLETE",
  SET_FIRST_SQUARE = "SET_FIRST_SQUARE",
  SET_LAST_SQUARE = "SET_LAST_SQUARE",
  SET_WORDS = "SET_WORDS",
  RESET_GAME = "RESET_GAME",
}

export interface GameAction {
  type: GameActionKind;
  payload?: any;
}

export type WindowSizeType = {
  width: number;
  height: number;
};

export type StateType = {
  gridSize: number;
  grid: any;
  words: any;
  isError: boolean;
  isLoading: boolean;
  firstSquare: any;
  lastSquare: any;
  windowSize: WindowSizeType;
  isComplete: boolean;
  resetGame: boolean;
};
