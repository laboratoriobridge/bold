#! /usr/bin/env node

const path = require('path')
const glob = require('glob')
const fs = require('fs')

const SITE_ROOT = process.env.SITE_ROOT || 'http://bold.bridge.ufsc.br'
const SOURCE = process.env.SOURCE || path.join(__dirname, 'pages', '/**/!(_*|*.demo.tsx)')
const DESTINATION = process.env.DESTINATION || path.join(__dirname, 'out', 'sitemap.xml')

let diskPages = glob.sync(SOURCE)

let xml = ''
xml += '<?xml version="1.0" encoding="UTF-8"?>\n'
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

diskPages.forEach(page => {
  let stats = fs.statSync(page)
  let modDate = new Date(stats.mtime)
  let lastMod = `${modDate.getFullYear()}-${('0' + (modDate.getMonth() + 1)).slice(-2)}-${(
    '0' + modDate.getDate()
  ).slice(-2)}`

  page = page.replace(path.join(__dirname, 'pages'), '')
  page = page.replace(/.mdx|.tsx$/, '')
  page = `${SITE_ROOT}${page}`

  if (page.match(/.*\/index$/)) {
    page = page.replace(/(.*)index$/, '$1')
  }

  xml += '\t<url>\n'
  xml += `\t\t<loc>${page}</loc>\n`
  xml += `\t\t<lastmod>${lastMod}</lastmod>\n`
  xml += `\t\t<changefreq>always</changefreq>\n`
  xml += `\t\t<priority>0.5</priority>\n`
  xml += '\t</url>\n'
})

xml += '</urlset>'

fs.writeFileSync(DESTINATION, xml)

console.log(`Wrote sitemap for ${diskPages.length} pages to ${DESTINATION}`)
