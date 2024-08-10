"use client"
import { Switch } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export default function LrThemeSwitch() {
  const [enabled, setEnabled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setIsMounted(true), [])

  useEffect(() => {
    if (resolvedTheme === 'dark') {
      setEnabled(true)
    } else {
      setEnabled(false)
    }
  }, [resolvedTheme])

  useEffect(() => {
    if (!isMounted) return
    if (enabled) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [enabled])

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-black/10 dark:bg-white/10 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10"
      id='theme-switch'
    >
      <span
        aria-hidden="true"
        className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-black/80 dark:bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
      />
    </Switch>
  )
}
