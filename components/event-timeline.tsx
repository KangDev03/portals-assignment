import { mockEvents } from "@/app/portal/data";
import EventCard from "@/components/event-card";

const EventTimeline = () => {
  return (
    <div className="flex flex-col gap-6">
      {mockEvents.map((day, i) => (
        <div key={i} className="grid grid-cols-[103px_1fr] gap-5 relative">
          
          <div className="relative text-left flex flex-col items-start">
            <h4 className="text-base font-medium text-white">
              {day.dateLabel}
            </h4>
            <p className="text-sm font-normal text-white/75">{day.date}</p>

            {/* Dotted line */}
            {/* <div className="absolute left-[6px] top-[40px] w-[1px] h-full border-l border-dashed border-gray-700"></div> */}

            {/* Dot for Today or other days */}
            {/* {i === 0 ? (
              <div className="absolute -left-[10px] top-[10px]">
                <div className="relative flex items-center justify-center size-3">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full size-3 bg-red-500"></span>
                </div>
              </div>
            ) : (
              <div className="absolute -left-[8px] top-[10px]">
                <div className="rounded-full size-2.5 bg-gray-600"></div>
              </div>
            )} */}
          </div>

          <div className="flex flex-col gap-4">
            {day.events.map((e) => (
              <EventCard key={e.id} {...e} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventTimeline;
