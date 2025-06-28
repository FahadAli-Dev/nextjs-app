import blogsData from "../../data/blogsData.json";
import Link from "next/link";
import comments_data from "../../data/comments_data.json";

async function BlogsDetail({ params }) {
  let { BlogsDetail } = await params;
  let currId = BlogsDetail.replace("blogsdetail", "");
  let currentData = blogsData.filter((v) => v.id == currId)[0];
  let currComment = comments_data.filter((v) => v.id == currentData.id)[0];

  return (
    <div className="w-[900px] mx-auto grid grid-cols-1 gap-[10px] mt-[20px]">
      <h2 className="font-bold text-[30px]">Blog Detail</h2>
      <h2 className=" font-bold text-[20px]">
        {currentData.id}.{currentData.title}
      </h2>
      <p>{currentData.body}</p>
      <div>
        <Link href={`/blogs/${currentData.url}/${currComment.title}`}>
          <button className="bg-blue-500 text-white p-[5px_10px] rounded-[4px]">
            Read Comment
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BlogsDetail;
