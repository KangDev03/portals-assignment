import { EventCardProps } from "@/components/event-card";

interface DayEvents {
  dateLabel: string;
  date: string;
  events: EventCardProps[];
}

export const mockEvents: DayEvents[] = [
  {
    dateLabel: "Today",
    date: "Wed, 7 May",
    events: [
      {
        id: 1,
        image: "/card-image-2.png",
        title: "Meeting about fitness after work",
        description:
          "Lorem ipsum is placeholder text commonly used in the graphic, print...",
        startTime: "11:00 AM",
        endTime: "12:30 PM",
        status: "Now",
        types: ["In-person", "Virtual"],
        host: { name: "Tom Davis", avatar: "/avatar/person-1.jpg" },
        speakers: [
          { id: 1, name: "Jane", avatar: "/avatar/person-2.jpg" },
          { id: 2, name: "Mark", avatar: "/avatar/person-3.jpg" },
        ],
      },
      {
        id: 2,
        image: "/card-image-2.png",
        title: "Meeting about fitness after work",
        description:
          "Lorem ipsum is placeholder text commonly used in the graphic, print...",
        startTime: "14:00 PM",
        endTime: "15:00 PM",
        types: ["Virtual"],
        host: { name: "Tom Davis", avatar: "/avatar/person-1.jpg" },
        speakers: [
          { id: 1, name: "Jane", avatar: "/avatar/person-2.jpg" },
          { id: 2, name: "Mark", avatar: "/avatar/person-3.jpg" },
        ],
      },
    ],
  },
  {
    dateLabel: "8 May 2024",
    date: "Thursday",
    events: [
      {
        id: 3,
        image: "/card-image-2.png",
        title: "Marketing strategy discussion",
        description: "Short sync meeting for campaign goals.",
        startTime: "10:00 AM",
        endTime: "11:00 AM",
        types: ["Virtual"],
        host: { name: "Henry", avatar: "/avatar/person-4.jpg" },
        speakers: [
          { id: 1, name: "Clara", avatar: "/avatar/person-5.jpg" },
          { id: 2, name: "James", avatar: "/avatar/person-6.jpg" },
        ],
      },
    ],
  },
];
