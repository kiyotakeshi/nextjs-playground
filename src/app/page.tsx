import classNames from "classnames";

export default function Home() {
  const supportsDarkMode = false;
  const baseStyle = classNames("p-4", "lg:p-5");

  return (
    <>
      <h1 className="text-3xl font-bold underline">hello world</h1>
      <h1 className="font-bold underline">hello world</h1>
      <div
        // React は className が単純な文字列のみ受け付けるため classnames を使って変数定義して指定できるようにすると便利
        className={classNames(
          "rounded-xl",
          "p-8",
          "bg-slate-100",
          supportsDarkMode && "dark:bg-slate-900",
        )}
      >
        use classnames
      </div>
      <div
        className={classNames(baseStyle, ["bg-slate-100", "dark:bg-slate-800"])}
      >
        use classnames 2
      </div>
      <button className="bg-cyan-500/50 text-red-500 hover:bg-cyan-600">
        button
      </button>
      <div className="text-center text-2xl font-medium underline">
        text size
      </div>
      <p className="line-clamp-2">
        hello world hoge fuga hoge fuga hoge fuga <br />
        hello world hoge fuga hoge fuga hoge fuga <br />
        hello world hoge fuga hoge fuga hoge fuga <br />
        hello world hoge fuga hoge fuga hoge fuga <br />
        hello world hoge fuga hoge fuga hoge fuga <br />
        hello world hoge fuga hoge fuga hoge fuga <br />
      </p>
    </>
  );
}
