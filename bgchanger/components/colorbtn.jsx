const ColorBtn = ({ color, setColor }) => {
  return (
    <div>
      <button
        onClick={() => setColor(color)}
        className="px-4 py-1 text-black capitalize rounded-full shadow-lg outline-none"
        style={{ backgroundColor: color }}
      >
        {color}
      </button>
    </div>
  );
};

export default ColorBtn;
