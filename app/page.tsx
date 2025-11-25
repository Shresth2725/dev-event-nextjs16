import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";

const events = [
  {
    image: "/images/event1.png",
    title: "Event 1",
    slug: "event-1",
    location: "location-1",
    date: "Date-1",
    time: "Time-1",
  },
  {
    image: "/images/event2.png",
    title: "Event 2",
    slug: "event-2",
    location: "location-2",
    date: "Date-1",
    time: "Time-1",
  },
  {
    image: "/images/event3.png",
    title: "Event 3",
    slug: "event-3",
    location: "location-3",
  },
];

const page = () => {
  return (
    <div>
      <h1 className="text-center">
        The Hub for Every Day <br /> Event You Cant Miss
      </h1>
      <p className="text-center mt-5 ">
        Hackathons, Meetups, and Conferences all in One Place
      </p>

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events">
          {events.map((event) => (
            <li key={event.title}>
              <EventCard {...event}></EventCard>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
