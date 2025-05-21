import "dotenv/config";
import FirecrawlApp from "@mendable/firecrawl-js";
import { writeFile } from "fs/promises";

const app = new FirecrawlApp({ apiKey: process.env.FIRECRAWL_API_KEY });

// Scrape a website
// const scrapeResponse = await app.scrapeUrl(
//   "https://worldslargesthackathon.devpost.com/rules",
//   {
//     formats: ["markdown"],
//   }
// );

// if (!scrapeResponse.success) {
//   throw new Error(`Failed to scrape: ${scrapeResponse.error}`);
// }

// console.log(scrapeResponse);

// Crawl a website
const crawlResponse = await app.crawlUrl(
  "https://worldslargesthackathon.devpost.com/rules",
  {
    limit: 100,
    scrapeOptions: {
      formats: ["markdown"],
    },
  }
);

if (!crawlResponse.success) {
  throw new Error(`Failed to crawl: ${crawlResponse.error}`);
}

console.log(crawlResponse);

// Write markdown to file (assuming crawlResponse.data[0].markdown exists)
if (crawlResponse.data && crawlResponse.data[0].markdown) {
  await writeFile(
    "data/crawled-rules.md",
    crawlResponse.data[0].markdown,
    "utf-8"
  );
  console.log("Markdown saved to data/crawled-rules.md");
} else {
  console.log("No markdown content found in crawlResponse.");
}
