import React from "react";
import Link from "next/link";
import Image from "next/image";

function PortFolios() {
  return (
    <div className="my-12 h-full w-full">
      <div className="mt-16 grid grid-cols-1 gap-8 px-8 md:grid-cols-2">
        <Link
          href={"/portfolios/portfolio1"}
          className="cursor-pointerw-full group h-full"
        >
          <div className="relative group-hover:opacity-100">
            {/* <video autoPlay loop muted id="video" className="object-contain">
              <source src="/videos/video-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}

            <div className="min-w-full h-full">
              <iframe
                src="https://player.vimeo.com/video/898607139?muted=1&amp;autoplay=1&amp;loop=1&amp;background=1&amp;app_id=122963"
                width="700"
                height="500"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="3d Truck Animation"
                data-ready="true"
                className="w-full object-cover"
              ></iframe>
            </div>

          
            <div className="absolute left-12 top-2/4 z-10 flex  min-w-[500px] flex-col">
              <h3 className="text-xl font-semibold tracking-wider text-white">
                Truck Animation
              </h3>
              <p className="text-semibold absolute bottom-0 left-0 top-8 h-full w-full tracking-wide text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Spearheading truck animations for the legal landscape. From
                initial demands to court confrontations, our animations vividly
                depict truck scenarios, enhancing comprehension and bolstering
                case impact. Efficient, precision-driven, and crafted to
                captivate the courtroom.{" "}
              </p>
            </div>
          </div>
        </Link>

        <Link href={"/portfolios/portfolio2"} className="group cursor-pointer">
          <div className="relative group-hover:opacity-100">
            {/* <video autoPlay loop muted id="video" className="object-contain">
              <source src="/videos/video-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}

            <div className="h-full">
              <iframe
                src="https://player.vimeo.com/video/742413974?muted=1&amp;autoplay=1&amp;loop=1&amp;background=1&amp;app_id=122963"
                width="700"
                height="500"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="3d Truck Animation"
                data-ready="true"
                className="w-full object-cover"
              ></iframe>
            </div>

            <div className="absolute left-12 top-2/4 z-10 flex  min-w-[500px] flex-col">
              <h3 className="text-xl font-semibold tracking-wider text-white">
                Custom Medical Graphics And Animations
              </h3>
              <p className="text-semibold absolute bottom-0 left-0 top-8 h-full w-full tracking-wide text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                In addition to being helpful for understanding injuries,
                animations can also be used to explain medical procedures. For
                example, it can show how a surgeon will repair a broken bone or
                spinal fusion. Or, it can depict the steps involved in a
                particular medical operation. This can be helpful for jurors to
                understand the nature of the injuries and the treatment that the
                injured person has received.{" "}
              </p>
            </div>
          </div>
        </Link>

        <Link href={"/portfolios/portfolio3"} className="group cursor-pointer">
          <div className="relative group-hover:opacity-100">
            <div className="">
              <Image
                src="/images/sugical-animation.jpg"
                alt="spine-illustration"
                width={1000}
                height={1000}
                layout="resposnive"
                className="object-cover"
              />
            </div>

            <div className="absolute left-12 top-2/4 z-10 flex  min-w-[500px] flex-col">
              <h3 className="text-xl font-semibold tracking-wider text-white">
                Surgical Animations
              </h3>
              <p className="text-semibold absolute bottom-0 left-0 top-8 h-full w-full tracking-wide text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                At the vanguard of surgical animations for the legal domain.
                From demands to courtroom engagements, our animations depict
                surgical procedures with unmatched clarity, enhancing
                understanding and amplifying case potency. Fast-paced,
                intricate, and unequivocally persuasive.{" "}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default PortFolios;
