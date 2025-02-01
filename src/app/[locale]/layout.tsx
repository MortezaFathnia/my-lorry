import {notFound} from 'next/navigation';
import { setRequestLocale} from 'next-intl/server';
import BaseLayout from '@/components/BaseLayout';
import {routing} from '@/i18n/routing';
import { Locale } from '@/types/locals';



export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return <BaseLayout locale={locale}>{children}</BaseLayout>;
}