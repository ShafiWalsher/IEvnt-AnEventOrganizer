export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
  {
    label: "Create Event",
    route: "/events/create",
  },
  {
    label: "My Profile",
    route: "/profile",
  },
];

export const aboutDetails = {
  about: {
    description:
      "At iEvnt, we believe that every moment is an opportunity for celebration. Our Event Organization web app is designed to make hosting, joining, and exploring events a breeze. Whether you're planning a party, workshop, or concert, we've got you covered.",
  },
  features: [
    {
      title: "Host Your Events",
      description:
        "Easily create and manage your events with our user-friendly interface. Customize details, set ticket prices, and watch the RSVPs roll in.",
    },
    {
      title: "Discover Exciting Events",
      description:
        "Explore a diverse range of events happening in your area or around the globe. From concerts to conferences, there's something for everyone.",
    },
    {
      title: "Secure Ticketing",
      description:
        "Purchase event tickets seamlessly and securely within the app. Say goodbye to long queues and paper tickets!",
    },
    {
      title: "Connect with Attendees",
      description:
        "Join the community! Interact with fellow event enthusiasts, share experiences, and stay connected before, during, and after the events.",
    },
  ],
  why: [
    {
      title: "Simplicity at its Best",
      description:
        "Our intuitive interface ensures a smooth experience for both event organizers and attendees.",
    },
    {
      title: "Safe and Secure",
      description:
        "Your data is our priority. Rest assured, we employ top-notch security measures to protect your information.",
    },
    {
      title: "Endless Possibilities",
      description:
        "Whether you're a social butterfly or a quiet observer, iEvnt offers a diverse range of events to suit every taste.",
    },
  ],
};

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  price: "",
  isFree: false,
  url: "",
};
