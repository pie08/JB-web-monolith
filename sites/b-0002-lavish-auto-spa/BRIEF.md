# Brief

Business: Lavish Auto Spa, LLC
Sheet row id: b-0002 (sheet row 3)
Niche and city: Car detailers, Exeter, NH
Category: 3 (Site not working)

## What is being created

A one-page website for this business, built from templates/local-business. Sections: hero, intro, services, photos, one approved review, and a contact section with Request a Quote.

Current site: https://www.lavishautospa.com/

Checked on 2026-10-13: the link returns HTTP 404 with a "Site not found" page (the site is not published or has no domain assigned). It publishes no services, hours, or other facts, so nothing on this site comes from it.

**Test build.** Ty confirmed in chat that this run tests the workflow. The logo and photos are placeholders (see below) and must be replaced before this goes to the owner.

## Facts used and where each came from

| Fact | Source |
| --- | --- |
| Name: Lavish Auto Spa, LLC | Sheet, name |
| Niche: car detailers | Sheet, niche |
| City: Exeter | Sheet, city |
| Phone: 603-758-3194 | Sheet, phone |
| Mobile service to Exeter, Stratham, Rye, Hampton, Newton, Kingston, East Kingston, Epping, and Brentwood | Sheet, qualify_notes (research agent) |
| Interior detailing and exterior detailing are offered | Sheet, approved_reviews (the customer booked an interior detail and had the exterior added) |
| Review quote | Sheet, approved_reviews (first sentence, quoted word for word) |
| Hero headline | The run prompt, category 3 stand |
| Logo (public/logo.webp) | Sheet, logo_url. **Placeholder:** it reads "Seacoast Detailing, Est 2024". Ty said it is his own test logo. |
| Photos (public/stock-1.jpg to stock-4.jpg) | **Placeholder stock photos** from Unsplash (free license), used at Ty's request because the Drive photos folder has no work photos. Not the business's own work. |

Stock photo pages: unsplash.com/photos/grey-car-in-soap-suds-V4b2j7f1dfc, unsplash.com/photos/black-and-gray-car-interior-U4IaoKF5aj4, unsplash.com/photos/a-man-waxing-the-hood-of-a-car-dlJelFmdpOc, unsplash.com/photos/person-cleaning-car-tire-with-brush-8k_T1EwTySs

## Left out on purpose

- Prices: none in the sheet. Each service reads "Call for Details".
- Hours, address, email: none in the sheet. The owner's email is internal and is not published.
- Second phone (603-686-0023, from BBB and MapQuest): not the sheet's phone, so not used.
- Facebook rating, Yelp rating, like counts: research notes, not owner-approved claims.
- The rest of the approved review: its second sentence uses an avoided word ("problem"), which check-site.mjs rejects, so only the first sentence is quoted.
- Package names, products, ceramic coating, and similar: nothing in the sheet supports them.
- Contact: no form (not in STACK.md). Request a Quote is a call to the phone number.
