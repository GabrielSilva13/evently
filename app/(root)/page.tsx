import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Gerencie, conecte-se, celebre: Seus eventos em nossa plataforma!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Reserve e aprenda dicas úteis de mais de 3.128 mentores em
              empresas de classe mundial com nossa comunidade global.
            </p>
            <Button className="button w-full sm:w-fit" size="lg" asChild>
              <Link href="#events">Saiba Mais</Link>
            </Button>
          </div>

          <Image
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
            src="/assets/images/hero.png"
            alt="Hero"
            width={1000}
            height={1000}
          />
        </div>
      </section>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Confiado por <br />
          milhares de eventos
        </h2>

        <div className="flex w-full flex-col gap-5 md:flex-row"></div>
      </section>
    </>
  )
}
