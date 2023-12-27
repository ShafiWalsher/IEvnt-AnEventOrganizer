import { IEvent } from "@/lib/database/models/event.model";
import React from "react";
import Card from "./Card";

type CollectionPros = {
  data: IEvent[];
  emptyTitle: string;
  emptyStateSubtext: string;
  collectionType?: "Event_Organized" | "My_Tickets" | "All_Events";
  limit: number;
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
};

const Collections = ({
  data,
  emptyTitle,
  emptyStateSubtext,
  collectionType,
  limit,
  page,
  totalPages,
}: CollectionPros) => {
  return (
    <>
      {data.length > 0 ? (
        <div className="flex flex-col items-center">
          <ul className="grid w-full grid-col-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {data.map((event) => {
              const hasOrderLink = collectionType === "Event_Organized";
              const hidePrice = collectionType === "My_Tickets";

              return (
                <li key={event._id} className="flex justify-center">
                  <Card
                    event={event}
                    hasOrderLink={hasOrderLink}
                    hidePrice={hidePrice}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="wrapper flex-center min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-grey-50 py-28 text-center">
          <h3 className="p-bold-20 md:h5-bold">{emptyTitle}</h3>
          <p className="p-regular-14">{emptyStateSubtext}</p>
        </div>
      )}
    </>
  );
};

export default Collections;
