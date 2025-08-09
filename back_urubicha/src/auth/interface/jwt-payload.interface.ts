export interface JwtPayload {
  sub: number;          // ID del usuario (subject)
  username: string;     // Nombre o email
  roles: string[];      // Roles asignados al usuario
  iat?: number;         // Fecha de emisión (opcional)
  exp?: number;         // Fecha de expiración (opcional)
}
