// สร้างเว็บรวม: หน้าหลัก -> dist/ และแต่ละจุดหมายใน pages/<slug> -> dist/<slug>/
import { build } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const pagesDir = path.join(root, 'pages')
const dist = path.join(root, 'dist')

await build({ root, configFile: false, base: './', plugins: [react()], build: { outDir: dist, emptyOutDir: true } })
for (const slug of fs.readdirSync(pagesDir)) {
  await build({
    root: path.join(pagesDir, slug),
    configFile: false,
    base: './',
    plugins: [react()],
    build: { outDir: path.join(dist, slug), emptyOutDir: true },
  })
}
console.log('สร้างเสร็จ:', dist)
