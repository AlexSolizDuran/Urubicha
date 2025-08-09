export const jwtConstants = {
  secret: 'TU_SECRETO_JWT_AQUI',          // Cambia esto por un valor seguro y secreto
  refreshSecret: 'TU_SECRETO_REFRESH_AQUI', // Opcional, para refresh tokens
  expiresIn: '1h',                        // Tiempo de expiración para el access token
  refreshExpiresIn: '7d',                 // Tiempo de expiración para el refresh token
};
