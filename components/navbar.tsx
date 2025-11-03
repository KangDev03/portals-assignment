'use client';
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
// import { Avatar, AvatarGroup, AvatarIcon } from "@heroui/avatar";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  PortalLogo,
  MoonIcon,
  BellIcon,
} from "@/components/icons";
import { BorderBox } from "@/components/ui/border-box";
import { Avatar } from "@/components/ui/avatar";
import { AvatarGroup } from "@heroui/avatar";

export const Navbar = () => {
  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      className=""
      classNames={{
        base: "mt-5",
        wrapper: "max-w-[700px] bg-black-90/80 p-1.5 h-fit rounded-2xl",
      }}
    >
      <div className="absolute w-[488px] h-[52px] gradient_green rounded-2xl"></div>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3.5 max-w-fit">
          <NextLink className="size-9 flex justify-center items-center gap-1 bg-black-100 rounded-[14px]" href="/portal">
            <PortalLogo />
          </NextLink>
          <p className="text-white dark:text-white">Back to Dashboard</p>
          <AvatarGroup
            max={4}
            total={3}
            renderCount={(count) => (
              <Avatar
                name={`${count} +`}
                border={false}
                size={"md"}
                radius={"lg"}
                className={"bg-gray text-white/60"}
                classNames={{
                  base: "text-sm font-medium",
                }}
              />
            )}
          >
            <Avatar name="An" size={"lg"} radius={"lg"} />
            <Avatar name="Jane" size={"lg"} radius={"lg"} />
            <Avatar name="Chau" size={"lg"} radius={"lg"} />
            <Avatar name="Binh" size={"lg"} radius={"lg"} />
            <Avatar name="Duong" size={"lg"} radius={"lg"} />
            <Avatar name="An" size={"lg"} radius={"lg"} />
          </AvatarGroup>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-1 items-center justify-center">
          <ThemeSwitch />

          <div className="w-2.5 h-0 border-white border -rotate-90 opacity-20 rounded-full"></div>

          <BorderBox>
            <BellIcon />
          </BorderBox>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Avatar name="Kang" />
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
