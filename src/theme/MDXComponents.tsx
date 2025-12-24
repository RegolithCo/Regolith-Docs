// import Footer from '../components/Footer'
// import MDXComponentsClassic from '@docusaurus/theme-classic/lib/theme/MDXComponents'
import Admonition from '@docusaurus/theme-classic/lib/theme/Admonition'
import MDXCode from '@docusaurus/theme-classic/lib/theme/MDXComponents/Code'
import MDXPre from '@docusaurus/theme-classic/lib/theme/MDXComponents/Pre'
import MDXDetails from '@docusaurus/theme-classic/lib/theme/Details'
import Head from '@docusaurus/Head'
import YouTubeEmbed from '../components/YouTubeEmbed'
import MDXA from './MDXComponents/A'

/**
 * Anything you export here will be available in MDX files without needing an import
 */
const MDXComponents = {
  Head,
  details: MDXDetails, // For MD mode support, see https://github.com/facebook/docusaurus/issues/9092#issuecomment-1602902274
  Details: MDXDetails,
  YouTubeEmbed,
  a: MDXA,
  admonition: Admonition,
  code: MDXCode,
  pre: MDXPre,
}

export default MDXComponents
