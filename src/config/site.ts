import { env } from './env';

export const siteConfig = {
  name: env.SITE_NAME,
  description: env.SITE_DESCRIPTION,
  url: env.SITE_URL,
  author: env.AUTHOR,
};
