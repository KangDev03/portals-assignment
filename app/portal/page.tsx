import { Clock, ClubAvatar, InstagramIcon, LayoutGrid, ListIcon, PinterestIcon, PlusCircleIcon, PlusIcon, RocketIcon, TiktokIcon } from "@/components/icons";
import { BorderBox } from "@/components/ui/border-box";
import { Image } from "@heroui/image";
import { Avatar } from "@/components/ui/avatar";
import { AvatarGroup } from "@heroui/avatar";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { CustomButton } from "@/components/ui/button";
import EventTimeline from "@/components/event-timeline";
import { MyCard } from "@/components/ui/card";

const mockEvents = [
  {
    dateLabel: "Today",
    date: "Wed, 7 May",
    events: [
      {
        id: 1,
        startTime: "11:00 AM",
        endTime: "12:30 PM",
        status: "Now",
        types: ["In-person", "Virtual"],
        title: "Meeting about fitness after work",
        description:
          "Lorem ipsum is placeholder text commonly used in the graphic, print...",
        image: "/images/meeting-fitness.jpg",
        host: {
          name: "Tom Davis",
          avatar: "/avatars/tom-davis.png",
        },
        speakers: [
          { id: 1, name: "Speaker 1", avatar: "/avatars/s1.png" },
          { id: 2, name: "Speaker 2", avatar: "/avatars/s2.png" },
        ],
      },
      {
        id: 2,
        startTime: "14:00 PM",
        endTime: "15:00 PM",
        status: "Upcoming",
        types: ["Virtual"],
        title: "Meeting about fitness after work",
        description:
          "Lorem ipsum is placeholder text commonly used in the graphic, print...",
        image: "/images/meeting-fitness.jpg",
        host: {
          name: "Tom Davis",
          avatar: "/avatars/tom-davis.png",
        },
        speakers: [
          { id: 1, name: "Speaker 1", avatar: "/avatars/s1.png" },
          { id: 2, name: "Speaker 2", avatar: "/avatars/s2.png" },
          { id: 3, name: "Speaker 3", avatar: "/avatars/s3.png" },
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
        startTime: "09:00 AM",
        endTime: "10:30 AM",
        status: "Upcoming",
        types: ["Virtual"],
        title: "Design system weekly sync",
        description:
          "Discussion about new UI components and accessibility improvements.",
        image: "/images/design-meeting.jpg",
        host: {
          name: "Sophia Lee",
          avatar: "/avatars/sophia-lee.png",
        },
        speakers: [
          { id: 1, name: "Ethan", avatar: "/avatars/ethan.png" },
          { id: 2, name: "Mia", avatar: "/avatars/mia.png" },
        ],
      },
      {
        id: 4,
        startTime: "16:00 PM",
        endTime: "17:00 PM",
        status: "Upcoming",
        types: ["In-person"],
        title: "Product retrospective meeting",
        description:
          "Review last sprint's achievements and plan improvements for the next cycle.",
        image: "/images/retrospective.jpg",
        host: {
          name: "Daniel Green",
          avatar: "/avatars/daniel-green.png",
        },
        speakers: [
          { id: 1, name: "Sarah", avatar: "/avatars/sarah.png" },
          { id: 2, name: "John", avatar: "/avatars/john.png" },
        ],
      },
    ],
  },
];


const avatars = [
  { name: "Jane", src: "/avatar/person-1.jpg" },
  { name: "An", src: "/avatar/person-2.jpg" },
  { name: "Hoang", src: "/avatar/person-3.jpg" },
];

const socialIcons = [
  { icon: InstagramIcon, label: "Instagram" },
  { icon: PinterestIcon, label: "Pinterest" },
  { icon: TiktokIcon, label: "Tiktok" },
]

const RecentlyUpdated = () => {
  const posts = [
    {
      id: 1,
      image: "/card-image.png",
      title: "How we plan the beautiful trip in Bali, Indonesia",
      updated: "43 mins ago",
      host: "/avatar/person-1.jpg",
      members: [
        { name: "Jane", src: "/avatar/person-2.jpg" },
        { name: "Tom", src: "/avatar/person-3.jpg" },
      ],
    },
    {
      id: 2,
      image: "/card-image.png",
      title: "How we plan the beautiful trip in Bali, Indonesia",
      updated: "2 days ago",
      host: "/avatar/person-1.jpg",
      members: [
        { name: "Jane", src: "/avatar/person-2.jpg" },
        { name: "Tom", src: "/avatar/person-3.jpg" },
      ],
    },
    {
      id: 3,
      image: "/card-image.png",
      title: "How we plan the beautiful trip in Bali, Indonesia",
      updated: "2 weeks ago",
      host: "/avatar/person-1.jpg",
      members: [
        { name: "Jane", src: "/avatar/person-2.jpg" },
        { name: "Tom", src: "/avatar/person-3.jpg" },
      ],
    },
    {
      id: 4,
      image: "/card-image.png",
      title: "How we plan the beautiful trip in Bali, Indonesia",
      updated: "a month ago",
      host: "/avatar/person-1.jpg",
      members: [
        { name: "Jane", src: "/avatar/person-2.jpg" },
        { name: "Tom", src: "/avatar/person-3.jpg" },
      ],
    },
  ];

  return (
    <section>
      <h4 className="text-xl font-medium mb-8.5 text-left">Recently updated</h4>
      <div className="grid grid-cols-4 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="relative"
          >
            <div className="absolute -top-2.5 left-3 w-[186px] h-[131px] -rotate-[3deg] rounded-2xl p-[1px] bg-gradient-to-br from-[#3E3E3E] to-[#2D2C2F00] -z-0">
              <div className="w-full h-full bg-black-90 rounded-2xl"></div>
            </div>

            <div className="relative w-full h-[205px] rounded-2xl overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute w-full h-full p-4 flex flex-col justify-between">
                <div className="flex flex-row justify-between items-center">
                  <span className="size-2.75 bg-red-10 rounded-[4px]" />
                  <div className="flex space-x-2">
                    {post.members.map((m, i) => (
                      <Avatar
                        key={i}
                        src={m.src}
                        name={m.name}
                        size="sm"
                        radius="md"
                        border={false}
                      />
                    ))}
                  </div>
                </div>

                <div className="text-left">
                  <h5 className="font-medium text-lg line-clamp-2">
                    {post.title}
                  </h5>
                  <p className="text-xs font-normal opacity-30 mt-0.5 mb-1.25">
                    Updated {post.updated}
                  </p>
                  <Avatar
                    src={post.host}
                    radius="md"
                    border={false}
                    classNames={{
                      base: "size-6"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Events = () => {
  return (
    <section>
      <div className="flex flex-row justify-between mb-8">
        <h4 className="text-xl font-medium text-left">Events</h4>
        <div className="flex flex-row gap-2.5">
          <CustomButton endContent={<PlusIcon />} variant="secondary">
            Submit Event
          </CustomButton>
          <div className="flex flex-row px-1 gap-2">
            <BorderBox variant="green-gradient" rounded="sm">
              <ListIcon />
            </BorderBox>
            <BorderBox rounded="sm">
              <LayoutGrid />
            </BorderBox>
          </div>
        </div>
      </div>
      <div>
        <EventTimeline />
      </div>
    </section>
  );
};

const RecentActivity = () => {
  type ActivityType = 'badge' | 'plus';

  const activities = [
    { user: "Amalia", action: "avarded badge during event", time: "10 mins ago", type: "badge" as ActivityType },
    { user: "Amalia", action: "avarded badge during event", time: "10 mins ago", type: "plus" as ActivityType },
    { user: "Amalia", action: "avarded badge during event", time: "10 mins ago", type: "badge" as ActivityType },
    { user: "Henry", action: "joined event", time: "12 mins ago", type: "plus" as ActivityType },
  ];

  const iconMap: Record<ActivityType, { bg: string; icon: typeof RocketIcon }> = {
    badge: { bg: "bg-green-10", icon: RocketIcon },
    plus: { bg: "bg-orange", icon: PlusCircleIcon },
  };

  return (
    <aside className="relative mt-16.75 bg-black-90 rounded-2xl border border-gray-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      <h4 className="text-base font-medium mt-5 mb-4 mx-5 text-left">Recent activity</h4>
      <div>
        {activities.map((a, i) => {
          const { bg: iconBg, icon: IconComponent } = iconMap[a.type] || {
            bg: "bg-gray-500",
            icon: RocketIcon,
          };
          return (
            <div key={i} className=" flex items-center py-2 px-5 gap-3">
              <div className="relative">
                <Avatar name={a.user} size="lg" radius="lg" className="flex-shrink-0" />
                <div className={`absolute flex justify-center items-center size-3.5 ${iconBg} border border-black rounded-full -bottom-0.75 -right-1.25`}>
                  <IconComponent />
                </div>
              </div>
              <div className="flex flex-col text-left">
                <p className="text-base">
                  {a.user} {a.action} <span className="text-base text-white/60">{a.time}</span>
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </aside>
  );
};

const TimeZone = () => {
  return (
    <MyCard size="lg" className="gap-2 flex flex-row items-center text-wrap">
      <Clock />
      <p className="text-base font-normal text-white/50">Time in your location</p>
      <span className="text-base font-normal ml-0.75">1:14 PM</span>
    </MyCard>
  )
}

export default function PortalPage() {
  return (
    <>
      <div className="relative w-full">
        <Image
          alt="HeroUI hero Image"
          src="/page-header-background.png"
          width="100%"
          className="w-full h-auto object-cover z-0"
        />

        <div className="absolute -bottom-2 left-17 z-1">
          <div className="relative inline-block">
            <BorderBox
              className="size-[100px]"
              variant="violet-transparent"
              rounded="lg"
            >
              <ClubAvatar />
            </BorderBox>

            <span className="absolute w-6 h-6 bg-red rounded-full bottom-0 right-0 translate-x-1/4 translate-y-1/4" />
          </div>
        </div>
      </div>

      <div className="pt-10 px-17">
        <div className="flex flex-row items-end">
          <div className="space-y-4">
            <div className="flex flex-row items-center gap-4">
              <h3 className="font-medium text-[40px]">Running Club</h3>
              <AvatarGroup>
                {
                  avatars.map((avatar) => (
                    <Avatar
                      key={avatar.name}
                      size="lg"
                      radius="lg"
                      name={avatar.name}
                      src={avatar.src}
                    />
                  ))
                }
              </AvatarGroup>
            </div>
            <p className="text-start opacity-60 font-normal text-lg">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries</p>
          </div>

          <div className="flex flex-row items-center h-fit ml-auto">
            {
              socialIcons.map(({ icon: Icon, label }) => (
                <Link key={label} isExternal aria-label={label} className="mr-4">
                  <Icon className="text-white opacity-30" />
                </Link>
              ))
            }
            <CustomButton endContent={<PlusIcon />}>
              Join
            </CustomButton>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_283px] gap-5 mt-16 px-17">
        <div className="flex flex-col gap-8">
          <RecentlyUpdated />
          <Events />
        </div>

        <div className="flex flex-col gap-5">
          <RecentActivity />
          <TimeZone />
        </div>
      </div>

    </>
  );
}
