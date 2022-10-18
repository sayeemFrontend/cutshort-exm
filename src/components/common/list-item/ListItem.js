import "./listItem.css";

export function ListItemMobile({ item = {}, style = {}, className = "" }) {
  const { rightIcon = () => null, title = "" } = item;

  return (
    <ul style={style} className={`list-group mobile ${className}`}>
      {title !== "" && <li>{title}</li>}
      {rightIcon()}
    </ul>
  );
}

export function ListItemWeb({ item = {}, style = {}, className = "" }) {
  const { leftIcon = () => {}, rightIcon = () => {}, title = "", subTitle = "" } = item;
  return (
    <ul style={style} className={`list-group ${className}`}>
      {leftIcon()}
      <ul className="flex flex-col flex-1 justify-between">
        {title !== "" && <li>{title}</li>}
        {subTitle !== "" && <li>{subTitle}</li>}
      </ul>
      {rightIcon()}
    </ul>
  );
}

export default function ListItem(props) {
  return (
    <>
      <div className="block lg:hidden">
        <ListItemMobile {...props} />
      </div>
      <div className="hidden lg:block">
        <ListItemWeb {...props} />
      </div>
    </>
  );
}
