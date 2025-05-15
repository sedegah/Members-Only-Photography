import Image from "next/image";

const galleryImages = [
  {
    src: "https://ext.same-assets.com/685903762/3737043100.jpeg",
    alt: "Beach view 1"
  },
  {
    src: "https://ext.same-assets.com/685903762/79221437.jpeg",
    alt: "Beach landscape"
  },
  {
    src: "https://ext.same-assets.com/685903762/1922911131.jpeg",
    alt: "Beach view 2"
  },
  {
    src: "https://ext.same-assets.com/685903762/765341426.jpeg",
    alt: "Beach house 1"
  },
  {
    src: "https://ext.same-assets.com/685903762/2451958678.jpeg",
    alt: "Beach house 2"
  },
  {
    src: "https://ext.same-assets.com/685903762/422542202.jpeg",
    alt: "Beach restaurant"
  }
];

export default function Gallery() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Gallery Header */}
      <section className="py-16 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-medium mb-4">Catalogue</h1>
          <p className="text-gray-600">A few honourable picks from our photo catalogue</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative h-[300px] overflow-hidden rounded-md hover:opacity-90 transition-opacity"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
