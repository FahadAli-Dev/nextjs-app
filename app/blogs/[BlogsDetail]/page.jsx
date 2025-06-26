import data from "../../data/blogsData.json";

async function BlogsDetail({ params }) {
  let { BlogsDetail } = await params;
  let currentData = data.filter((v) => v.id == BlogsDetail)[0];

  return (
    <div>
      <h2 className="w-[900px] m-[20px_auto_10px_auto] font-bold text-[20px]">
        {currentData.id}.{currentData.title}
      </h2>
      <p>{currentData.body}</p>
    </div>
  );
}

export default BlogsDetail;
