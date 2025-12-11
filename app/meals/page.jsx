import Link from "next/link";
import classes from "./page.module.css";
import loadingClasses from "./loading.module.css";

import { Suspense } from "react";
import Meals from "./Meals";

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>Delicious meals, created </h1>
        <span className={classes.highlight}>by you</span>
        <p>Choose your favorite recipe and cook it yourself</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={loadingClasses.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
