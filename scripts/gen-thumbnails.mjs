#!/usr/bin/env node
// 為文章列表(grid)產生小尺寸 WebP 縮圖。
// 原圖約 2752x1536、每張數 MB;列表只顯示約 230px 寬,因此縮到 800px 寬即可,
// 可把列表流量砍掉約 98%。慣例:輸出到 <out>/<原檔名>.webp,已存在則略過(idempotent)。
//
// 用法: node scripts/gen-thumbnails.mjs [srcDir] [outDir]
//   預設 srcDir = _site/assets/images
//        outDir = _site/assets/images/thumbs
// 本機執行前需先安裝 sharp: npm install sharp

import { readdir, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SRC = process.argv[2] || "_site/assets/images";
const OUT = process.argv[3] || path.join(SRC, "thumbs");
const WIDTH = 800; // 縮圖目標寬度(px),足以覆蓋手機 2x 與桌機 4 欄
const QUALITY = 72; // WebP 品質

const EXTS = new Set([".png", ".jpg", ".jpeg"]);

async function main() {
  if (!existsSync(SRC)) {
    console.error(`[thumbnails] 來源目錄不存在: ${SRC}`);
    process.exit(0); // 不擋 build
  }
  await mkdir(OUT, { recursive: true });

  const entries = await readdir(SRC);
  let made = 0, skipped = 0, failed = 0;

  for (const name of entries) {
    const ext = path.extname(name).toLowerCase();
    if (!EXTS.has(ext)) continue;

    const src = path.join(SRC, name);
    const st = await stat(src);
    if (!st.isFile()) continue;

    const base = path.basename(name, ext);
    const dest = path.join(OUT, `${base}.webp`);

    if (existsSync(dest)) { skipped++; continue; }

    try {
      await sharp(src)
        .resize({ width: WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(dest);
      made++;
    } catch (err) {
      failed++;
      console.error(`[thumbnails] 失敗 ${name}: ${err.message}`);
    }
  }

  console.log(`[thumbnails] 產生 ${made}、略過 ${skipped}、失敗 ${failed} → ${OUT}`);
}

main();
