'use client'
import { Calendar } from "@heroui/calendar";
import { getLocalTimeZone, parseDate, today } from "@internationalized/date";

export default function EventCalendar() {
  return (
    <div className="relative">
      <Calendar
        aria-label="Event calendar"
        firstDayOfWeek="mon"
        defaultValue={today(getLocalTimeZone())}
        className="my-calendar"
        classNames={{
          base: "w-full bg-black-80 border border-gray-10 rounded-2xl",
          cellButton: "rounded-lg transition-colors data-[selected=true]:!bg-violet-20 text-sm font-medium",
          content: "w-full",
          headerWrapper: "px-4 pt-4 pb-3",
          prevButton: "min-w-9 w-9 h-9 rounded-lg text-white",
          nextButton: "min-w-9 w-9 h-9 rounded-lg text-white",
          title: "text-white text-base font-medium leading-[24px]",
        }}
      />
    </div>
  )
}
