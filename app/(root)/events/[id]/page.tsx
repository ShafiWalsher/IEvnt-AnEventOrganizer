import CheckoutButton from "@/components/shared/CheckoutButton";
import Collections from "@/components/shared/Collections";
import {
  getEventById,
  getRelatedEventsByCategory,
} from "@/lib/actions/event.actions";
import { formatDateTime } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EventDetails = async ({
  params: { id },
  searchParams,
}: SearchParamProps) => {
  const event = await getEventById(id);

  const relatedEvents = await getRelatedEventsByCategory({
    categoryId: event.category._id,
    eventId: event._id,
    page: searchParams.page as string,
  });

  // console.log(event);
  return (
    <>
      <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
          <Image
            src={event.imageUrl}
            alt="hero img"
            width={1000}
            height={1000}
            className="h-full min-h-[300px] object-cover object-center"
          />

          <div className="flex w-full flex-col gap-8 p-5 md:p-10">
            <div className="flex flex-col gap-6">
              <h2 className="h2-bold">{event.title}</h2>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex gap-3">
                  <p className="p-bold-20 rounded-xl bg-green-500/10 px-5 py-2 text-green-700">
                    {event.isFree ? "FREE" : `$${event.price}`}
                  </p>

                  <p className="p-medium-16 rounded-xl bg-grey-500/10 px-4 py-2.5 text-grey-500">
                    {event.category.name}
                  </p>
                </div>
                <p className="p-medium-18 ml-2 mt-2 sm:mt-0">
                  by{" "}
                  <span className="text-primary-500">
                    {event.organizer.firstName} {event.organizer.lastName}
                  </span>
                </p>
              </div>
            </div>

            {/* Checkout Button */}

            <CheckoutButton event={event} />
            <div className="flex flex-col gap-5">
              <div className="flex gap-2 md:gap-3 items-start">
                <Image
                  src="/assets/icons/calendar.svg"
                  alt="calendat"
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

            <div className="p-regular-20 flex items-center gap-3">
              <Image
                src="/assets/icons/location.svg"
                alt="location"
                width={32}
                height={32}
              />
              <p className="p-medium-16 lg:p-regular-20">{event.location}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="p-bold-20 text-grey-600">What You'll Learn</p>
              <p className="p-medium-16 lg:p-regular-18">{event.description}</p>
              <Link
                href={event.url}
                className="p-medium-16 lg:p-regular-18 truncate text-primary-500 underline cursor-pointer"
              >
                {event.url}
              </Link>
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
