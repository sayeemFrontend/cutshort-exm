export default function Tooltip({ heading }) {
  return (
    <div className="tooltip ">
      <p className="z-[99] w-full">{heading}</p>
    </div>
  );
}
