import Image from "next/image";
import Link from "next/link";
import { Container } from "../container";

type headerLinkType = {
  id: string;
  label: string;
  url: string;
};

export const Header = () => {
  const headersLinks = [
    {
      id: "1",
      label: "  Про нас",
      url: "/about-us",
    },
    {
      id: "2",
      label: "Оплата і доставка",
      url: "/payment-and-delivery",
    },
    {
      id: "3",
      label: "Контакти",
      url: "/contacts",
    },
    {
      id: "4",
      label: "Блог",
      url: "/blog",
    },
  ];

  const renderHeadersLinks = (links: headerLinkType[]) => {
    return links.map((link) => (
      <li key={link.id}>
        <Link
          className="md:text-lg lg:text-sm font-[500] text-color"
          href={link.url}
        >
          {link.label}
        </Link>
      </li>
    ));
  };

  return (
    <header id="header" className="flex justify-center">
      <Container>
        {/* Left menu */}
        <ul className="flex md:gap-7 md:mb-4 justify-between lg:gap-5 lg:mb-0">
          {renderHeadersLinks(headersLinks)}
        </ul>
        {/* Right side */}
        <div className="md:justify-between flex gap-5">
          {/* Phone */}
          <p className="flex">
            <a className="font-[500]" href={`tel:+380962071551`}>
              +38 (096) 207 15 51
            </a>
            {/* add chevron icon for dropdown */}
            <Image
              src="./svg/chevron.svg"
              width={24}
              height={24}
              alt="chevron"
            />
          </p>

          {/* Lang switcher - custom radio button */}
          <div className="flex gap-2">
            <button>
              <Image src="./svg/ua.svg" alt="ua" width={29} height={14} />
            </button>
            <button>
              <Image src="./svg/en.svg" alt="en" width={27} height={14} />
            </button>
          </div>

          {/* Icons Section  */}
          <Image src="./svg/balance.svg" alt="balance" width={24} height={24} />
          <Image src="./svg/heart.svg" alt="heart" width={24} height={24} />
          <Image src="./svg/cart.svg" alt="cart" width={24} height={24} />
          <Image src="./svg/user.svg" alt="user" width={24} height={24} />
        </div>
      </Container>
    </header>
  );
};
