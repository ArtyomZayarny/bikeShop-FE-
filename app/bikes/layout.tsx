import { Container } from "../components/container";
import styles from "./styles.module.css";

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={`${styles.category} flex justify-center`}>
      <Container styles="h-full lg:pt-6">
        <div className="flex flex-col w-full">{children}</div>
      </Container>
    </main>
  );
}
