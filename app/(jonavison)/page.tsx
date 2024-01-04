import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icon } from "@/components/icon";
type SocialIconName = "discord" | "facebook" | "github";

const socialIcons: {
  name: string;
  href: string;
  external: boolean;
  icon: SocialIconName; // Ensure the icon property matches the defined type
}[] = [
  {
    name: "Discord",
    href: "https://discord.com/",
    external: true,
    icon: "discord",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    external: true,
    icon: "facebook",
  },
  {
    name: "GitHub",
    href: "https://github.com/",
    external: true,
    icon: "github",
  },
  // Add other social icons if needed
];
export default function Home() {


  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl">
            Jonathan Avison
          </h1>
          <h2 className="text-foreground mt-4 text-lg font-medium tracking-tight sm:text-xl">
            Composer
          </h2>
          <p className="text-secondary mt-4 max-w-xs">
            Building and creating complex work with modern tools for the web and music industry.
          </p>

          <ul className="flex ml-1 mt-8 items-center"
          aria-label="Social Media">
            {socialIcons.map((item, index) => (
              <li className="mr-5 text-xs" key={`${index}-${item.name}`}>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : ""}
                  rel={item.external ? "noreferrer" : ""}
                  className="flex items-center space-x-2"
                >
                <Icon name={item.icon} className="h-8 w-8 text-slate-300" />
                <span className="sr-only">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nisi aut, possimus, quis explicabo in debitis ex sint voluptas quidem cupiditate ipsa cumque at nostrum vero doloremque dolore eaque excepturi, esse eius voluptatum soluta magni! Laborum ullam excepturi nostrum doloremque. Magni aspernatur nam excepturi molestiae distinctio quibusdam fugit similique qui deleniti tenetur. Velit tempore ducimus praesentium odit ipsa doloremque facilis hic ratione, veniam assumenda, cupiditate blanditiis. Natus molestias quos distinctio aliquam nostrum ipsum, officia quisquam animi minima fugiat consequuntur, explicabo assumenda mollitia eligendi itaque similique doloremque tempore. Quis, in quisquam possimus, nobis maxime illum unde blanditiis magnam ipsum impedit ullam.
      </main>
    </div>
  );
}
