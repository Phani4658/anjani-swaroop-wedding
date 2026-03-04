interface CalendarIconProps {
  month: string;
  day: number | string;
  className?: string;
  size?: "sm" | "md" | "lg";
  dayColor?: string;
}

const CalendarIcon = ({ month, day, className = "", size = "md", dayColor = "text-primary-foreground" }: CalendarIconProps) => {
  const sizeClasses = {
    sm: "w-8 h-8 min-w-[2rem]",
    md: "w-12 h-12 min-w-[3rem]",
    lg: "w-16 h-16 min-w-[4rem]"
  };

  const monthSizeClasses = {
    sm: "text-[6px]",
    md: "text-[8px]",
    lg: "text-[10px]"
  };

  const daySizeClasses = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-2xl"
  };

  return (
    <div className={`inline-flex flex-col items-center justify-center flex-shrink-0 bg-temple-gold/30 border-2 border-temple-gold/50 rounded-md ${sizeClasses[size]} ${className}`}>
      <div className={`font-bold text-temple-gold-light uppercase leading-none mb-0.5 ${monthSizeClasses[size]}`}>
        {month}
      </div>
      <div className={`font-bold leading-none ${daySizeClasses[size]} ${dayColor}`}>
        {day}
      </div>
    </div>
  );
};

export default CalendarIcon;
