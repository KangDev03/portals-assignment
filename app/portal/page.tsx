import { ClubAvatar, InstagramIcon, PinterestIcon, PlusIcon, TiktokIcon } from "@/components/icons";
import { BorderBox } from "@/components/ui/border-box";
import { Image } from "@heroui/image";
import { Avatar } from "@/components/ui/avatar";
import { AvatarGroup } from "@heroui/avatar";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

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

            <span className="absolute w-6 h-6 bg-[#FF3A3A] rounded-full bottom-0 right-0 translate-x-1/4 translate-y-1/4" />
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
            <Button endContent={<PlusIcon />} size="sm" className="text-white bg-violet-20">
              Join
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
