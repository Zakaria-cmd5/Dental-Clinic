import Link from "next/link";

const HomePageImage = () => {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center bg-[url('../public/carousel-1.jpg')]"
      style={{ height: "1000px" }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <div className="flex h-full items-center justify-center">
          <div className="text-white">
            <h2 className="mb-4 text-4xl font-semibold text-white">
              Take The Best Quality Dental Treatment
            </h2>
            <button
              type="button"
              className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-white"
            >
              <Link href="/appointment">Appointment</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageImage;
