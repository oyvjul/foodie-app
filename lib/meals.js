import sql from "better-sqlite3";
import fs from "node:fs";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  // Minor hack
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  const newMeal = { ...meal };
  newMeal.slug = slugify(newMeal.title, { lower: true });
  newMeal.instructions = xss(newMeal.instructions);

  const extension = newMeal.image.name.split(".").pop();
  const fileName = `${newMeal.slug}.${extension}`;

  const bufferedImage = await newMeal.image.arrayBuffer();

  await fs.promises.writeFile(
    `public/images/${fileName}`,
    Buffer.from(bufferedImage)
  );

  newMeal.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
    `
  ).run(newMeal);
}
