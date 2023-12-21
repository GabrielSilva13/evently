'use client'

import { headerLinks } from '@/consts'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const NavItems = () => {
  const pathName = usePathname()
  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathName === link.route

        return (
          <li
            key={link.route}
            className={cn('flex-center p-medium-16 whitespace-nowrap', {
              'text-primary-500': isActive,
            })}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}
