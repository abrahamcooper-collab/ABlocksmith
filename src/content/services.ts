/**
 * Phase 1 service pages (see PROJECT.md → Service pages).
 *
 * Copy rules: no "24/7", no opening hours, no licence/insurance or years-in-
 * business claims, no prices and no promised response times. None of these
 * have been confirmed by the client.
 */
import { Building2, Car, DoorOpen, House, KeyRound, Lock, Siren } from "lucide-react";
import { business } from "@/config/business";
import type { Service } from "./types";

const PHONE = business.phone;

export const services: readonly Service[] = [
  {
    slug: "car-lockout-service",
    name: "Car Lockout Service",
    icon: Car,
    primaryKeyword: "car lockout service Twin Falls ID",
    metaTitle: "Car Lockout Service in Twin Falls, ID | A & B Locksmiths",
    metaDescription:
      `Locked out of your car in Twin Falls? A & B Locksmiths opens cars, trucks and SUVs without damage and extracts broken keys. Call ${PHONE}.`,
    h1: "Car Lockout Service in Twin Falls, ID",
    tagline: "Keys locked inside? We come to you and get you back on the road.",
    summary:
      "Keys locked in the car, a dead key fob or a key snapped in the door. We come to your vehicle and get you back in without damage.",
    intro: [
      "Few things stop your day like hearing the door click shut with the keys still in the ignition. A & B Locksmiths provides [[car lockout service in Twin Falls]] and the surrounding Magic Valley towns, coming to wherever your vehicle is parked: your driveway, a grocery store lot, a job site or the side of a country road.",
      "Our [[auto lockout service]] covers cars, pickups, SUVs and vans. We use proper vehicle entry tools designed to open the door without scratching paint, bending the frame or tearing weatherstripping, so the only thing you're left with is your keys back in your hand.",
      "If the problem is a key that broke off in the door or the trunk lock, we can extract the broken piece so you can get in and get going.",
    ],
    included: [
      "Car, truck, SUV and van door unlocking",
      "Trunk unlocking",
      "Keys locked in the ignition or on the seat",
      "Broken key extraction from door and trunk locks",
      "Help at home, at work or on the roadside",
    ],
  },
  {
    slug: "house-lockout-service",
    name: "House Lockout Service",
    icon: DoorOpen,
    primaryKeyword: "house lockout service Twin Falls",
    metaTitle: "House Lockout Service in Twin Falls, ID | A & B Locksmiths",
    metaDescription:
      `Locked out of your house in Twin Falls? A & B Locksmiths gets you back inside quickly, without breaking a window or the door. Call ${PHONE}.`,
    h1: "House Lockout Service in Twin Falls, ID",
    tagline: "Locked out of your home? We'll get you back inside, the right way.",
    summary:
      "Keys lost, left inside or a lock that won't turn. We get you back into your home without breaking a window or splitting the door frame.",
    intro: [
      "Getting locked out of your own home is stressful, especially with kids, pets or a pot on the stove inside. A & B Locksmiths offers [[house lockout service in Twin Falls]] and nearby communities, and residential work is the core of what we do.",
      "Instead of forcing a door or breaking glass, we open residential locks using locksmith techniques that leave the door, frame and lock working afterwards. If your key was lost or stolen, we can rekey or change the lock while we're there so the old key no longer works.",
    ],
    included: [
      "Front, back and garage entry door lockouts",
      "Deadbolt and knob lock opening",
      "Broken key extraction",
      "Rekey or lock change on the spot if keys were lost or stolen",
      "Rental, apartment and manufactured home lockouts",
    ],
  },
  {
    slug: "lock-change-service",
    name: "Lock Change Service",
    icon: Lock,
    primaryKeyword: "lock change service Twin Falls",
    metaTitle: "Lock Change Service in Twin Falls, ID | A & B Locksmiths",
    metaDescription:
      `Lock changes for homes and businesses in Twin Falls, ID: single locks or every door, new deadbolts and smart locks. Call A & B Locksmiths at ${PHONE}.`,
    h1: "Lock Change Service in Twin Falls, ID",
    tagline: "One lock or every door in the house, installed properly.",
    summary:
      "Replace worn, broken or outdated locks with new hardware, from a single deadbolt to a complete lock change for every door.",
    intro: [
      "A & B Locksmiths provides [[lock change service in Twin Falls]] for homes, rentals and small businesses. Whether one lock has worn out or you want every exterior door upgraded and keyed alike, we supply and install the hardware and make sure each door latches and locks the way it should.",
      "Complete lock changes are one of our most requested jobs. After buying a home, ending a tenancy or simply wanting stronger hardware, replacing every lock at once gives you a clean start and one key for every door.",
    ],
    included: [
      "Single lock replacement or complete lock changes",
      "Deadbolt installation and upgrades",
      "Keyed-alike setups so one key opens every door",
      "Smart lock and keypad lock installation",
      "Door lock repair and adjustment",
      "Mailbox lock replacement",
    ],
  },
  {
    slug: "rekey-locks",
    name: "Lock Rekeying",
    icon: KeyRound,
    primaryKeyword: "rekey locks Twin Falls",
    metaTitle: "Rekey Locks in Twin Falls, ID | A & B Locksmiths",
    metaDescription:
      `Rekey your locks in Twin Falls after moving in, losing keys or changing tenants. Keep your hardware and stop old keys working. Call ${PHONE}.`,
    h1: "Rekey Locks in Twin Falls, ID",
    tagline: "Keep your locks, make every old key useless.",
    summary:
      "Moved in, lost a key or changed tenants? Rekeying makes old keys stop working while you keep your existing locks.",
    intro: [
      "When you [[rekey locks in Twin Falls]] with A & B Locksmiths, we change the pins inside your existing lock cylinders so they work with a new key. Every old key, including the ones you don't know about, stops working, and you keep the hardware you already have.",
      "It's the first thing we recommend after you move into a new home. Previous owners, contractors, neighbours and dog walkers may all still have a key, and rekeying closes that gap for a fraction of the cost of replacing every lock.",
    ],
    included: [
      "Rekeying after a move-in",
      "Rekeying after lost or stolen keys",
      "Rekeying between tenants for landlords",
      "Keying multiple locks to work with one key",
      "New key cutting for the rekeyed locks",
    ],
  },
  {
    slug: "residential-locksmith",
    name: "Residential Locksmith",
    icon: House,
    primaryKeyword: "residential locksmith Twin Falls",
    metaTitle: "Residential Locksmith in Twin Falls, ID | A & B Locksmiths",
    metaDescription:
      `Residential locksmith in Twin Falls, ID: home lockouts, rekeying, lock changes, deadbolts, smart locks and key copies. Call A & B Locksmiths at ${PHONE}.`,
    h1: "Residential Locksmith in Twin Falls, ID",
    tagline: "Locks, keys and home security for Magic Valley homeowners.",
    summary:
      "Everything your home's locks need: lockouts, rekeying, lock changes, deadbolts, smart locks and key copies.",
    intro: [
      "Homes are the heart of our business. As a [[residential locksmith in Twin Falls]], A & B Locksmiths helps homeowners, renters and landlords across the area with everything from a quick lockout to a full set of new locks.",
      "We work on houses in town, in newer subdivisions and on rural properties, including entry doors, garage entry doors, sliding patio doors and mailboxes. If you're not sure what you need, call and describe the problem; we'll tell you honestly whether it's a repair, a rekey or a replacement.",
    ],
    included: [
      "House lockouts",
      "Rekeying and complete lock changes",
      "Deadbolt installation",
      "Smart lock and keypad installation",
      "Door lock repair",
      "Key duplication",
      "Mailbox lock replacement",
    ],
  },
  {
    slug: "commercial-locksmith",
    name: "Commercial Locksmith",
    icon: Building2,
    primaryKeyword: "commercial locksmith Twin Falls",
    metaTitle: "Commercial Locksmith in Twin Falls, ID | A & B Locksmiths",
    metaDescription:
      `Commercial locksmith in Twin Falls, ID: office lockouts, lock changes, rekeying, door closers and master key systems. Call A & B Locksmiths at ${PHONE}.`,
    h1: "Commercial Locksmith in Twin Falls, ID",
    tagline: "Practical lock and key work for local businesses.",
    summary:
      "Office lockouts, commercial lock changes and rekeying, door closers and master key systems for local businesses.",
    intro: [
      "Alongside our residential work, A & B Locksmiths provides [[commercial locksmith services in Twin Falls]] for shops, offices, workshops and rental property owners.",
      "When an employee leaves with a key, a lock wears out on a busy door or you need different staff to have access to different rooms, we can rekey, replace or set up a master key system that fits how your business actually runs.",
    ],
    included: [
      "Office and storefront lockouts",
      "Commercial lock changes",
      "Commercial rekeying",
      "Master key system setup",
      "Door closer installation",
    ],
  },
  {
    slug: "emergency-locksmith",
    name: "Emergency Locksmith",
    icon: Siren,
    primaryKeyword: "emergency locksmith Twin Falls",
    metaTitle: "Emergency Locksmith in Twin Falls, ID | A & B Locksmiths",
    metaDescription:
      `Emergency locksmith in Twin Falls for car and house lockouts, broken keys and locks that won't secure. Call A & B Locksmiths now at ${PHONE}.`,
    h1: "Emergency Locksmith in Twin Falls, ID",
    tagline: "Locked out or can't lock up? Call us first.",
    summary:
      "Urgent lockouts, broken keys and doors that won't lock. Call and we'll tell you straight away how soon we can be there.",
    intro: [
      "Lock problems rarely happen at a convenient time. When you need an [[emergency locksmith in Twin Falls]], call A & B Locksmiths and you'll speak directly to the people who do the work. We'll tell you honestly how soon we can reach you.",
      "We handle urgent car and house lockouts, keys snapped off in a lock, and doors that won't lock after a break-in or a failed lock, so you aren't left with a home or business you can't secure.",
    ],
    included: [
      "Emergency car lockouts",
      "Emergency house lockouts",
      "Broken key extraction",
      "Securing doors after a lock failure or break-in",
      "Emergency lock repair and replacement",
    ],
  },
];
