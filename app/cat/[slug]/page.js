import { notFound } from "next/navigation";

import { DetailClient } from "@/clients";

import { cats } from "@/data/cats";
import { slugify } from "@/lib/helpers";

export async function generateStaticParams() {
  return cats.map(cat => ({
    slug: slugify(cat.name),
  }));
}

export async function generateMetadata(props) {
  const { params } = props;

  const currentCat = cats.find((cat) => slugify(cat.name) === params.slug);
  
  if (!currentCat) 
    return { title: "Not Found", description: "Cat not found." };

  const catName = currentCat.name;

  return {
    title: catName + " | Cat Breeds",
    description: `Learn everything about ${catName} cat.`,
  }
}

const CatPage = ({ params }) => {
  const currentCat = cats.find((cat) => slugify(cat.name) === params.slug);
  if (!currentCat) return notFound();

  const index = cats.findIndex((cat) => slugify(cat.name) === params.slug);
  const prevCat = cats[index - 1] || null;
  const nextCat = cats[index + 1] || null;
 
  return (
    <DetailClient 
      cat={currentCat}
      prevCat={prevCat}
      nextCat={nextCat}
    />
  )
}

export default CatPage;