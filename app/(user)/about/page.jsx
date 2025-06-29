import Link from "next/link";

const About = () => {
  return (
    <div>
      <p>
        About Page dolor, sit amet consectetur adipisicing elit. Commodi
        accusamus saepe, odit corrupti harum tenetur ratione nisi repellat, iste
        nobis dicta deserunt suscipit. Dolorum ut voluptas, ullam modi animi
        repellendus.
      </p>
      <p>
        About Page dolor, sit amet consectetur adipisicing elit. Commodi
        accusamus saepe, odit corrupti harum tenetur ratione nisi repellat, iste
        nobis dicta deserunt suscipit. Dolorum ut voluptas, ullam modi animi
        repellendus.
      </p>
      <p>
        About Page dolor, sit amet consectetur adipisicing elit. Commodi
        accusamus saepe, odit corrupti harum tenetur ratione nisi repellat, iste
        nobis dicta deserunt suscipit. Dolorum ut voluptas, ullam modi animi
        repellendus.
      </p>

      <div className="text-center mt-[30px]">
        <Link href="/about/team">
          <button className="bg-blue-600 text-white font-semibold p-[10px_25px] rounded-[6px] ">
            Our Team
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
