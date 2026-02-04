import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { CircularGallery } from "./ui/circular-gallery-2";
import ademAmri from "@/assets/Ambassadors/tunisian/Adem Amri.jpg";
import ahmedAoun from "@/assets/Ambassadors/tunisian/Ahmed Aoun.jpg";
import alaJouili from "@/assets/Ambassadors/tunisian/Ala Jouili.jpg";
import ayhemCharbib from "@/assets/Ambassadors/tunisian/Ayhem Charbib.jpg";
import ayoubBougacha from "@/assets/Ambassadors/tunisian/Ayoub Bougacha.jpg";
import ferdawesBouslema from "@/assets/Ambassadors/tunisian/Ferdawes Bouslema.jpg";
import ghaziDabbech from "@/assets/Ambassadors/tunisian/Ghazi Dabbech.jpg";
import helmiMejri from "@/assets/Ambassadors/tunisian/Helmi Mejri.jpg";
import houssemEddinKhoildi from "@/assets/Ambassadors/tunisian/Houssem Eddin Khoildi.jpg";
import ibrahimArgoubi from "@/assets/Ambassadors/tunisian/Ibrahim Argoubi.jpg";
import mayGaddour from "@/assets/Ambassadors/tunisian/May Gaddour.jpg";
import mohamedCherif from "@/assets/Ambassadors/tunisian/Mohamed Cherif.jpg";
import mohammedAzizBenAmor from "@/assets/Ambassadors/tunisian/Mohammed Aziz Ben Amor.jpg";
import mokhlesHammami from "@/assets/Ambassadors/tunisian/Mokhles Hammami.jpg";
import mouhamedAmineKabtani from "@/assets/Ambassadors/tunisian/Mouhamed Amine Kabtani.jpg";
import nourIslemOuni from "@/assets/Ambassadors/tunisian/Nour Islem Ouni.jpg";
import olfaBoutiti from "@/assets/Ambassadors/tunisian/Olfa Boutiti.jpg";
import oumaymaZoubeir from "@/assets/Ambassadors/tunisian/Oumayma Zoubeir.jpg";
import refkaMimouni from "@/assets/Ambassadors/tunisian/Refka Mimouni.jpg";
import tasnimSaidi from "@/assets/Ambassadors/tunisian/Tasnim Saidi.jpg";
import yassineBenAbdallah from "@/assets/Ambassadors/tunisian/Yassine Ben Abdallah.jpg";
import yousefAbdelGhafer from "@/assets/Ambassadors/tunisian/Yousef AbdelGhafer.jpg";

// Ambassador images
const ambassadorItems = [
  {
    image: ademAmri,
    text: "Adem Amri",
  },
  {
    image: ahmedAoun,
    text: "Ahmed Aoun",
  },
  {
    image: alaJouili,
    text: "Ala Jouili",
  },
  {
    image: ayhemCharbib,
    text: "Ayhem Charbib",
  },
  {
    image: ayoubBougacha,
    text: "Ayoub Bougacha",
  },
  {
    image: ferdawesBouslema,
    text: "Ferdawes Bouslema",
  },
  {
    image: ghaziDabbech,
    text: "Ghazi Dabbech",
  },
  {
    image: helmiMejri,
    text: "Helmi Mejri",
  },
  {
    image: houssemEddinKhoildi,
    text: "Houssem Eddin Khoildi",
  },
  {
    image: ibrahimArgoubi,
    text: "Ibrahim Argoubi",
  },
  {
    image: mayGaddour,
    text: "May Gaddour",
  },
  {
    image: mohamedCherif,
    text: "Mohamed Cherif",
  },
  {
    image: mohammedAzizBenAmor,
    text: "Mohammed Aziz Ben Amor",
  },
  {
    image: mokhlesHammami,
    text: "Mokhles Hammami",
  },
  {
    image: mouhamedAmineKabtani,
    text: "Mouhamed Amine Kabtani",
  },
  {
    image: nourIslemOuni,
    text: "Nour Islem Ouni",
  },
  {
    image: olfaBoutiti,
    text: "Olfa Boutiti",
  },
  {
    image: oumaymaZoubeir,
    text: "Oumayma Zoubeir",
  },
  {
    image: refkaMimouni,
    text: "Refka Mimouni",
  },
  {
    image: tasnimSaidi,
    text: "Tasnim Saidi",
  },
  {
    image: yassineBenAbdallah,
    text: "Yassine Ben Abdallah",
  },
  {
    image: yousefAbdelGhafer,
    text: "Yousef AbdelGhafer",
  },
];

function Ambassadors() {
  const mainRef = useRef<HTMLDivElement>(null);
  const godsTextRef = useRef<HTMLSpanElement>(null);
  const ambassadorsTextRef = useRef<HTMLSpanElement>(null);
  const galleryContainerRef = useRef<HTMLDivElement>(null);

  // Entrance animations
  useGSAP(() => {
    // GODS text appears
    gsap.fromTo(
      godsTextRef.current,
      {
        y: -50,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // "Ambassadors" text appears
    gsap.fromTo(
      ambassadorsTextRef.current,
      {
        x: 30,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        delay: 0.2,
      }
    );

    // Gallery appears
    gsap.fromTo(
      galleryContainerRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        delay: 0.5,
      }
    );
  }, { scope: mainRef });

  return (
    <section
      ref={mainRef}
      id="ambassadors"
      className="relative w-full bg-background overflow-hidden py-4"
    >
      {/* Title: "GODS Ambassadors" */}
      <div className="sticky top-16 z-20 flex items-center justify-center gap-4 mb-4">
        <span
          ref={godsTextRef}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight opacity-0"
        >
          GODS
        </span>
        <span
          ref={ambassadorsTextRef}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight opacity-0"
        >
          Ambassadors
        </span>
      </div>

      {/* Circular Gallery with Ambassador Photos */}
      <div
        ref={galleryContainerRef}
        className="relative w-full h-[400px] sm:h-[450px] lg:h-[500px] opacity-0"
      >
        <CircularGallery
          items={ambassadorItems}
          bend={3}
          borderRadius={0.05}
          scrollSpeed={2}
          scrollEase={0.05}
          autoScroll={true}
          autoScrollSpeed={0.07}
          className="text-white"
        />
      </div>
    </section>
  );
}

export default Ambassadors;
