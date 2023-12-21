import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Image from 'next/image'
import { Separator } from '../ui/separator'
import { NavItems } from './NavItems'

export const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            className="cursor-pointer"
            src="/assets/icons/menu.svg"
            alt="Menu mobile"
            width={24}
            height={24}
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Image
            src="/assets/images/logo.svg"
            alt="Um ícone colorido com a palavra Evenly escrita a direita"
            width={128}
            height={38}
          />
          <Separator className="border border-gray-50" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  )
}
