import { CourseListing } from "../../components/ui/course-listing";

const HomePage = () => {
  return (
    <div className="container mx-auto p-4 max-w-screen-md space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-4">Hoy</h2>
          <CourseListing
            company="SimplePractice"
            title="Customer Success - Support Specialist"
            location="North America"
            time="7 hours ago"
            salary="$25k-$50k"
            type="Full-time"
            tags={["Customer Support"]}
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Ayer</h2>
          <CourseListing
            company="UL"
            title="Sales Executive, Renewables"
            location="North America"
            time="yesterday"
            salary="$75k-$100k"
            type="Full-time"
            tags={["Sales", "Executive", "+1 more"]}
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Ultimos 30 días</h2>
          {[
            "Dandy",
            "SeatGeek",
            "ID.me",
            "Nick Gray",
            "Maze",
            "SteadyMD",
            "Workiva",
          ].map((company, index) => (
            <CourseListing
              key={index}
              company={company}
              title="Job Title"
              location="North America"
              time={`${index + 3} days ago`}
              salary="$100k+"
              type="Full-time"
              tags={["Tag 1", "Tag 2"]}
            />
          ))}
        </section>
    </div>
  );
};

export default HomePage;
