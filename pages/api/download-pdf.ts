import { PDFDocument } from 'pdf-lib';
import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    // Get the image URLs from the request body
    const { imageUrls } = req.body;

    if (!imageUrls || imageUrls.length !== 2) {
      return res.status(400).json({ message: 'Two image URLs are required' });
    }

    // Fetch both images
    const image1Response = await fetch(imageUrls[0]);
    const image1Buffer = await image1Response.arrayBuffer();

    const image2Response = await fetch(imageUrls[1]);
    const image2Buffer = await image2Response.arrayBuffer();

    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();

    // Embed the first image
    const image1 = await pdfDoc.embedPng(image1Buffer); // Assuming PNG, use embedJpg for JPG
    const page1 = pdfDoc.addPage();
    const { width: width1, height: height1 } = image1.scale(1);
    page1.setSize(width1, height1);
    page1.drawImage(image1, {
      x: 0,
      y: 0,
      width: width1,
      height: height1,
    });

    // Embed the second image
    const image2 = await pdfDoc.embedPng(image2Buffer); // Assuming PNG, use embedJpg for JPG
    const page2 = pdfDoc.addPage();
    const { width: width2, height: height2 } = image2.scale(1);
    page2.setSize(width2, height2);
    page2.drawImage(image2, {
      x: 0,
      y: 0,
      width: width2,
      height: height2,
    });

    // Serialize the PDF document to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();

    // Set headers for download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', attachment; filename=images.pdf);

    // Send the PDF to the client
    res.status(200).send(Buffer.from(pdfBytes));
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).json({ message: 'Error generating PDF' });
  }
}