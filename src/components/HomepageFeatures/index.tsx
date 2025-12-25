import React from 'react'
import type { ReactNode } from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div> */}
        <div className="row margin-top--xl">
          <div className="col col--8 col--offset-2">
            <div className={clsx('padding--lg', styles.featureCard)}>
              <p className="text--center" style={{ fontSize: '1.2rem', marginBottom: 0 }}>
                <strong>NOTE:</strong> This documentation is a work in progress and VERY new. If you have any questions
                or suggestions, please feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
