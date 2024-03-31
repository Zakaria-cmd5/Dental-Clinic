import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const patient = await prisma.patients.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!patient) {
    return NextResponse.json({ error: "Invalid patient" }, { status: 404 });
  }

  await prisma.patients.delete({
    where: { id: patient.id },
  });

  return NextResponse.json({});
}
