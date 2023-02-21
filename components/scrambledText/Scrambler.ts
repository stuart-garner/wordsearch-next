export default class Scrambler {
  static get CHARACTERS() {
    return {
      DEFAULT: [
        "!",
        "@",
        "#",
        "-",
        "{",
        "~",
        "`",
        '"',
        "/",
        "*",
        "+",
        "=",
        "}",
        "*",
        "&",
        "%",
        "$",
        "|",
      ],
      UNDERSCORE: ["_"],
      SPACES: [" "],
    };
  }

  private characters: Array<string>;
  private onScramble?: ((value: string) => void) | null;
  private targetText?: Array<string> | null;
  private encodedText?: Array<string> | null;
  private frameIndex: number;
  private enterFrame: number | null;
  private characterArray?: Array<CharacterObjectType> | null;
  private currentFrame: number;
  private characterIndex: number;
  private delay: number;
  private placeHolder: string;
  private onComplete?: (() => void) | null;

  constructor() {
    this.characters = [...Scrambler.CHARACTERS.SPACES];
    this.onScramble = null;
    this.targetText = null;
    this.encodedText = null;
    this.frameIndex = 0;
    this.enterFrame = null;
    this.characterArray = null;
    this.currentFrame = 0;
    this.characterIndex = 0;
    this.placeHolder = "";
    this.onComplete = null;
    this.delay = 2;
    this._update = this._update.bind(this);
    this._encode = this._encode.bind(this);
    this._getCharactersToEncode = this._getCharactersToEncode.bind(this);
  }

  scramble(
    text: string,
    onScramble: any,
    delay: number,
    onComplete: () => void,
    placeHolder: string
  ) {
    this.targetText = text.split("");
    this.encodedText = this.targetText;
    this.onScramble = onScramble;
    this.delay = delay;
    this.placeHolder = placeHolder;
    this.onComplete = onComplete;
    this._getCharactersToEncode();
  }

  _getCharactersToEncode() {
    this.characterArray = [];
    let ignore = false;
    this.targetText?.forEach((character, index) => {
      if (character !== " ") {
        if (character === "<" && !ignore) {
          ignore = true;
        } else if (character === ">" && ignore) {
          ignore = false;
          return;
        }
        if (!ignore) {
          this.characterArray?.push({
            target: character,
            display: "",
            index: index,
            loops: this._randomIntFromInterval(3, 6),
            loopComplete: 0,
            complete: false,
          });

          if (this.targetText) {
            this.targetText[index] = this.placeHolder;
          }
        }
      }
    });
    if (this.onScramble) this.onScramble("");

    this.enterFrame = requestAnimationFrame(this._update);
  }

  _update() {
    this.currentFrame++;

    if (this.currentFrame % this.delay === 0) {
      if (this.characterArray) {
        if (this.characterIndex < this.characterArray.length) {
          this.characterIndex++;
        }
        this.characterArray?.forEach((item, index) => {
          if (index < this.characterIndex) {
            this._encode(item, index);
          }
        });
        if (this.onScramble && this.targetText)
          this.onScramble(this.targetText.join(""));
      }
    }
    if (this.characterArray) {
      if (this.characterArray.length > 0) {
        this.enterFrame = requestAnimationFrame(this._update);
      } else {
        if (this.enterFrame) cancelAnimationFrame(this.enterFrame);
        if (this.onComplete) this.onComplete();
      }
    }
  }

  _encode(item: CharacterObjectType, index: number) {
    if (item.loopComplete !== item.loops) {
      const newText =
        this.characters[
          this._randomIntFromInterval(0, this.characters.length - 1)
        ];
      item.display = newText;
      if (this.targetText) this.targetText[item.index] = item.display;
      item.loopComplete++;
    } else {
      item.display = item.target;
      if (this.targetText) this.targetText[item.index] = item.display;
      if (this.characterArray) this.characterArray.splice(index, 1);
    }
  }

  _randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

type CharacterObjectType = {
  target: string;
  display: string;
  index: number;
  loops: number;
  loopComplete: number;
  complete: boolean;
};
