import Button from "../clientcomp/page.jsx";
const page = async () => {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  let response = await data.json();
  console.log(response);
  return (
    <div className="text-center mt-[20px]">
      <h1>Use Client Component in Server Component</h1>
      <Button response={response} />
    </div>
  );
};

export default page;
