
import { notFound } from "next/navigation";
import AboutMarry from "./AboutMarry";
import Hero from "../components/Hero";
import { getTeamBySlug } from "../data/investmentContent";

const Page = () => {
  const data = getTeamBySlug("mary-merrill");
  if (!data) notFound();

  return (
    <div>
      <Hero page="teamDetails" />
      <AboutMarry data={data} />
    </div>
  );
};

export default Page;
