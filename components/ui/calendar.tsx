import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

interface CustomNavbarProps {
  onPreviousClick: () => void;
  onNextClick: () => void;
}

function CustomNavbar({ onPreviousClick, onNextClick }: CustomNavbarProps) {
  return (
    <div className="flex justify-between items-center">
      <button
        onClick={onPreviousClick}
        className="p-2"
        aria-label="Previous Month"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={onNextClick}
        className="p-2"
        aria-label="Next Month"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}

interface CalendarProps {
  className?: string;
  [key: string]: any; // To allow other props for DayPicker
}


