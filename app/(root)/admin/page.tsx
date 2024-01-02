import { getAllFeedbacks } from "@/lib/actions/feedback.actions";
import { IFeedbackItem } from "@/lib/database/models/feedback.model";

const AdminDashboard = async () => {
  const feedbacks = await getAllFeedbacks();
  return (
    <>
      <section className=" bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left ">Feedbacks</h3>
      </section>

      <section className="wrapper overflow-x-auto">
        <table className="w-full border-collapse border-t">
          <thead>
            <tr className="p-medium-14 border-b text-grey-500">
              <th className="min-w-[100px] py-3 text-left">Feedback ID</th>
              <th className="min-w-[80px] py-3 text-left">Name</th>
              <th className="min-w-[200px] flex-1 py-3 pr-4 text-left">
                Feedback Message
              </th>
            </tr>
          </thead>
          <tbody>
            {feedbacks && feedbacks.length === 0 ? (
              <tr className="border-b">
                <td colSpan={5} className="py-4 text-center text-gray-500">
                  No Feedbacks Yet!.
                </td>
              </tr>
            ) : (
              <>
                {feedbacks &&
                  feedbacks.map((row: IFeedbackItem) => (
                    <tr
                      key={row._id}
                      className="p-regular-14 lg:p-regular-16 border-b "
                      style={{ boxSizing: "border-box" }}
                    >
                      <td className="min-w-[250px] py-4 text-primary-500">
                        {row._id}
                      </td>
                      <td className="min-w-[200px] flex-1 py-4 pr-4">
                        {row.name}
                      </td>
                      <td className="min-w-[150px] py-4">{row.message}</td>
                    </tr>
                  ))}
              </>
            )}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default AdminDashboard;
