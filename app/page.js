import NavBar from "@/components/navbar/navbar";
import Hero from "@/components/hero";
import Form from "@/components/common/form";

export default function Home() {
  return (
    <main>
      <Form username={"username"} password={"password"}/>
      <NavBar />
      <Hero />
    </main>
  );
}
