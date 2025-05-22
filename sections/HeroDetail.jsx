import Image from "next/image";

const HeroDetail = ({ heroRef, cat, zIdx, onImageLoad }) => {
  return (
    <section 
        ref={heroRef}
        id="hero-detail"
        className="hero-detail"
        style={{
            zIndex: zIdx ? zIdx : 2
        }}
    >
        <div className="hero-detail__image-wrapper">
            <Image 
                priority
                src={cat.backdrop}
                alt={cat.name}
                fill
                sizes="100vw"
                className="hero-detail_image"
                onLoadingComplete={onImageLoad}
            />

            <div className="hero-detail_overlay" />
        </div>

        <div className="hero-detail__header">
            <h1 className="text-hero">
                {cat.name}
            </h1>
        </div>
    </section>
  )
}

export default HeroDetail;