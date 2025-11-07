import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// Указываем путь к конфигурации i18n
const withNextIntl = createNextIntlPlugin('./src/I18n/request.ts');

const nextConfig: NextConfig = {
  // Ваши дополнительные настройки, если есть
};

export default withNextIntl(nextConfig);
