import React from 'react'
import type { ReactNode } from 'react'
import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

// type FeatureItem = {
//   title: string
//   Svg: React.ComponentType<React.ComponentProps<'svg'>>
//   description: ReactNode
// }

// const FeatureList: FeatureItem[] = [
//   {
//     title: 'Easy to Use',
//     Svg: '/img/RockIcon.svg',
//     description: (
//       <>
//         Docusaurus was designed from the ground up to be easily installed and used to get your website up and running
//         quickly.
//       </>
//     ),
//   },
//   {
//     title: 'Focus on What Matters',
//     Svg: '/img/RockIcon.svg',
//     description: (
//       <>
//         Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go ahead and move your docs into the{' '}
//         <code>docs</code> directory.
//       </>
//     ),
//   },
//   {
//     title: 'Powered by React',
//     Svg: '/img/RockIcon.svg',
//     description: (
//       <>
//         Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same
//         header and footer.
//       </>
//     ),
//   },
// ]

// function Feature({ title, Svg, description }: FeatureItem) {
//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         <Svg className={styles.featureSvg} role="img" />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <Heading as="h3">{title}</Heading>
//         <p>{description}</p>
//       </div>
//     </div>
//   )
// }

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <p>
            Welcome to the Regolith documentation! Here you can find all the information you need to get started with
            Regolith, including guides, tutorials, and API documentation. Whether you&apos;re a beginner or an
            experienced user, we have resources to help you make the most of Regolith.
          </p>
          <p>
            <strong>NOTE:</strong> This documentation is a work in progress and VERY new. If you have any questions or
            suggestions, please feel free to reach out
          </p>
        </div>
      </div>
    </section>
  )
}
