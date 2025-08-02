import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Crear roles
  const rolesData = [
    { name: 'admin' },
    { name: 'cliente' },
  ];

  for (const role of rolesData) {
    await prisma.role.upsert({
      where: { name: role.name },
      update: {},
      create: role,
    });
  }

  // Hashear contraseña para usuarios
  const hashedPasswordAdmin = await bcrypt.hash('admin123', 10);
  const hashedPasswordCliente = await bcrypt.hash('cliente123', 10);

  // Crear usuarios iniciales
  await prisma.user.upsert({
    where: { email: 'admin@admin.com' },
    update: {},
    create: {
      email: 'admin@admin.com',
      password: hashedPasswordAdmin,
      role: {
        connect: { name: 'admin' },
      },
    },
  });

  await prisma.user.upsert({
    where: { email: 'cliente@cliente.com' },
    update: {},
    create: {
      email: 'cliente@cliente.com',
      password: hashedPasswordCliente,
      role: {
        connect: { name: 'cliente' },
      },
    },
  });

  console.log('Seed ejecutado correctamente');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
