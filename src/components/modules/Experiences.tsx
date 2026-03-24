import experiences from "@/data/experiences";
import ExperienceCard from "../ui/ExperienceCard";

export default function Experiences() {
  return (
    <section className="p-20 max-w-360 mx-auto">
      <h1 className="font-bold text-5xl mb-12 max-w-200 text-balance leading-tight">
        My Experiences
      </h1>

      <div className="relative mx-auto flex flex-col">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </section>
  );
}

