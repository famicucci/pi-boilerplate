import { Card } from "@/components/Card/Card";
import { ButtonPrimary } from "./components/Buttons/ButtonPrimary";
import { TableExample } from "./components/TableExample";
import { ButtonSecondary } from "./components/Buttons/ButtonSecondary";
import { Suspense } from "react";
import { SkeletonTable } from "@/components/Skeleton";
import styles from "./styles/page.module.css";
import { ButtonAddUser } from "./components/Buttons/ButtonAddUser";
import { FormCreateUser } from "./components/FormCreateUser";

function Home() {
  return (
    <div>
      <Card>
        <p>Estos son los botones</p>
        <ButtonPrimary />
        <ButtonSecondary />
      </Card>
      <Card className={`${styles.container} ${styles.center}`}>
        <div>
          <p>Agregar un Usuario</p>
          <FormCreateUser />
        </div>
      </Card>
      <Card>
        <div className={`${styles.container} ${styles.end}`}>
          <ButtonAddUser />
        </div>
        <Suspense fallback={<SkeletonTable />}>
          <TableExample />
        </Suspense>
      </Card>
    </div>
  );
}

export default Home;
