"use client";
import Image from "next/image";
import MainImage from "../../public/image 1.png";
import Button from "../components/button/button";
import TermsAndPrivacy from "../components/modals/terms-and-privacy/terms-and-privacy";
import { useTermsModalStore } from "../store/useTermsModal";

export default function Home() {
  const { openTermsModal } = useTermsModalStore();

  return (
    <div className="h-screen w-full bg-primaryAvolta flex flex-col items-center justify-center ">
      <p className=" text-white text-center font-bold text-5xl pt-9 pb-8">
        Club Avolta
      </p>

      <div className="relative w-full  h-full bg-black rounded-t-56px overflow-hidden">
        <Image
          src={MainImage}
          alt="Main image"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center text-center text-white w-full px-[400px]">
          <p className="font-bold text-[104px] leading-[124px] pb-7">
            Step into the World of Style!
          </p>
          <p className="font-medium text-4xl mt-2 pb-7">
            Find sunglasses that fit your vibe perfectly.
          </p>

          <Button
            onClick={openTermsModal}
            label="Get Started!"
            rounded
            variant="secondary"
            className=" w-auto px-20 py-5 text-lg font-bold"
          />
        </div>
      </div>

      <TermsAndPrivacy />
    </div>
  );
}
