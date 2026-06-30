import fs from "fs";
import { navigationData } from "../src/data/navigationData.js";

const BASE_URL = "https://askriseadvisors.in";

const urls = [
  "/",
  "/about",
  "/news",
  "/contact",
];

// Industry pages
navigationData.industries.forEach(category => {
  category.items.forEach(item => {
    urls.push(item.path);
  });
});

// Service pages
navigationData.services.forEach(category => {
  category.items.forEach(item => {
    urls.push(item.path);
  });
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${urls
  .map(
    url => `
  <url>
    <loc>${BASE_URL}${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url === "/" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("")}

</urlset>`;

fs.writeFileSync("public/sitemap.xml", xml);

console.log(`✅ Sitemap generated with ${urls.length} URLs`);