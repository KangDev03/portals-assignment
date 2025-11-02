import { StatusIcon, User, VideoRecorder } from "@/components/icons";
import { Avatar } from "@/components/ui/avatar";
import { BorderBox } from "@/components/ui/border-box";
import { MyCard } from "@/components/ui/card";
import { AvatarGroup } from "@heroui/avatar";
import Image from "next/image";

interface Host {
  name: string;
  avatar: string;
}

interface Speaker {
  id: number;
  name: string;
  avatar: string;
}

export interface EventCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  status?: "Now" | "Upcoming";
  types: string[];
  host: Host;
  speakers: Speaker[];
}

const EventCard = ({
  image,
  title,
  description,
  startTime,
  endTime,
  status,
  types,
  host,
  speakers,
}: EventCardProps) => {
  return (
    <MyCard className="flex flex-row items-center">
      <Image
        src={image}
        alt={title}
        width={103}
        height={103}
        className="rounded-lg object-cover"
      />
      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-xs font-medium text-white flex-wrap">
          <span>
            {startTime} - {endTime}
          </span>

          {status === "Now" && (
            <BorderBox variant="red" rounded="sm" wrapperClass="px-2 py-1 gap-1">
              <StatusIcon />
              Now
            </BorderBox>
          )}
          {types.map((type) => (
            <BorderBox
              key={type}
              variant="secondary"
              rounded="sm"
              wrapperClass="px-2 py-1 gap-1"
            >
              {type === "Virtual" ? (
                <VideoRecorder className="w-3 h-3" />
              ) : type === "In-person" ? (
                <User className="w-3 h-3" />
              ) : null}

              <span className="text-xs font-normal">{type}</span>
            </BorderBox>
          ))}
        </div>

        <h3 className="text-lg font-medium text-left">{title}</h3>
        <p className="text-xs text-white/60 line-clamp-1 text-left">{description}</p>

        <div className="flex items-center gap-1.5 text-sm mt-1">
          <span className="text-xs font-normal text-white/40">Host:</span>
          <div className="flex items-center gap-1.5">
            <Avatar
              src={host.avatar}
              name={host.name}
              size="sm"
              radius="md"
            />
            <span className="text-white text-xs">{host.name}</span>
          </div>

          <span className="text-white/40 ml-3">Speakers:</span>
          <div className="flex -space-x-1">
            {speakers.map((s) => (
              <Avatar
                key={s.id}
                src={s.avatar}
                name={s.name}
                size="sm"
                radius="md"
              />
            ))}
          </div>
        </div>
      </div>
    </MyCard>
  );
};

export default EventCard;
