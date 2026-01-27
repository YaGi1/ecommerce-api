export const Roles = {
  ADMIN: 'ADMIN',
  SHOPPER: 'SHOPPER',
} as const;

export type Role = (typeof Roles)[keyof typeof Roles];