import { mapEmbedUrl } from "@/config/business";
import { business } from "@/data/siteData";

/** Full-width Google Map. `query` defaults to the business's own address. */
export default function FullWidthMap({
  query = `${business.name}, ${business.address}`,
  title = `${business.name} Location`,
}: {
  query?: string;
  title?: string;
}) {
  return (
    <section className="w-full h-[400px] sm:h-[500px] relative bg-gray-200">
      <iframe
        src={mapEmbedUrl(query)}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        className="absolute inset-0"
      />
    </section>
  );
}
