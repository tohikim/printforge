import cover from "../public/home-image.png";
import logoMobile from "../public/logoMobile.png";
import logoPC from "../public/logoPC.png";
import Image from "next/image";

/**
 * Challenge: Create the About page. This page will be
 * accessible at the `/about` route. (e.g. printforge.com/about)
 */

export default function Home() {
  return (
    <div className="flex flex-col gap-5 justify-around align-center w-screen h-screen p-7 md:p-10">
      <header className="flex flex-row justify-between items-center w-full mb-5">
        <div className="block md:hidden">
          <Image src={logoMobile} height={40} alt="Logo mobile" />
        </div>
        <div className="hidden md:block">
          <Image src={logoPC} height={40} alt="Logo PC" />
        </div>
        {/*replace below with the nav componenet later */}
        <div className="flex flex-row gap-5 justify-around max-w-[50%]">
          <p>3D MODELS</p>
          <p>ABOUT</p>
        </div>
      </header>
      <div className="flex flex-col md:flex-row md:justify-around items-center gap-20 h-full">
        <div className="flex flex-col gap-5 justify-center items-left md:max-w-[38%] ">
          <div className="hidden md:block">
            <p>Your go-to platform for 3D printing files</p>
          </div>
          <h1 className="font-bold text-4xl">
            Discover what's possible with 3D printing
          </h1>
          <p className="text-xl">
            Join our community of creators and explore a vast library of
            user-submitted models.
          </p>
          {/* add onClick logic later*/}
          <button className="mt-7 text-xl border-2 border-black w-fit px-5 py-2 bg-white opacity-100">
            BROWSE MODELS
          </button>
        </div>
        <div className="flex justify-center items-center md:h-fit md:max-w-[40%]">
          <Image src={cover} alt="cover image" />
        </div>
      </div>
      <footer></footer>
    </div>
  );
}
