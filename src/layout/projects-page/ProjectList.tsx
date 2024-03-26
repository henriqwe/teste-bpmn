export function ProjectList() {
  return (
    <div className="flex gap-4 flex-wrap p-6">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="w-60 h-72 rounded-md border border-stroke flex flex-col justify-between"
        >
          <div className="relative flex-grow overflow-hidden">
            <img
              src="https://i5.walmartimages.com/seo/Freshness-Guaranteed-French-Bread-14-oz_fd51f0c3-4eea-4ff1-8109-7770339b6d85.fdba2ce348744cde3840700f5e33f3d3.jpeg"
              className="object-cover"
            />
            <div className="absolute top-4 right-3 flex gap-y-[2px] gap-x-1">
              {["E", "D"].map((letter) => (
                <p
                  key={letter}
                  className="w-6 h-6 bg-neutral-high-200 text-white font-semibold flex items-center justify-center rounded-full text-xs"
                >
                  {letter}
                </p>
              ))}
              <p>|</p>
            </div>
          </div>
          <div className="border-t border-stroke h-16">
            <div className="py-4 pl-3 flex flex-col justify-center">
              <p className="text-sm font-semibold">Projeto {i}</p>
              <p className="text-neutral-low-100 text-xs">
                Editado há {(Math.random() * 23 + 1).toFixed()}{" "}
                {Math.random() < 0.5 ? "dias" : "horas"}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
