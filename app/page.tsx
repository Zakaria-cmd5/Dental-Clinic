import { Button, Card } from "@radix-ui/themes";
import HomePageImage from "./components/HomePageImage";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HomePageImage />
      <div className="block rounded-lg bg-white text-center text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
        <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10">
          Opening time
        </div>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight ">Evrey day</h5>
          <p className="mb-4 text-base ">9:00 AM - 5:00 PM</p>
          <Button
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <Link href='/appointment'>Appointment</Link>
          </Button>
        </div>
        <div className="border-t-2 border-neutral-100 px-6 py-3 text-surface/75 dark:border-white/10 dark:text-neutral-300">
          0959435099
        </div>
      </div>
    </>
  );
}
