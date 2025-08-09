import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedRoles() {
  const roles = ['admin', 'cliente', 'productor', 'super_admin'];
  for (const rolename of roles) {
    await prisma.role.upsert({
      where: { name: rolename },
      update: {},
      create: { name: rolename },
    });
  }

  console.log('Roles seeded');
}
