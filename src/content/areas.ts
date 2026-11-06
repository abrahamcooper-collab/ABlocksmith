/**
 * Service areas (see PROJECT.md → Service-area pages).
 *
 * `serviceAreaPages` are the Phase 1 towns that get their own page.
 * `gbpServiceAreas` is the full 20-area list set on the Google Business
 * Profile; it feeds the schema `areaServed` and the "also serving" lists.
 *
 * Copy rules: only state local facts we are sure of. No driving distances or
 * response times, since none have been verified.
 */
import { business } from "@/config/business";
import type { ServiceArea } from "./types";

const PHONE = business.phone;

export const serviceAreaPages: readonly ServiceArea[] = [
  {
    slug: "locksmith-twin-falls-id",
    town: "Twin Falls",
    county: "Twin Falls County",
    zip: "83301",
    metaTitle: "Locksmith in Twin Falls, ID | A & B Locksmiths LLC",
    metaDescription: `Local locksmith serving every Twin Falls neighborhood: car and house lockouts, rekeying and lock changes. Call A & B Locksmiths at ${PHONE}.`,
    h1: "Locksmith in Twin Falls, ID",
    tagline: "Our home base, and the neighborhoods we know best.",
    intro: [
      "Twin Falls is home for A & B Locksmiths. As a [[locksmith in Twin Falls, ID]], we help drivers, homeowners, renters and local businesses across the city, from the older streets near downtown to the newer subdivisions on the edges of town.",
      "Most of our calls here are car lockouts, house lockouts, rekeys after a move and complete lock changes. Because we're based locally, you're calling the people who will actually show up, not a call centre that passes your job along.",
    ],
    local: {
      heading: "Serving all of Twin Falls",
      paragraphs: [
        "As the county seat and the largest city in the Magic Valley, Twin Falls has everything from established family homes to apartments, rentals and busy shopping areas. That means lockouts happen everywhere: in grocery store car parks, at the College of Southern Idaho, at trailheads along the Snake River Canyon rim and in driveways at seven in the morning.",
        "New residents keep arriving too, and every home purchase is a good reason to [[rekey locks in Twin Falls]]. Previous owners, builders and contractors may all still have keys. We can rekey your existing locks or install new ones keyed alike, so one key works on every door.",
      ],
    },
  },
  {
    slug: "locksmith-kimberly-id",
    town: "Kimberly",
    county: "Twin Falls County",
    zip: "83341",
    metaTitle: "Locksmith in Kimberly, ID | A & B Locksmiths LLC",
    metaDescription: `Locksmith in Kimberly, ID for car and house lockouts, rekeying and complete lock changes. Local Twin Falls County locksmiths. Call ${PHONE}.`,
    h1: "Locksmith in Kimberly, ID",
    tagline: "Lockouts, rekeys and lock changes for Kimberly homes and drivers.",
    intro: [
      "Kimberly has grown quickly, with new families moving into new and established homes alike. A & B Locksmiths is a [[locksmith serving Kimberly, ID]], providing the residential lock and key work a growing town needs.",
      "Whether you've locked your keys in the car before school drop-off or just closed on a house and want to know who still has a key, we can help.",
    ],
    local: {
      heading: "A growing town with plenty of new homeowners",
      paragraphs: [
        "Kimberly sits just east of Twin Falls along US-30, and many residents commute between the two. That's a lot of driving, and a lot of chances to lock keys in a vehicle. Our [[car lockout service]] covers Kimberly driveways, school car parks and local businesses.",
        "For new homeowners, we recommend rekeying or changing the locks soon after moving in. In newer builds, keys may have passed through builders, trades and real estate lockboxes; in older homes, previous owners may have handed out copies over the years. Rekeying puts you back in control.",
      ],
    },
  },
  {
    slug: "locksmith-jerome-id",
    town: "Jerome",
    county: "Jerome County",
    zip: "83338",
    metaTitle: "Locksmith in Jerome, ID | A & B Locksmiths LLC",
    metaDescription: `Locksmith serving Jerome, ID: car lockouts, house lockouts, rekeying and lock changes for homes and businesses. Call A & B Locksmiths at ${PHONE}.`,
    h1: "Locksmith in Jerome, ID",
    tagline: "Across the canyon, and still part of our service area.",
    intro: [
      "Jerome is the county seat of Jerome County, just north of Twin Falls across the Snake River Canyon. A & B Locksmiths serves Jerome as a [[locksmith in Jerome, ID]], with the same car lockout, house lockout, rekeying and lock change services we provide in Twin Falls.",
      "Jerome has a strong residential base, from homes in town to farms and acreages outside it, and we work on both.",
    ],
    local: {
      heading: "Homes, farms and businesses in Jerome County",
      paragraphs: [
        "Jerome sits along the I-84 corridor, and plenty of residents drive it daily for work. If you lock your keys in a vehicle at home, at work or at a stop in town, call us for a [[car lockout in Jerome]].",
        "Out of town, rural properties often have several buildings with a mix of old and new locks: the house, a shop, outbuildings and gates. We can rekey them so fewer keys do more, or replace worn locks with stronger hardware.",
      ],
    },
  },
  {
    slug: "locksmith-filer-id",
    town: "Filer",
    county: "Twin Falls County",
    zip: "83328",
    metaTitle: "Locksmith in Filer, ID | A & B Locksmiths LLC",
    metaDescription: `Locksmith in Filer, ID for car lockouts, house lockouts, rekeying and lock changes. Local Twin Falls County service. Call A & B Locksmiths at ${PHONE}.`,
    h1: "Locksmith in Filer, ID",
    tagline: "Local lock and key help for Filer homes, farms and drivers.",
    intro: [
      "Filer is a close-knit town west of Twin Falls on US-30, surrounded by farmland. A & B Locksmiths is a [[locksmith serving Filer, ID]] for car lockouts, house lockouts, rekeying and lock changes.",
      "Many Filer residents live on acreages or farms just outside town, and we serve those properties as well as homes in town.",
    ],
    local: {
      heading: "Fair season, farm trucks and family homes",
      paragraphs: [
        "Filer is home to the Twin Falls County Fair, and busy weekends bring a lot of parked cars and a lot of keys locked inside them. Year round, we help with [[car lockouts in Filer]] for everything from family cars to farm pickups.",
        "For homes, we handle house lockouts, rekeying after a move and complete lock changes. If your home has a mix of old locks and mismatched keys, we can rekey or replace them so a single key works on every door.",
      ],
    },
  },
  {
    slug: "locksmith-hansen-id",
    town: "Hansen",
    county: "Twin Falls County",
    zip: "83334",
    metaTitle: "Locksmith in Hansen, ID | A & B Locksmiths LLC",
    metaDescription: `Locksmith serving Hansen, ID: car and house lockouts, rekeying and complete lock changes for homes and rural properties. Call ${PHONE}.`,
    h1: "Locksmith in Hansen, ID",
    tagline: "Lock and key help for Hansen and the US-30 corridor.",
    intro: [
      "Hansen is a small town east of Twin Falls on US-30, and it's well within our service area. A & B Locksmiths is a [[locksmith serving Hansen, ID]] for car lockouts, house lockouts, rekeying and lock changes.",
      "Hansen is mostly homes, farms and rural properties, which is exactly the residential work we specialise in.",
    ],
    local: {
      heading: "Rural homes and long driveways",
      paragraphs: [
        "On rural properties, a lockout can mean a long wait if your locksmith is coming from far away. We're local to Twin Falls County and serve Hansen and the surrounding countryside, including the Rock Creek area to the south.",
        "Along with lockouts, we can [[rekey locks]] on your house, garage and outbuildings, replace worn locks that no longer latch properly and install stronger deadbolts on exterior doors.",
      ],
    },
  },
  {
    slug: "locksmith-murtaugh-id",
    town: "Murtaugh",
    county: "Twin Falls County",
    zip: "83344",
    metaTitle: "Locksmith in Murtaugh, ID | A & B Locksmiths LLC",
    metaDescription: `Locksmith serving Murtaugh, ID: car and house lockouts, rekeying and lock changes for homes and farms. Call A & B Locksmiths at ${PHONE}.`,
    h1: "Locksmith in Murtaugh, ID",
    tagline: "Lock and key service for Murtaugh's homes and farms.",
    intro: [
      "Murtaugh is a farming community in eastern Twin Falls County. A & B Locksmiths provides [[locksmith service in Murtaugh, ID]], helping residents with car lockouts, house lockouts, rekeying and lock changes.",
      "Small towns don't always have a locksmith nearby, so call us when you need one.",
    ],
    local: {
      heading: "Farms, lake trips and family homes",
      paragraphs: [
        "Between farm work and summer trips to Murtaugh Lake, vehicles here see a lot of use, and keys get locked inside them. Our car lockout service covers cars, pickups and farm vehicles.",
        "For homes, we handle [[house lockouts]], rekeying and complete lock changes, including older farmhouses where the original locks may have worn out or the keys were lost long ago.",
      ],
    },
  },
  {
    slug: "locksmith-eden-id",
    town: "Eden",
    county: "Jerome County",
    zip: "83325",
    metaTitle: "Locksmith in Eden, ID | A & B Locksmiths LLC",
    metaDescription: `Locksmith serving Eden, ID and nearby: car and house lockouts, rekeying and lock changes. Call A & B Locksmiths at ${PHONE}.`,
    h1: "Locksmith in Eden, ID",
    tagline: "Lock and key help for Eden and eastern Jerome County.",
    intro: [
      "Eden is a small Jerome County town near I-84. A & B Locksmiths provides [[locksmith service in Eden, ID]], covering car lockouts, house lockouts, rekeying and lock changes for the town and the farmland around it.",
      "If you're locked out, need new locks or want old keys to stop working, call us.",
    ],
    local: {
      heading: "Small town, rural properties, interstate traffic",
      paragraphs: [
        "With I-84 close by, we get calls from both residents and travellers who have locked their keys in a vehicle. Our [[car lockout service]] covers cars, trucks and SUVs.",
        "For Eden homes and farms, we handle house lockouts, rekeying and lock changes, and we can key a house, shop and outbuildings so they use fewer keys.",
      ],
    },
  },
  {
    slug: "locksmith-curry-id",
    town: "Curry",
    county: "Twin Falls County",
    metaTitle: "Locksmith in Curry, ID | A & B Locksmiths LLC",
    metaDescription: `Locksmith serving Curry, ID: car lockouts, house lockouts, rekeying and lock changes for rural homes near Twin Falls. Call ${PHONE}.`,
    h1: "Locksmith in Curry, ID",
    tagline: "Rural lock and key service between Twin Falls and Filer.",
    intro: [
      "Curry is a rural community west of Twin Falls. A & B Locksmiths is a [[locksmith serving Curry, ID]], offering car lockouts, house lockouts, rekeying and lock changes to the homes and farms in the area.",
      "Rural addresses are part of our everyday work, so you won't need to explain where you are twice.",
    ],
    local: {
      heading: "Homes and farms in the Curry area",
      paragraphs: [
        "Properties around Curry often have more than one building to secure: the house, a garage, a shop and sometimes gates. We can rekey compatible locks so fewer keys open them all, or replace worn locks with new ones.",
        "If you're locked out of the house or your vehicle, our [[house lockout service]] and car lockout service get you back in without breaking a window or forcing the door.",
      ],
    },
  },
  {
    slug: "locksmith-knull-id",
    town: "Knull",
    county: "Twin Falls County",
    metaTitle: "Locksmith in Knull, ID | A & B Locksmiths LLC",
    metaDescription: `Locksmith serving the Knull area near Twin Falls, ID: car and house lockouts, rekeying and lock changes. Call A & B Locksmiths at ${PHONE}.`,
    h1: "Locksmith in Knull, ID",
    tagline: "Lock and key service for the rural Knull area.",
    intro: [
      "Knull is a rural community in Twin Falls County, close to the city of Twin Falls. A & B Locksmiths serves the area as a [[locksmith near Knull, ID]], providing car lockouts, house lockouts, rekeying and lock changes.",
      "Whether you're locked out or just want your locks updated, call us.",
    ],
    local: {
      heading: "Country living, close to town",
      paragraphs: [
        "Homes around Knull are a mix of farmhouses and newer houses on acreage. Many have been through several owners, and no one can be sure how many keys are still out there. We can [[rekey locks]] so every old key stops working, or install new locks keyed alike.",
        "If you're locked out of your home or vehicle, we'll come to your property and get you back in without damage.",
      ],
    },
  },
  {
    slug: "locksmith-rock-creek-id",
    town: "Rock Creek",
    county: "Twin Falls County",
    metaTitle: "Locksmith in Rock Creek, ID | A & B Locksmiths LLC",
    metaDescription: `Locksmith serving Rock Creek, ID near Hansen: car and house lockouts, rekeying and lock changes for homes and farms. Call ${PHONE}.`,
    h1: "Locksmith in Rock Creek, ID",
    tagline: "Lock and key service for Rock Creek homes, farms and acreages.",
    intro: [
      "The Rock Creek area near Hansen is mostly homes, farms and acreages. A & B Locksmiths provides [[locksmith service in Rock Creek, ID]], including car lockouts, house lockouts, rekeying and lock changes.",
      "We serve rural Twin Falls County every day, so call us when you need a locksmith out your way.",
    ],
    local: {
      heading: "Rural properties with more than one door to secure",
      paragraphs: [
        "On farms and acreages, a single property can have a house, garage, shop and outbuildings, each with its own lock and key. We can rekey compatible locks to work with one key, replace worn locks and install stronger deadbolts on exterior doors.",
        "Locked out of the house or a vehicle? Our [[house lockout service]] and car lockout service get you back inside without damage.",
      ],
    },
  },
];

/** The 20 service areas set on the Google Business Profile (see PROJECT.md). */
export const gbpServiceAreas: readonly string[] = [
  "Twin Falls",
  "Kimberly",
  "Jerome",
  "Filer",
  "Hansen",
  "Murtaugh",
  "Eden",
  "Rock Creek",
  "Knull",
  "Curry",
  "Godwin",
  "Peavey",
  "Clover",
  "Fairview",
  "Amsterdam",
  "Artesian City",
  "Deep Creek",
  "Eden Bench",
  "Greenwood",
  "Rock Creek Park",
];

const townsWithPages = new Set(serviceAreaPages.map((a) => a.town));

/** GBP areas that don't have their own page, for "also serving" lists. */
export const otherServiceAreas: readonly string[] = gbpServiceAreas.filter(
  (town) => !townsWithPages.has(town),
);
