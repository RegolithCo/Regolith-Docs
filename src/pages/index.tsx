import type { ReactNode } from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import Heading from '@theme/Heading'
import { StarsParallax } from '@site/src/components/StarsParallax'

import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <StarsParallax starColor="#fbc02d" color1="#fbc02d" color2="#0a0e1a" />
      <div className={clsx('container', styles.heroContainer)}>
        <Heading as="h1" className={clsx('hero__title hero-glow', styles.title)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle floating', styles.subtitle)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/general">
            📚 General Docs
          </Link>
          <Link className="button button--secondary button--lg" to="/survey-corps">
            🛰️ Survey Corps
          </Link>
          <Link className="button button--secondary button--lg" to="/api">
            👾 API Docs
          </Link>
          <Link className="button button--secondary button--lg" href="https://shop.regolith.rocks/">
            👕 Merch Store
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main className={styles.mainContent}>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
