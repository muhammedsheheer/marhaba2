import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const JoinUs = ({}) => {
  return (
    <section
      className="relative flex h-screen w-full items-center justify-center"
      style={{
        backgroundImage: `url('/images/about-us/4.webp')`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="z-10 flex h-full w-full flex-col-reverse items-center justify-center gap-4 md:flex-row">
        <div className="flex h-full w-full flex-col items-center justify-center gap-[2.5rem] p-6">
          <h1 className="max-w-[500px] text-center font-marcellus text-4xl text-[#fff] md:text-5xl md:leading-[60px]">
            Gather in Harmony
            <br />
            Savor Every Moment
          </h1>
          <p className="max-w-[450px] text-center font-playfair font-[500] leading-[160%] text-[#ffff]">
            Inspired by the spirit of Marhaba, we welcome you to a place where
            food becomes more than sustenance — it becomes a gesture of unity,
            love, and heartfelt gratitude. Whether you’re seeking a quiet
            evening of reflection or a joyful gathering with those you cherish,
            each dish is prepared with genuine care, each flavour tells a story,
            and every moment invites you to savour the present with an open
            heart and soul.
          </p>

          <Link href={"/table-booking"}>
            <Button
              variant="outline"
              className="group w-fit items-center gap-[1.19rem] border-[#fff] bg-transparent px-6 py-6 font-semibold uppercase text-[#fff] hover:bg-[#000] md:px-7 md:py-7"
            >
              Book Now{" "}
              <Icons.rightArrow className="text-[#fff] duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
