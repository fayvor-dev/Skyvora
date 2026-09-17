import type { MetadataRoute } from "next";
import { aircraftFleet } from "@/lib/aircraft";
import { destinations } from "@/lib/destinations";

const baseUrl = "https://sky-vora.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/aircraft",
    "/destinations",
    "/services",
    "/membership",
    "/charter",
    "/about",
    "/contact",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const aircraftRoutes = aircraftFleet.map((a) => ({
    url: `${baseUrl}/aircraft/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const destinationRoutes = destinations.map((d) => ({
    url: `${baseUrl}/destinations/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...aircraftRoutes, ...destinationRoutes];
}
