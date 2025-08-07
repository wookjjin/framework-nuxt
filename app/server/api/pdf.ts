import path from 'node:path'

import { defineEventHandler, setHeader } from 'h3'
import PDFDocument from 'pdfkit'

export default defineEventHandler(async (event) => {
  const doc = new PDFDocument({ size: 'A4', margin: 50 })

  // 헤더 설정
  setHeader(event, 'Content-Type', 'application/pdf')
  setHeader(event, 'Content-Disposition', 'inline; filename=highlighted.pdf')

  doc.pipe(event.node.res)

  // ✅ 한글 폰트 경로 지정 (Nuxt에서 상대 경로로 지정)
  const fontPath = path.join(process.cwd(), '/app/assets/fonts/NotoSansKR-Regular.ttf')
  doc.font(fontPath)

  // 텍스트 출력
  doc.fontSize(16).fillColor('black')
  doc.text('다음 문장에서 특정 텍스트가 강조되어 있습니다.', 100, 100)

  const highlightText = '하이라이트된 텍스트'
  const x = 100
  const y = 150
  const width = doc.widthOfString(highlightText)
  const height = doc.currentLineHeight()

  doc.save()
  doc.rect(x, y, width, height).fill('#ffff00') // 하이라이트 배경
  doc.restore()

  doc.fillColor('black').text(highlightText, x, y)

  doc.end()

  await new Promise<void>((resolve) => {
    doc.on('end', resolve)
  })
})
