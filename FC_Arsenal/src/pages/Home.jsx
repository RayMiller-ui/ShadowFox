import Hero from "../components/Hero";
import LatestNews from "../components/LatestNews";
import Squad from "../components/Squad";
import ClubHistory from "../components/ClubHistory";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <LatestNews />
      <Squad />
      <ClubHistory />
      <Newsletter />
    </main>
  );
}
