import type { ReactNode } from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'
import { StarsParallax } from '@site/src/components/StarsParallax'

import styles from './index.module.css'

export default function Home(): ReactNode {
  return (
    <Layout
      title="Regolith Has Sunset"
      description="Regolith has permanently closed. Thank you to everyone who was part of the journey."
    >
      <header className={clsx('hero', styles.heroBanner)}>
        <StarsParallax starColor="#fbc02d" color1="#fbc02d" color2="#0a0e1a" />
        <div className={clsx('container', styles.heroContainer)}>
          <div className={styles.o7}>o7</div>
          <Heading as="h1" className={clsx('hero__title hero-glow', styles.title)}>
            Regolith Has Sunset
          </Heading>
          <p className={clsx('hero__subtitle', styles.subtitle)}>
            After nearly 31,000 pilots and countless rocks cracked, Regolith has permanently closed its airlocks.
            <br />
            It's been one hell of a ride. Thank you.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/blog/2026/03/10/GoodBye-Regolith">
              📖 Read the Goodbye Post
            </Link>
            <Link className="button button--secondary button--lg" href="https://shop.regolith.rocks/">
              👕 Merch Store
            </Link>
          </div>
          <p className={styles.footnote}>
            The <Link to="/blog">blog</Link> and <Link to="/releases">release notes</Link> remain online as a record of the journey.
          </p>
        </div>
      </header>
    </Layout>
  )
}
