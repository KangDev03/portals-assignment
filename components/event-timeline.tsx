import { mockEvents } from "@/app/portal/data";
import EventCard from "@/components/event-card";
import { StatusIcon } from "@/components/icons";

const EventTimeline = () => {
  return (
    <div className="flex flex-col gap-6">
      {mockEvents.map((day, i) => (
        <div key={i} className="grid grid-cols-[103px_1fr] gap-5 relative">

          <div className="relative text-left flex flex-col items-start">
            <h4 className="text-base font-medium ">
              {day.dateLabel}
            </h4>
            <p className="text-sm font-normal opacity-75">{day.date}</p>
          </div>

          <div className="flex flex-col gap-4 relative">
            {/* line dot */}
            {day.events.length > 1 && (
              <div
                className="absolute left-1.5 top-12 bottom-0 flex flex-col items-center justify-between gap-0.5 -z-2"
                style={{
                  height: `calc(${(day.events.length) * 25}% + ${(day.events.length) * 16}px)`
                }}
              >
                {Array.from({ length: day.events.length * 6 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="w-0.5 h-2 bg-gray-60 dark:bg-white/20 rounded-full"
                  ></div>
                ))}
              </div>
            )}
            {day.events.map((e) => (
              <div key={e.id} className="flex flex-row gap-6">
                <div className="mt-4">
                  <StatusIcon />
                </div>
                <EventCard {...e} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventTimeline;
