import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: './',
  server: {
    open: true
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        pdfUnlock: resolve(__dirname, 'pages/pdf/pdf-unlock.html'),
        pdfMerger: resolve(__dirname, 'pages/pdf/pdf-merger.html'),
        pdfCompressor: resolve(__dirname, 'pages/pdf/pdf-compressor.html'),
        imageToPdf: resolve(__dirname, 'pages/image/image-to-pdf.html'),
        imageCompressor: resolve(__dirname, 'pages/image/image-compressor.html'),
        qrGenerator: resolve(__dirname, 'pages/utility/qr-generator.html'),
        emiCalculator: resolve(__dirname, 'pages/finance/emi-calculator.html'),
        gstCalculator: resolve(__dirname, 'pages/finance/gst-calculator.html'),
        sipCalculator: resolve(__dirname, 'pages/finance/sip-calculator.html')
      }
    }
  }
});
