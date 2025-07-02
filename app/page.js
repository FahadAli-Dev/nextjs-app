import Image from "next/image";
import img from "@/public/img.webp";

const Home = () => {
  return (
    <div>
      <h1 className="font-nanum-gothic font-bold text-[25px] text-center">
        Home
      </h1>
      <div className="max-w-[350px] h-[300px] mx-auto relative">
        <Image
          src={img}
          alt="img"
          fill={true}
          sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
          quality={100}
          priority={false}
          placeholder="blur"
          blurDataURL=""
        />
      </div>
      <p className="font-roboto w-[900px] mx-auto mt-[20px]">
        A quick brown fox jumps over the lazy dog.A quick brown fox jumps over
        the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown
        fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog.
        A quick brown fox jumps over the lazy dog. A quick brown fox jumps over
        the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown
        fox jumps over the lazy dog.A quick brown fox jumps over the lazy dog.A
        quick brown fox jumps over the lazy dog.A quick brown fox jumps over the
        lazy dog.A quick brown fox jumps over the lazy dog.A quick brown fox
        jumps over the lazy dog.A quick brown fox jumps over the lazy dog.A
        quick brown fox jumps over the lazy dog.A quick brown fox jumps over the
        lazy dog.A quick brown fox jumps over the lazy dog.A quick brown fox
        jumps over the lazy dog.A quick brown fox jumps over the lazy dog.A
        quick brown fox jumps over the lazy dog.A quick brown fox jumps over the
        lazy dog.A quick brown fox jumps over the lazy dog.A quick brown fox
        jumps over the lazy dog.A quick brown fox jumps over the lazy dog.A
        quick brown fox jumps over the lazy dog.A quick brown fox jumps over the
        lazy dog.
      </p>
    </div>
  );
};

export default Home;
