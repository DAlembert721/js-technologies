import { useState } from "react";

const Header = () => {
  const [like, setLike] = useState(false);

  const handleLikeClick = () => {
    setLike(!like);
  };

  return (
    <header className="fixed top-0 w-full bg-sky-500">
      <nav className="py-4">
        <div className="container px-4 mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png"
              alt="JavaScipt"
              width="32"
              height="32"
              className="w-8 h-8 object-cover"
            />
            <h1
              className="text-zinc-100 text-xl font-black text-center transition-all hover:brightness-125"
            >
              Technologies
            </h1>
          </a>
          <ul>
            <li>
              <a
                href="/about"
                className="text-zinc-100 font-semibold transition-all hover:brightness-125"
              >
                About
              </a>
            </li>
          </ul>
          <button className={`text-2xl transition-colors ${like && 'text-red-500'}`} onClick={handleLikeClick}>♥</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;