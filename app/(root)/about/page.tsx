import { aboutDetails } from "@/constants";
import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">
            Welcome to iEvnt – Your Ultimate Event Companion!
          </h3>
          {/* <Link href="/#events">Explore More Events</Link> */}
        </div>
      </section>
      <section className="wrapper my-8 text-black/70">
        <div className="flex flex-col gap-2 lg:gap-4">
          <p className="p-medium-20 lg:p-medium-24 text-grey-600">
            🎉 About Us
          </p>
          <p className="p-regular-14 md:p-regular-16">
            {aboutDetails.about.description}
          </p>
        </div>
        <div className="flex flex-col gap-2 lg:gap-4 mt-6">
          <p className="p-medium-20 lg:p-medium-24 text-grey-600">
            ✨ Key Features
          </p>
          <ul>
            {aboutDetails.features.map((item, i) => (
              <li key={i} className="p-regular-14 md:p-regular-16">
                <span className="p-medium-16 text-gray-700">{item.title}:</span>
                &nbsp;
                {item.description}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2 lg:gap-4 mt-6">
          <p className="p-medium-20 lg:p-medium-24 text-grey-600">
            🚀 Why iEvnt?
          </p>
          <ul>
            {aboutDetails.why.map((item, i) => (
              <li key={i} className="p-regular-14 md:p-regular-16">
                <span className="p-medium-16 text-gray-700">{item.title}:</span>
                &nbsp;
                {item.description}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <p className="p-regular-14 md:p-regular-16">
            Join us on the journey of turning every moment into a memory. Start
            your eventful experience with iEvnt today!
          </p>
          <p className="p-regular-14 md:p-regular-16">
            Ready to dive in?{" "}
            <Link href="/events/create" className="text-primary">
              Create your event &nbsp;
            </Link>
            or &nbsp;
            <Link href="/" className="text-primary">
              Explore upcoming events.
            </Link>
          </p>
          <p className="p-regular-14 md:p-regular-16">
            Let the festivities begin!🥳
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
