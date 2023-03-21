import { useCurrentTime } from '../hooks'

export const Footer = () => {
  const currentTime = useCurrentTime()
  return <div>{currentTime}</div>
}
