import { useEffect } from 'react'

export const useScrollFix = () => {
  useEffect(() => {
    const scrollToHash = () => {
      if (window.location.hash) {
        const id = window.location.hash.replace('#', '')
        const el = document.getElementById(id)
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 80
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }
    }

    // Scroll on first load
    scrollToHash()

    // Scroll on hash change
    window.addEventListener('hashchange', scrollToHash)

    // Cleanup
    return () => {
      window.removeEventListener('hashchange', scrollToHash)
    }
  }, [])
}
