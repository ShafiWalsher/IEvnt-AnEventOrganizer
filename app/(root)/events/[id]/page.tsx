import CheckoutButton from "@/components/shared/CheckoutButton";
import Collections from "@/components/shared/Collections";
import { DeleteConfirmation } from "@/components/shared/DeleteConfirmation";
import EventCountdown from "@/components/shared/EventCountdown";
import {
  getEventById,
  getRelatedEventsByCategory,
} from "@/lib/actions/event.actions";
import { formatDateTime } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const EventDetails = async ({
  params: { id },
  searchParams,
}: SearchParamProps) => {
  const event = await getEventById(id);
  // console.log(event);

  const relatedEvents = await getRelatedEventsByCategory({
    categoryId: event.category._id,
    eventId: event._id,
    page: searchParams.page as string,
  });

  // Get Organizer Id/ UserId
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  const isEventCreator = userId === event.organizer._id.toString();

  return (
    <>
      <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
        <div className="grid grid-cols-1 2xl:max-w-7xl">
          {/* Hero Section */}
          <div className="relative">
            <Image
              src={event.imageUrl}
              alt="hero img"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="h-full max-h-[550px] object-cover object-center md:rounded-b-xl shadow-xl "
            />
            <div className="hidden md:inline-block absolute bottom-0 right-0 bg_gradient p-4 rounded-tl-xl rounded-br-xl">
              <EventCountdown event={event} />
            </div>
            {/* Is Event Creator */}
            {isEventCreator && (
              <div className="absolute right-2 top-2 flex gap-4 rounded-xl bg-white p-2 shadow-sm z-50 opacity-70 hover:opacity-100 transition-all duration-100">
                <Link href={`/events/${event._id}/update`}>
                  <Image
                    src="/assets/icons/edit.svg"
                    alt="edit"
                    width={20}
                    height={20}
                  />
                </Link>
                <DeleteConfirmation eventId={event._id} />
              </div>
            )}
          </div>

          <div className="flex w-full flex-col gap-8 p-5 md:p-10 text-grey-600">
            {/* Whole Content Wrapper */}
            <div className="flex justify-between gap-4">
              {/* Title and Location */}
              <div className="flex flex-col">
                <h2 className="h1-bold orange_gradient">{event.title}</h2>
                <div className="flex items-end gap-6">
                  <div className="flex gap-2">
                    <Image
                      src="/assets/icons/location.svg"
                      alt="location"
                      width={26}
                      height={26}
                    />
                    <p className="p-medium-16 lg:p-regular-20 italic ">
                      {event.location}
                    </p>
                  </div>
                  <p className="p-medium-18">
                    by{" "}
                    <span className="text-primary-500">
                      {event.organizer.firstName} {event.organizer.lastName}
                    </span>
                  </p>
                </div>
              </div>
              {/* Checkout Button Desktop */}
              <div className="hidden sm:flex flex-col items-end gap-3 min-w-[230px]">
                <CheckoutButton event={event} />
                <Link
                  href="/sponsor"
                  rel="noreferrer"
                  target="_blank"
                  className="text-primary-500 p-medium-16"
                >
                  Become a Sponsor/Exhibitor
                </Link>
              </div>
            </div>
            {/* Price, Category Checkout Button*/}
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <p className="p-bold-20 rounded-xl bg-green-500/10 px-5 py-2 text-green-700">
                  {event.isFree ? "FREE" : `$${event.price}`}
                </p>

                <p className="p-medium-16 rounded-xl bg-grey-500/10 px-4 py-2.5 text-grey-500">
                  {event.category.name}
                </p>
              </div>
            </div>
            {/* Checkout Button for Mobile */}
            <div className="sm:hidden flex flex-col gap-3 ">
              {/* Checkout Button */}
              <CheckoutButton event={event} />
            </div>

            {/* Event Dates */}
            <div className="flex flex-col gap-5">
              <div className="flex gap-2 md:gap-3 items-start">
                <Image
                  src="/assets/icons/calendar.svg"
                  alt="calender"
                  width={32}
                  height={32}
                />

                {formatDateTime(event.startDateTime).dateOnly ===
                formatDateTime(event.endDateTime).dateOnly ? (
                  <div className="flex gap-x-10 flex-col flex-wrap p-medium-16 lg:p-regular-20">
                    <p className="text-primary-500 text-sm lg:text-md">On</p>
                    <div className="flex">
                      <p>
                        {formatDateTime(event.startDateTime).dateOnly} {" / "}
                      </p>
                      <p className="ml-2">
                        {formatDateTime(event.startDateTime).timeOnly} {" - "}
                      </p>
                      <p className="ml-2">
                        {formatDateTime(event.endDateTime).timeOnly}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-10 flex-wrap p-medium-16 lg:p-regular-20">
                    <div className="flex flex-col justify-center">
                      <p className="text-primary-500 text-sm lg:text-md">
                        Starts on
                      </p>
                      <p>{formatDateTime(event.startDateTime).dateOnly}</p>
                      <p>{formatDateTime(event.startDateTime).timeOnly}</p>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-primary-500 text-sm lg:text-md">
                        Ends on
                      </p>
                      <p>{formatDateTime(event.endDateTime).dateOnly}</p>
                      <p>{formatDateTime(event.endDateTime).timeOnly}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="p-bold-20 text-grey-600">What You'll Learn</p>
              <p className="p-regular-16 lg:p-regular-18">
                {event.description}
              </p>
              <div className="flex gap-2 items-center">
                <p className="p-medium-16 lg:p-regular-18">Website:</p>
                <Link
                  href={event.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="p-medium-16 lg:p-regular-18 truncate text-primary-500 underline cursor-pointer"
                >
                  {event.url}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events: Events from same Category */}
      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Related Events</h2>
        <Collections
          data={relatedEvents?.data}
          emptyTitle="No Related Events Found"
          emptyStateSubtext="Come Back Later!."
          collectionType="All_Events"
          limit={6}
          page={searchParams.page as string}
          totalPages={relatedEvents?.totalPages}
        />
      </section>
    </>
  );
};

export default EventDetails;
