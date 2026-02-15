type DividerProps = {
  className?: string;
};

const Divider = ({ className = "" }: DividerProps) => {
  return (
    <div
      className={`w-full flex justify-center py-8 ${className}`}
      aria-hidden
    >
      <div className="w-200 h-px bg-brand/30" />
    </div>
  );
};

export default Divider;
