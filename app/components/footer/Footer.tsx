import Link from "next/link";
import { Container } from "../container/container";
import Image from "next/image";
import styles from "./styles.module.css";
import { footerLinks } from "../../mocksData/footer";
import { Title } from "../common/title";

export const Footer = () => {
  return (
    <footer className={`flex justify-center ${styles.footer} py-10`}>
      <Container styles="items-stretch">
        {/* For Customer*/}
        <div className="flex flex-col">
          <Title type={3} styles="text-white text-base font-bold mb-4">
            {footerLinks.customer.title}
          </Title>
          <ul className="flex flex-col h-full">
            {footerLinks.customer.items.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-white text-sm">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className={`text-white text-sm ${styles.copyright}`}>
              ©{footerLinks.customer.copyRight}
            </li>
          </ul>
        </div>

        {/* Catalog */}
        <div>
          <Title type={3} styles="text-white text-base font-bold mb-4">
            {footerLinks.catalog.title}
          </Title>
          <ul>
            {footerLinks.catalog.items.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-white text-sm">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div className="flex flex-col items-start">
          <ul>
            {footerLinks.contacts.items.map((item) => (
              <li
                key={item.label}
                className="text-white text-sm pb-4  last:p:0"
              >
                {item?.icon ? (
                  <div className="flex items-center">
                    <Image
                      className="mr-2"
                      src={item.icon}
                      alt={item.label}
                      width={24}
                      height={24}
                    />
                    <a
                      className="flex"
                      href={
                        item.label === "phone"
                          ? `tel:${item.value}`
                          : `mailto:${item.value}`
                      }
                    >
                      {item?.formattedValue || item.value}
                    </a>
                  </div>
                ) : (
                  item.value
                )}
              </li>
            ))}
          </ul>
          <button className={`${styles.callback} py-2 px-3`}>
            <span className="text-white text-xs font-medium">
              ПЕРЕДЗВОНИТИ МЕНІ
            </span>
          </button>
          <ul className="flex gap-4 mt-auto">
            {footerLinks.contacts.socials.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>
                  <Image
                    src={`./svg/${item.label}.svg`}
                    alt={item.label}
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};
