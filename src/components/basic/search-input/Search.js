import { search } from "../../../assets";
import "./search.css";

export default function Search(props) {
  const { style = {}, placeholder = "", icon = true, children = "", type = "", className = "" } = props;

  return (
    <div style={style} className={`search ${className}`}>
      {icon && <img src={search} alt="icon" />}
      <input placeholder={placeholder} type={type || ""} />
      {children}
    </div>
  );
}
