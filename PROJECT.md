# A & B Locksmiths — Website Brief

## Business info (NAP)

Use these exact values everywhere: page content, footer, schema and meta tags. The name, address and phone must match the Google Business Profile character for character.

| Field   | Value                                          |
| ------- | ---------------------------------------------- |
| Name    | A & B Locksmiths LLC                           |
| Address | 3064 E 3200 N, Twin Falls, ID 83301, US        |
| Phone   | (208) 539-1810 (link as `tel:+12085391810`)    |
| Email   | ab.locksidaho@gmail.com                        |

- **Primary GBP category:** Locksmith (the only primary category)
- **Focus:** mostly residential, plus some commercial work. Main services: lockouts (car/auto and house) and lock changes (single locks and whole-house).

## Requirements

- **Service pages:** one SEO-optimised page for each service.
- **Service-area pages:** one SEO-optimised page for each service area, using the same keyword strategy as the Google Business Profile.
- **Local Business Schema:** `Locksmith` JSON-LD (a LocalBusiness subtype) with the NAP above, `areaServed`, and `sameAs` links to the social profiles once they exist (no hours or geo coordinates; see Decisions). Service pages also get `Service` schema.
- **Google Map:** an embedded map of the business location. Each area page embeds a map of that town, not the business address.
- **Google reviews:** show the Google Maps reviews on the site.
- **On-page SEO:** every page gets its own meta title and meta description, exactly one H1, and H2s in a logical order.
- **Social media:** link the social profiles on the site and in the schema `sameAs`.
- **Consistent NAP:** the same name, address and phone in the footer of every page, matching the table above.
- **Links to the Google Business Profile:** link the target keywords on the website to the Google Business Profile.

## Service pages

Each page has a localized H1 (for example "Car Lockout Service in Twin Falls, ID"), one primary keyword plus 2–3 long-tail keywords, and a call-to-action section with the phone number and the areas served.

**One intent per page.** Car lockout and auto lockout are the same search intent, so they share one page. Use "auto lockout" as a secondary keyword on `/car-lockout-service` instead of building a separate page.

### Phase 1: build these first

| Slug                      | Primary keyword                        | Notes                                   |
| ------------------------- | -------------------------------------- | --------------------------------------- |
| `/car-lockout-service`    | car lockout service Twin Falls ID      | Also targets "auto lockout"; emergency searches |
| `/house-lockout-service`  | house lockout service Twin Falls       | Emergency home lockouts                 |
| `/lock-change-service`    | lock change service Twin Falls         | Home and commercial lock changes        |
| `/rekey-locks`            | rekey locks Twin Falls                 | Less competition, so easier to rank     |
| `/residential-locksmith`  | residential locksmith Twin Falls       | Broad residential keywords              |
| `/commercial-locksmith`   | commercial locksmith Twin Falls        | Keep it light; the client does mostly residential work |
| `/emergency-locksmith`    | emergency locksmith Twin Falls         | **Only if the client offers 24/7 service** |

### Later

- `/key-duplication`
- `/deadbolt-installation`
- `/smart-lock-installation`

### GBP service list (keep the website in line with it)

- **Auto:** car lockout, auto lockout, vehicle unlocking, emergency car door unlocking, trunk unlocking, broken key extraction (auto)
- **Residential:** house lockout, home lock change, residential lock installation, residential rekeying, door lock repair, deadbolt installation, smart lock installation, key duplication, mailbox lock replacement
- **Commercial (light focus):** commercial lock change, commercial rekeying, office lockout, door closer installation, master key system setup
- **Emergency and general:** 24-hour emergency locksmith\*, emergency lockout, lock repair and replacement, key cutting, safe unlocking\*
- **Extra GBP tags:** rekey after move-in, lost car key replacement\*, broken key extraction (home and car), lock maintenance

\* Only list these if the client actually offers them.

## Service-area pages

Each area page has 500–700 words of content written for that town; generic text with only the town name swapped does not count. Each one includes:
- an intro about the services in that town
- 3–5 core services (lockouts, lock changes, rekeys), linked to their service pages
- a line on driving distance or response time
- a Google Map of that town

### Phase 1: build these first

| Slug                       | Keyword                 |
| -------------------------- | ----------------------- |
| `/locksmith-twin-falls-id` | locksmith Twin Falls ID |
| `/locksmith-kimberly-id`   | locksmith Kimberly ID   |
| `/locksmith-jerome-id`     | locksmith Jerome ID     |
| `/locksmith-filer-id`      | locksmith Filer ID      |
| `/locksmith-hansen-id`     | locksmith Hansen ID     |
| `/locksmith-murtaugh-id`   | locksmith Murtaugh ID   |
| `/locksmith-eden-id`       | locksmith Eden ID       |
| `/locksmith-curry-id`      | locksmith Curry ID      |
| `/locksmith-knull-id`      | locksmith Knull ID      |
| `/locksmith-rock-creek-id` | locksmith Rock Creek ID |

