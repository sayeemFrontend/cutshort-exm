import DropDown from "../drop-down/DropDown";
import "./ListView.css";

export default function ListView({ list = [] }) {
  return (
    <>
      <div className="list-wrapper">
        {list?.map((item) =>
          item?.subList ? (
            <DropDown key={item.id} item={item} />
          ) : (
            <ul className="text-sm flex items-center cursor-pointer font-medium text-primary hover:text-primary-dark">
              <li>{item.title}</li>
            </ul>
          )
        )}
      </div>
    </>
  );
}
