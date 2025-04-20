import Link from "next/link"
import Image from "next/image"
import { Instagram, Phone, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  // Estos enlaces deben ser reemplazados con tus propios enlaces de WhatsApp e Instagram
  const whatsappLink = "https://wa.me/1234567890" // Reemplaza con tu número
  const instagramLink = "https://instagram.com/tu_cuenta" // Reemplaza con tu cuenta

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <ShoppingBag className="h-6 w-6 mr-2" />
          <span className="font-bold">Mi Tienda</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#productos">
            Productos
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#nosotros">
            Nosotros
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contacto">
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Descubre nuestros productos de calidad
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrecemos los mejores productos del mercado con precios competitivos y atención personalizada.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Phone className="mr-2 h-4 w-4" />
                      Contáctanos por WhatsApp
                    </Button>
                  </Link>
                  <Link href="#productos">
                    <Button variant="outline">Ver productos</Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <Image
                  alt="Productos destacados"
                  className="rounded-xl object-cover"
                  height={400}
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="productos" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Productos</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubre nuestra selección de productos de alta calidad.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="rounded-lg border bg-white shadow-sm">
                  <Image
                    alt={`Producto ${item}`}
                    className="rounded-t-lg object-cover w-full aspect-[4/3]"
                    height={300}
                    src={`/placeholder.svg?height=300&width=400&text=Producto+${item}`}
                    width={400}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">Producto {item}</h3>
                    <p className="text-sm text-gray-500 mt-2">
                      Descripción del producto. Aquí puedes detallar las características y beneficios.
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="font-bold">$99.99</span>
                      <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Comprar
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="nosotros" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mx-auto lg:mr-auto">
                <Image
                  alt="Sobre nosotros"
                  className="rounded-xl object-cover"
                  height={400}
                  src="/placeholder.svg?height=400&width=600&text=Nuestra+Historia"
                  width={600}
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Sobre Nosotros</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Somos una empresa comprometida con la calidad y la satisfacción del cliente. Nuestra misión es ofrecer
                  los mejores productos y un servicio excepcional.
                </p>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Con años de experiencia en el mercado, nos hemos ganado la confianza de nuestros clientes gracias a
                  nuestra dedicación y profesionalismo.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contáctanos</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estamos aquí para ayudarte. Contáctanos por WhatsApp o síguenos en Instagram.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Phone className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                </Link>
                <Link href={instagramLink} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    <Instagram className="mr-2 h-4 w-4" />
                    Instagram
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t items-center px-4 md:px-6">
        <p className="text-xs text-gray-500">© 2025 Mi Tienda. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Link>
        </nav>
      </footer>
    </div>
  )
}
