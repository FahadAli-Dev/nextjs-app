import comments_data from "../../../data/comments_data.json";

const Comments = async ({ params }) => {
  let { BlogsDetail } = await params;

  let currComment = BlogsDetail.replace("blogsdetail", "");
  let currComData = comments_data.filter((v) => v.id == currComment)[0];

  return (
    <div className="w-[900px] mx-auto mt-[20px] grid grid-cols-1 gap-[10px]">
      <h2 className="font-bold text-[30px]">Comment on this Blog</h2>
      <h2 className="font-bold text-[20px]">
        {currComData.id}:- {currComData.description}
      </h2>
      <p>{currComData.body}</p>
    </div>
  );
};

export default Comments;
