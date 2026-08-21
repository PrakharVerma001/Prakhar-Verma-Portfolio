import { useEffect, useState } from 'react'

type Options = {
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

export function useTypewriter(
  words: string[],
  { typingSpeed = 100, deletingSpeed = 40, pauseTime = 2000 }: Options = {},
) {
  const [wordIndex, setWordIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const current = words[wordIndex % words.length] ?? ''
    let delay = deleting ? deletingSpeed : typingSpeed

    if (!deleting && subIndex === current.length) {
      delay = pauseTime
    }

    const timeout = window.setTimeout(() => {
      if (!deleting && subIndex < current.length) {
        setSubIndex((n) => n + 1)
      } else if (!deleting && subIndex === current.length) {
        setDeleting(true)
      } else if (deleting && subIndex > 0) {
        setSubIndex((n) => n - 1)
      } else {
        setDeleting(false)
        setWordIndex((i) => (i + 1) % words.length)
      }
    }, delay)

    return () => window.clearTimeout(timeout)
  }, [subIndex, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return words[0] ?? ''
  }

  const current = words[wordIndex % words.length] ?? ''
  return current.slice(0, subIndex)
}
