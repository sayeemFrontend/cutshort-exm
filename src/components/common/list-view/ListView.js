import DropDown from "../drop-down/DropDown";
import ListItem from "../list-item/ListItem";
import "./ListView.css";

export default function ListView({ list = [] }) {
  return (
    <>
      <div className="list-wrapper">
        {list?.map((item) =>
          item?.subList ? (
            <DropDown key={item.id} item={item} />
          ) : (
            <ListItem className="text-lg lg:text-sm" key={item.id} item={item} />
          )
        )}
      </div>
    </>
  );
}
