import React from "react";
import * as PIXI from "pixi.js";

type GridPropsType = {
  data: any;
  grigSize: number;
  words: any;
  onDragStart: (item: any) => void;
  onDragStop: (item: any) => void;
};

class Wordsearch extends React.Component<GridPropsType> {
  app: any;
  gridRef: any;
  isDragging: any;
  mainContainer: any;
  selectLine: any;
  foundLines: any;
  squareSize: number;
  constructor(props: any) {
    super(props);
    this.state = { width: 0, squareSize: 0 };
    this.gridRef = React.createRef();
    this.app = null;
    this.isDragging = null;
    this.mainContainer = null;
    this.squareSize = 0;
    this.selectLine = new PIXI.Graphics();
    this.foundLines = new PIXI.Graphics();
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  componentDidMount() {
    this.squareSize = Math.floor(
      this.gridRef.current.offsetWidth / this.props.grigSize
    );

    if (!this.app) {
      this.app = new PIXI.Application<any>({
        width: this.gridRef.current.offsetWidth,
        height: this.gridRef.current.offsetWidth,
        background: "rgba(255,255,255, 1)",
        resolution: 1,
        antialias: false,
      });
      this.mainContainer = new PIXI.Container();
      this.mainContainer.eventMode = "dynamic";
      this.mainContainer.on("pointermove", this.onMouseMove);

      this.app.stage.addChild(this.mainContainer);
      this.gridRef.current.appendChild(this.app.view);
      let posX: number = 0;
      let posY: number = 0;

      this.props.data.forEach((item: any) => {
        const square = new PIXI.Container();
        square.eventMode = "dynamic";
        square.x = posX;
        square.y = posY;
        item.centerX = posX + this.squareSize / 2;
        item.centerY = posY + this.squareSize / 2;
        square.on("pointerdown", () => {
          this.isDragging = item;
          this.props.onDragStart(item);
        });
        square.on("pointerup", () => {
          this.isDragging = null;
          this.props.onDragStop(item);
          this.selectLine.clear();
        });
        const text = item.letter === "" ? "" : item.letter.toUpperCase();
        const graphics = new PIXI.Graphics();
        graphics.beginFill(0xfafafa, 0.1);
        graphics.lineStyle(1, 0xfafafa);
        graphics.drawRect(0, 0, this.squareSize, this.squareSize);
        graphics.endFill();
        square.addChild(graphics);

        const style = new PIXI.TextStyle({
          fontFamily: ["Helvetica", "Arial", "sans-serif"],
          fontSize: window.innerWidth < 768 ? 12 : 16,
        });
        const basicText = new PIXI.Text(text, style);
        basicText.x = this.squareSize / 2;
        basicText.y = this.squareSize / 2;
        basicText.anchor.set(0.5);
        square.addChild(basicText);
        posX += this.squareSize;
        this.mainContainer.addChild(square);

        if (posX === this.squareSize * this.props.grigSize) {
          posX = 0;
          posY += this.squareSize;
        }
        const offset =
          (this.gridRef.current.offsetWidth -
            this.squareSize * this.props.grigSize) /
          2;
        this.mainContainer.x = offset;
        this.mainContainer.y = offset;
      });

      this.mainContainer.addChild(this.selectLine);
      this.mainContainer.addChild(this.foundLines);
    }
  }

  onMouseMove(event: any) {
    if (this.isDragging) {
      this.selectLine.clear();
      this.selectLine.lineStyle({
        width: 5,
        color: 0x000000,
        alpha: 0.3,
        cap: PIXI.LINE_CAP.ROUND,
      });
      this.selectLine.moveTo(this.isDragging.centerX, this.isDragging.centerY);
      this.selectLine.lineTo(event.data.global.x, event.data.global.y);
      this.mainContainer.addChild(this.selectLine);
    }
  }

  shouldComponentUpdate(nextProps: GridPropsType) {
    console.log("TEST - ", nextProps.words === this.props.words);
    if (nextProps.words !== this.props.words) {
      this.foundLines.clear();

      nextProps.words.forEach((item: any) => {
        if (item.found) {
          this.foundLines.lineStyle({
            width: this.squareSize - 15,
            color: item.colour,
            alpha: 0.5,
            cap: PIXI.LINE_CAP.ROUND,
          });
          const start = item.startIndex;
          const end = item.endIndex;
          this.foundLines.moveTo(
            this.props.data[start].centerX,
            this.props.data[start].centerY
          );
          this.foundLines.lineTo(
            this.props.data[end].centerX,
            this.props.data[end].centerY
          );
        }
      });
    }
    return false;
  }

  render() {
    return (
      <div
        className="aspect-square w-full max-w-[750px] m-auto "
        ref={this.gridRef}
      ></div>
    );
  }
}

export default Wordsearch;
