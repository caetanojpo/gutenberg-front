import Link from "next/link";
import { SocialMediaItem } from "@/types/socialMedia";
import InstagramIcon from "@/assets/icons/instagram.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";

export default function SocialMediaList() {
  const socialMedia: SocialMediaItem[] = [
    {
      icon: <InstagramIcon className="w-8 h-8 " />,
      text: "Instagram",
      link: "",
    },
    {
      icon: <LinkedinIcon className="w-8 h-8" />,
      text: "LinkedIn",
      link: "",
    },
  ];
  return (
    <div className="flex flex-col gap-8 text-[1.4rem]">
      {socialMedia.map(
        ({ icon, text, link }: SocialMediaItem, index: number) => (
          <Link href={link} key={index} className="hover:">
            <div className="flex h-full w-full gap-6 items-center hover:text-highlight">
              {icon}
              <p>{text}</p>
            </div>
          </Link>
        )
      )}
    </div>
  );
}