**Later:** `/locksmith-godwin-id`, `/locksmith-fairview-id`, `/locksmith-clover-id`

**Twin Falls overlap:** the home page and `/locksmith-twin-falls-id` both target "locksmith Twin Falls". Give them different angles so they don't compete with each other, for example a brand and services overview on the home page and neighbourhood-level detail on the Twin Falls page.

### GBP service areas (20, proposed by ChatGPT)

| #  | Area                 | ZIP          |
| -- | -------------------- | ------------ |
| 1  | Twin Falls           | 83301        |
| 2  | Kimberly             | 83341        |
| 3  | Jerome               | 83338        |
| 4  | Filer                | 83328        |
| 5  | Hansen               | 83334        |
| 6  | Murtaugh             | 83344        |
| 7  | Eden                 | 83325        |
| 8  | Rock Creek           | 83334        |
| 9  | Knull                | 83301        |
| 10 | Curry                | 83301/83328  |
| 11 | Godwin               | 83301        |
| 12 | Peavey               | 83301/83338  |
| 13 | Clover               | 83344/83334  |
| 14 | Fairview             | 83334        |
| 15 | Amsterdam            | 83301/83338  |
| 16 | Artesian City        | 83301/83328  |
| 17 | Deep Creek           | 83301/83328  |
| 18 | Eden Bench           | 83325        |
| 19 | Greenwood            | 83338        |
| 20 | Rock Creek Park area | 83334        |

**Check this list before relying on it.** ChatGPT guessed the distances and ZIP codes; nobody has verified them. Murtaugh and Eden may be more than 15 miles away. Rows 18–20 are filler: "Eden Bench" and "Rock Creek Park area" duplicate Eden and Rock Creek, and Greenwood is uncertain. No other list is available, so this is the working list (see Decisions below). If GBP rejects a small unincorporated place name, use its ZIP code or the nearest city instead.

## Site structure

```
Home (Locksmith in Twin Falls, ID)
├── Services          → service pages above
├── Service Areas     → area pages above
├── About Us
├── Contact Us
└── Blog (optional: local guides, e.g. "What to do if you're locked out in Twin Falls")
```

## SEO rules

- One search intent per page, so pages don't compete for the same keyword.
- Link service pages and area pages to each other (for example "Need a car lockout in Kimberly? See our Car Lockout Service page.").
- Use real photos and short videos on the service pages.
- Don't stuff keywords, and don't use phrases like "locksmith near me"; GBP already targets by location through the service areas.
- Suggested GBP description: "Fast 24/7 car and home lockouts in Twin Falls, Jerome, Kimberly & nearby areas." Only use "24/7" if the client confirms it.

## Decisions: building with only the info above

No more information is coming from the client, so the site is built with what this file contains. Anything unconfirmed is left out, never invented.

| Topic | Decision |
| ----- | -------- |
| Services | Build the Phase 1 service pages. Don't mention safe unlocking or car key replacement anywhere. |
| "24/7" | Never claim 24/7 or list opening hours. `/emergency-locksmith` is about fast emergency lockout response, not round-the-clock availability. |
| Service areas | Use the 20-area list above as the GBP list. Build area pages for the 10 Phase 1 towns. Rows 18–20 get no pages. |
| GBP link | Use a Google Maps search URL for the business name and address as the "Google Business Profile" link, kept in a single config value so the real profile URL can replace it later. |
| Map | Embed Google Maps by address query; this needs no API key or Place ID. |
| Reviews | Without a Place ID, live reviews can't be pulled. Build a reviews section with a "Read our reviews on Google" link to the GBP URL. The section is designed to be fed a Place ID or review data later, and never shows made-up reviews. |
| Social media | No URLs yet. Keep them in config; the social links and schema `sameAs` render nothing while the list is empty. |
| Opening hours and geo coordinates | Leave them out of the schema rather than guess. |
| Design | **Same template as the DHA Construction site** (github.com/Faizan2225/DHAConstrutionLLC): same layout, sections, colours (blue/navy/gold), Inter font and components. Only the business info and copy change; don't redesign. The client's logo is `public/logo.jpeg`. |
| Images | Generic house and door photos reused from the template. DHA's job photos and the images with "DHA"/"Contractors" text are not used, and neither is the gallery. Service cards use the template's gradient + icon placeholder until locksmith photos are supplied (set `image` in `src/data/siteData.ts`). |
| Contact form | Kept from the template; it opens the visitor's email app (`mailto:`) because there's no backend. |

All business details (NAP, services, areas, GBP URL, social links) live in one config module in the code. Every page, the footer and the schema read from it.
