import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { Container } from "../container/container";

export const Navigation = () => {
  return (
    <nav id="navigation" className={`flex justify-center ${styles.navigation}`}>
      <Container styles="items-center md:grid md:grid-cols-2 md:grid-row-1 md:gap-y-4">
        {/* Logo */}
        <div className="logo">
          <Link href="/">
            <Image src="./svg/logo.svg" alt="logo" width={200} height={206} />
          </Link>
        </div>
        {/* Main navigation */}
        <ul className="flex gap-6 md:justify-end">
          <li>
            <div className="flex">
              <Image
                src="./svg/burger.svg"
                alt="catalog"
                width={20}
                height={20}
              />
              <Link className="text-color font-[600]" href="#catalog">
                Каталог
              </Link>
            </div>
          </li>
          <li>
            <Link className="text-color font-[600]" href="#new">
              Новинки
            </Link>
          </li>
          <li>
            <Link className="accent font-[600]" href="#sale">
              Акції
            </Link>
          </li>
          <li>
            <Link className="text-color font-[600]" href="#services">
              Послуги
            </Link>
          </li>
        </ul>

        {/* Searh form */}
        <div className="w-full md:w-full md:col-span-2 lg:max-w-sm ">
          <form
            action=""
            className="flex items-center lg:max-w-md bg-white rounded-full px-6 py-3 w-full md:w-full"
          >
            <input type="text" placeholder="" className="outline-none w-full" />
            <Image src="./svg/search.svg" alt="search" width={24} height={24} />
            <button type="submit" hidden>
              Search
            </button>
          </form>
        </div>
      </Container>
    </nav>
  );
};
