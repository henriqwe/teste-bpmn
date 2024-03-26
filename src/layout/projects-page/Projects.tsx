import { ProjectList } from "./ProjectList";

export function Projects() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex justify-between">
        <div className="pl-6 pt-6">
          <div className="">
            <h2 className="text-xl font-semibold">Todos os projetos</h2>
            <p className="text-xs font-regular">Última edição \/</p>
          </div>
        </div>
        <div className="pr-6 pt-7">
          <div className="inline-flex h-full gap-x-4">
            <label htmlFor="project-input" className="relative">
              <div className="absolute flex items-center h-full w-12">
                <span className="pl-5">P</span>
              </div>
              <input
                id="project-input"
                placeholder="Pesquisar"
                className="pl-12 pr-4 focus:outline-none h-full border-stroke border rounded-md placeholder:text-neutral-high-400"
              />
            </label>
            <button className="font-medium text-white bg-primary-pure py-2 px-6 rounded-md">
              Projeto +
            </button>
          </div>
        </div>
      </div>
      <ProjectList />
    </div>
  );
}
