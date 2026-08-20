import { useEffect, useState } from 'react'

type Options = {
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

export function useTypewriter(
  words: string[],
  { typingSpeed = 70, deletingSpeed = 40, pauseTime = 1400 }: Options = {},
) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0] ?? '')
      return
    }

    const current = words[wordIndex % words.length]
    let timeout: number

    if (!deleting && text.length < current.length) {
      timeout = window.setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed)
    } else if (!deleting && text.length === current.length) {
      timeout = window.setTimeout(() => setDeleting(true), pauseTime)
    } else if (deleting && text.length > 0) {
      timeout = window.setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed)
    } else {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
    }

    return () => window.clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  return text
}
