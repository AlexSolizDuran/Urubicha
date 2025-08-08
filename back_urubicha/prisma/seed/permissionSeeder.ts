import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedPermissions() {

  const permission = ['read','write',];
  for (const namepe of permission) {
    await prisma.permission.upsert({
      where: { name: namepe },
      update: {},
      create: { name: namepe },
    });
  }
  
  

  console.log('Permissions seeded');
}
