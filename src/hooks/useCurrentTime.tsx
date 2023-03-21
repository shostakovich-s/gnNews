import { useState, useEffect } from 'react'

function getCurrentTime() {
  const d = new Date()
  return d.toTimeString().split(' ')[0]
}

export const useCurrentTime = () => {
  const [date, setDate] = useState(getCurrentTime())

  useEffect(() => {
    let timer = setInterval(() => setDate(getCurrentTime()), 1000)
    return () => clearInterval(timer)
  }, [])
  return date
}
