import '@/pages/index.scss'
import "@/components/about/about.scss";
import "@/components/certificate/certificate.scss";
import "@/components/projects/projects.scss";
import '@/components/contacts/contacts.scss';
import '@/components/skils/skills.scss';
import '@/components/nav/nav.scss';
import '@/components/about/about.scss';
import '@/components/experience/experience.scss';
import '@/components/projects/projects.scss';
import '@/components/certificate/certificate.scss';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
