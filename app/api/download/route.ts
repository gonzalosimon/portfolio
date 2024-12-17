import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'aguilar_cv.pdf');

  try {
    const fileBuffer = fs.readFileSync(filePath);
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Gonzalo_Aguilar_CV.pdf"',
      },
    });
  } catch (error) {
    console.log(error);
    return new NextResponse('File not found', { status: 404 });
  }
}
