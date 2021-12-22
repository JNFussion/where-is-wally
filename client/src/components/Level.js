import React, { useEffect, useRef, useState } from "react";
import Konva from "konva";
import { useLocation, useParams } from "react-router-dom";
import Head from "./Head";
import Button from "./Button";
import Wally from "../assets/images/Character.Waldo.webp";
import Wenda from "../assets/images/Character.Wenda.webp";
import Odlaw from "../assets/images/Character.Odlaw.webp";
import Whitebeard from "../assets/images/Character.Whitebeard.webp";
import Woof from "../assets/images/Character.Woof.webp";

function keepInsideBounds(shape, stage) {
  const box = shape.getClientRect();
  const absPos = shape.getAbsolutePosition();
  const offsetX = box.x - absPos.x;
  const offsetY = box.y - absPos.y;

  const newAbsPos = { ...absPos };
  if (box.x < 0) {
    newAbsPos.x = -offsetX;
  }
  if (box.y < 0) {
    newAbsPos.y = -offsetY;
  }
  if (box.x + box.width > stage.width()) {
    newAbsPos.x = stage.width() - box.width - offsetX;
  }
  if (box.y + box.height > stage.height()) {
    newAbsPos.y = stage.height() - box.height - offsetY;
  }
  shape.setAbsolutePosition(newAbsPos);
}

function moveScope(shape, stage) {
  const mousePos = stage.getPointerPosition();
  const { x } = mousePos;
  const { y } = mousePos;

  shape.setAbsolutePosition({
    x: x - 25,
    y: y - 25,
  });
  keepInsideBounds(shape, stage);
}

function getAnswer(answers, name, level) {
  return answers.characters
    .find((c) => c.name === name)
    .positions.find((p) => `${p.level_id}` === level);
}

function addSquareResult(layer, shape, color, name) {
  const clone = shape.clone({
    id: `${name}`,
    stroke: color,
  });
  layer.add(clone);
}

function processAnswer(answers, name, level, shape, layer) {
  const { x, y } = getAnswer(answers, name, level);
  if (shape.intersects({ x, y })) {
    addSquareResult(layer, shape, "green", name);
  } else {
    addSquareResult(layer, shape, "red");
  }
}

const Level = function Level() {
  const { id } = useParams();
  const { url } = useLocation().state;
  const stage = useRef(null);
  const layers = useRef({ background: null, scope: null, results: null });
  const [characters, setCharacters] = useState([
    { name: "wally", url: Wally },
    { name: "wenda", url: Wenda },
    { name: "odlaw", url: Odlaw },
    { name: "whitebeard", url: Whitebeard },
    { name: "woof", url: Woof },
  ]);

  const [answers, setAnswers] = useState({});
  useEffect(() => {
    fetch("/api/level/1")
      .then((response) => response.json())
      .then((data) => setAnswers(data));
  }, []);

  const clicked = useRef(false);

  useEffect(() => {
    const ogWidth = 1460;
    const ogHeight = 909;
    const width = document.getElementById("scene").clientWidth;
    stage.current = new Konva.Stage({
      container: "scene",
      width,
      height: (ogHeight * width) / ogWidth,
    });

    layers.current = {
      background: new Konva.Layer(),
      scope: new Konva.Layer(),
      results: new Konva.Layer(),
    };

    stage.current.add(layers.current.background);
    stage.current.add(layers.current.scope);
    stage.current.add(layers.current.results);

    Konva.Image.fromURL(url, (scene) => {
      scene.setAttrs({
        width,
        height: (ogHeight * width) / ogWidth,
        x: 0,
        y: 0,
      });
      layers.current.background.add(scene);
    });

    const rect1 = new Konva.Rect({
      x: 0,
      y: 0,
      width: 50,
      height: 50,
      stroke: "grey",
      strokeWidth: 4,
      id: "scope",
    });
    layers.current.scope.add(rect1);

    stage.current.on("mousemove", () => {
      if (!clicked.current) {
        moveScope(rect1, stage.current);
      }
    });

    stage.current.on("click", () => {
      if (!clicked.current) {
        moveScope(rect1, stage.current);
        clicked.current = true;
      }
    });

    stage.current.on("dblclick", () => {
      clicked.current = false;
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (answers.characters) {
      const rect = stage.current.find("#scope")[0];
      document.getElementById("characters").addEventListener("click", (e) => {
        if (e.target.id && clicked.current) {
          processAnswer(answers, e.target.id, id, rect, layers.current.results);
          console.log(stage.current.find(`#${e.target.id}`).length);
          if (stage.current.find(`#${e.target.id}`).length) {
            e.target.disabled = true;
            e.target.classList.add("scale-95", "brightness-50");
          }
          clicked.current = false;
        }
      });
    }
  }, [answers]);

  return (
    <article className="max-w-[1500px] mx-auto text-white">
      <Head />
      <div className="box-content p-4 grid grid-cols-2-1 gap-4 bg-zinc-800">
        <main className="w-full max-w-6xl mx-auto">
          <div id="scene" />
        </main>
        <aside className="h-full flex flex-col">
          <div className="w-fit px-4 py-2 mx-auto  font-bold text-xl bg-zinc-700">
            00:00
          </div>
          <p className="p-4 my-2 bg-zinc-900/90">
            When you find a character on the scene click on them. To confirm
            your answer click on the images below.
          </p>
          <ul
            id="characters"
            className="flex-1 grid grid-cols-auto gap-4 p-4 bg-zinc-900/90"
          >
            {characters.map((c) => (
              <li key={c.name}>
                <Button name={c.name} src={c.url} />
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </article>
  );
};

export default Level;
