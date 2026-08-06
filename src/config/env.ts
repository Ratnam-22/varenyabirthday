import { EnvironmentConfig } from '@/types/env';

export const env: EnvironmentConfig = {
  SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME || 'Project Varenya',
  SITE_DESCRIPTION:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'A cinematic 3D interactive birthday experience created for Varenya',
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://varenya.app',
  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'Antigravity Studio',
  IS_DEV: process.env.NODE_ENV === 'development',
  IS_PROD: process.env.NODE_ENV === 'production',
};
