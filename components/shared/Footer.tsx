import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="Um ícone colorido com a palavra Evenly escrita a direita"
            width={128}
            height={38}
          />
        </Link>
        <p>{currentYear} &copy; Todos os direitos reservados. </p>
      </div>
    </footer>
  )
}
