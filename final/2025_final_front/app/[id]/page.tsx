import { getGuestbookById } from "@/utils/api";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const guestbook = await getGuestbookById(id);

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-10 border border-gray-100">
      <div className="mb-8 border-b border-gray-200 pb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            {guestbook.data.author}
          </h2>
          <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            {guestbook.data.createdAt.split("T")[0]}
          </span>
        </div>
      </div>
      <div className="mb-8">
        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
          {guestbook.data.content}
        </p>
      </div>
      <div className="flex justify-end">
        <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold rounded-lg shadow-md transform transition hover:scale-105 hover:shadow-lg">
          삭제하기
        </button>
      </div>
    </div>
  );
};

export default page;
