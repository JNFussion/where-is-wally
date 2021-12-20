import React, { useState } from "react";
import level1 from "../assets/images/level_1.png";
import level2 from "../assets/images/level_2.png";
import level3 from "../assets/images/level_3.png";
import level4 from "../assets/images/level_4.png";
import level5 from "../assets/images/level_5.png";
import level6 from "../assets/images/level_6.png";

const Home = function Home(params) {
  const [images, setimages] = useState([
    level1,
    level2,
    level3,
    level4,
    level5,
    level6,
  ]);

  return (
    <article className="max-w-5xl my-4 mx-auto">
      <h1 className="font-luckiest-guy text-5xl text-white">
        Where&apos;s Wally?
      </h1>
      <ul className="p-2 my-6 mx-4 columns-3 rounded bg-zinc-700 shadow shadow-zinc-700/20">
        {images.map((img, index) => (
          <li className="p-4 pt-0 rounded bg-zinc-800/90 shadow-md shadow-zinc-800/70 trans-hover hover:scale-95">
            <article>
              <h2 className="py-2 text-xl text-zinc-50 text-bold text-center">
                Level {index + 1}
              </h2>
              <div>
                <img src={img} alt={`where's wally level ${index + 1}`} />
              </div>
            </article>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Home;
