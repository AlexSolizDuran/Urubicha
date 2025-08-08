import { PrismaClient } from '@prisma/client';


// Importa tus seeders
import { seedRoles } from './roleSeeder';
import { seedPermissions } from './permissionSeeder';

async function main() {
  console.log('🌱 Starting database seeding...');

  await seedRoles();
  await seedPermissions(); // si tienes más, los llamas aquí también

  console.log('✅ Seeding completed.');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    
  });
