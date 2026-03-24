// src/app/api/auth/[...nextauth]/route.ts
import { handlers } from '@/auth';   // ← This imports from your auth.ts

export const { GET, POST } = handlers;