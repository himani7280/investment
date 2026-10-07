import { redirect } from "next/navigation";

// Legacy route — redirect to the canonical first blog detail page
export default function BlogDetailLegacyPage() {
  redirect("/blog/smart-investment-strategies-for-long-term-wealth");
}