import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import MediumBanner from "../../components/layout/MediumBanner";
import CardRokok from "../../components/layout/CardRokok";
import PribumiRed from '../../assets/images/PR-RED-16_bg.jpg';
import PribumiOri from '../../assets/images/DK-ORG-12_bg1.jpg';
import PribumiArch from '../../assets/images/PR-CLS-12_bg.jpg';
import ManggaMadu from '../../assets/images/PR-MGM-16_bg.jpg';
import Anggur from '../../assets/images/PR-ANG-16_bg.jpg';
import JambuBiji from '../../assets/images/PR-JMB-16_bg.jpg';
import PribumiBanner from '../../assets/images/pribumimedbanner.png';
import buahbanner from '../../assets/images/buahmedbanner.png';



const RokokSection = () => {
  const pribumi_products = [
    {
      name: "Pribumi RED",
      image: PribumiRed,
      priceRetail: "Rp 25.000",
      priceBox: "250.000",
      priceWholesale: "2.400.000",
    },
    {
      name: "Pribumi Original",
      image: PribumiArch,
      priceRetail: "Rp 25.000",
      priceBox: "250.000",
      priceWholesale: "2.400.000",
    },
    {
      name: "Pribumi Archipelago",
      image: PribumiArch,
      priceRetail: "Rp 25.000",
      priceBox: "250.000",
      priceWholesale: "2.400.000",
    },
  ];

  const pribumibuah_products = [
    {
      name: "Mangga Madu",
      image: ManggaMadu,
      priceRetail: "Rp 25.000",
      priceBox: "250.000",
      priceWholesale: "2.400.000",
    },
    {
      name: "Anggur",
      image: Anggur,
      priceRetail: "Rp 25.000",
      priceBox: "250.000",
      priceWholesale: "2.400.000",
    },
    {
      name: "Jambu Biji",
      image: JambuBiji,
      priceRetail: "Rp 25.000",
      priceBox: "250.000",
      priceWholesale: "2.400.000",
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto pt-14 pb-20 bg-gray-900 text-gray-100">
      <MediumBanner
        imageSrc={PribumiBanner}
        altText="Rokok Banner"
      />

      <div className="mt-4 px-4">
        <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory hide-scrollbar">
          {pribumi_products.map((product, index) => (
            <CardRokok key={index} {...product} />
          ))}
        </div>
      </div>
      <MediumBanner
        imageSrc={buahbanner}
        altText="Rokok Banner"
      />

      <div className="mt-4 px-4">
        <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory hide-scrollbar">
          {pribumibuah_products.map((product, index) => (
            <CardRokok key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RokokSection;
