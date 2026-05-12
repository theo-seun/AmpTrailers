import landscape from "@/assets/trailer-landscape.jpg";
import cargo from "@/assets/trailer-cargo.jpg";
import dump from "@/assets/trailer-dump.jpg";
import equipment from "@/assets/trailer-equipment.jpg";
import utility from "@/assets/trailer-utility.jpg";
import tinyhome from "@/assets/trailer-tinyhome.jpg";
import carhauler from "@/assets/trailer-carhauler.jpg";

export type TrailerCategory = {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: string;
  features: string[];
};

export const trailers: TrailerCategory[] = [
  {
    slug: "landscape",
    name: "Landscape Trailers",
    short: "Built for landscapers who need durability and easy loading every single day.",
    description:
      "Engineered for the daily demands of professional landscapers. Reinforced floors, mesh sides, and ramp gates make loading mowers, mulch, and crews effortless.",
    image: landscape,
    features: ["Heavy-gauge steel frame", "Mesh side panels", "Spring-assist ramp gate", "Treated wood floor"],
  },
  {
    slug: "cargo",
    name: "Cargo Trailers",
    short: "Enclosed protection for tools, gear, and inventory on the road.",
    description:
      "Fully enclosed trailers that keep tools, equipment, and inventory secure and weatherproof. Perfect for tradesmen, mobile businesses, and event haulers.",
    image: cargo,
    features: ["Weather-sealed construction", "Lockable side & rear doors", "LED interior lighting", "Multiple sizes"],
  },
  {
    slug: "dump",
    name: "Dump Trailers",
    short: "Hydraulic dump trailers built to handle the dirty work.",
    description:
      "Heavy-duty hydraulic dump trailers for hauling dirt, gravel, debris, and aggregate. Powerful lift, reinforced sides, and a finish that lasts.",
    image: dump,
    features: ["Hydraulic scissor lift", "Tarp kit ready", "Combo gate (spread/barn)", "Tandem dual axles"],
  },
  {
    slug: "equipment",
    name: "Equipment Trailers",
    short: "Haul skid steers, excavators, and heavy equipment with confidence.",
    description:
      "Low-profile flatbeds engineered for serious payload. Wide loading ramps and high GVWR ratings get your equipment to the jobsite safely.",
    image: equipment,
    features: ["High GVWR rating", "Stand-up ramps", "Treated deck", "Electric brakes"],
  },
  {
    slug: "utility",
    name: "Utility Trailers",
    short: "Versatile open trailers for everyday hauling needs.",
    description:
      "Lightweight, easy-to-tow utility trailers ideal for ATVs, lawn equipment, moving, and weekend projects. Practical, durable, and affordable.",
    image: utility,
    features: ["Single or tandem axle", "Folding ramp gate", "Wood plank floor", "Galvanized hardware"],
  },
  {
    slug: "tiny-home",
    name: "Tiny Home Trailers",
    short: "Purpose-built foundations for tiny home builders.",
    description:
      "Engineered chassis for tiny home construction. Built to spec with the integrity, geometry, and load ratings your build deserves.",
    image: tinyhome,
    features: ["Custom lengths", "Integrated outriggers", "Heavy-duty axles", "Build-ready deck"],
  },
  {
    slug: "car-hauler",
    name: "Car Haulers",
    short: "Open and enclosed haulers for vehicles of every size.",
    description:
      "Smooth-loading car haulers built for collectors, racers, and dealers. Strong, light, and stable at highway speeds.",
    image: carhauler,
    features: ["Slide-in or stand-up ramps", "D-ring tie downs", "Brakes on all axles", "Tongue toolbox option"],
  },
];

export const findTrailer = (slug: string) => trailers.find((t) => t.slug === slug);
