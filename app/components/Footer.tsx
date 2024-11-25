import Link from "next/link";

const LINKS = [
  {
    title: "t.me/lucidiusss",
    link: "https://t.me/lucidiusss",
  },
  {
    title: "vk.com/lucidiusss",
    link: "https://vk.com/lucidiusss",
  },
  {
    title: "twitch.tv/lucidiusss",
    link: "https://twitch.tv/lucidiusss",
  },
  {
    title: "github.com/lucidiusss",
    link: "https://github.com/lucidiusss",
  },
];

export default function Footer() {
  return (
    <footer className="py-[70px] min-h-screen gap-5 flex flex-col items-center justify-center">
      <h1 className="xl:text-[32px] text-[#111] font-semibold">
        Thanks for checking my website!
      </h1>
      <div className="flex flex-col gap-2 items-center">
        {LINKS.map((link) => (
          <Link
            key={link.title}
            href={link.link}
            className="text-[#8a8a91] xl:text-[24px] font-medium"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </footer>
  );
}
