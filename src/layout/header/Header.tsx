import { LeftNavigation } from "./LeftNavigation";
import { OrganizationDropdown } from "./OrganizationDropdown";
import { RightNavigation } from "./RightNavigation";

export function Header() {
  return (
    <section className="border border-stroke w-full h-12 flex justify-between">
      <div className="px-6 py-3">
        <div className="flex gap-x-6 w-full h-full">
          <img src="/ycodify.png" alt="Ycodify" className="h-6 w-40" />
          <div className="w-[1px] bg-stroke" />
          <LeftNavigation />
        </div>
      </div>
      <div className="flex gap-x-6">
        <OrganizationDropdown />
        <RightNavigation />
      </div>
    </section>
  );
}
