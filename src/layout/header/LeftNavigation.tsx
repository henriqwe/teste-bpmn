import houseIcon from "../../assets/house.svg";
import chevronRightIcon from "../../assets/chevron-right.svg";

export function LeftNavigation() {
  return (
    <div className="flex py-[2px] gap-x-[10px] items-center">
      <img
        src={houseIcon}
        alt="Home"
        className="w-5 h-5 flex items-center justify-center"
      />
      <img
        src={chevronRightIcon}
        className="w-5 h-5 flex items-center justify-center"
      />
    </div>
  );
}
