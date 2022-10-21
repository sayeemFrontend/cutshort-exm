export default function IconStyle({ children, badge = false, style = null }) {
  return (
    <div
      style={style}
      className="w-10 h-10  cursor-pointer rounded-lg bg-white flex items-center justify-center border border-[#e7e7e9] text-primary-dark"
    >
      {children}
      {badge ? (
        <span className="w-4 h-4 font-semibold flex items-center justify-center text-primary text-[10px] translate-x-[34%] -translate-y-[34%] rounded-full border border-primary-light bg-white absolute top-0 right-0">
          11
        </span>
      ) : null}
    </div>
  );
}
