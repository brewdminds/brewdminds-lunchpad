import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "/usr/bin/chromium-browser",
  headless: true,
  args: ["--no-sandbox", "--disable-gpu"],
});

for (const file of ["logo-colored.svg", "logo-nocolor.svg"]) {
  const page = await browser.newPage();
  await page.goto(`http://localhost:8341/${file}`, { waitUntil: "networkidle0" });
  const bbox = await page.evaluate(() => {
    const svg = document.querySelector("svg");
    const g = svg.querySelector("g") || svg;
    const b = g.getBBox();
    return { x: b.x, y: b.y, width: b.width, height: b.height };
  });
  console.log(file, JSON.stringify(bbox));
  await page.close();
}

await browser.close();
