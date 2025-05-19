import { DetailGallery, DetailProfile } from "@/components";

const ContentDetail = ({ cat }) => {
  return (
    <section className="content-detail">
        <div
          style={{
            background: cat.bgColor
          }}
          className="content-detail__container"
        >
          <DetailGallery 
            name={cat.name}
            gallery={cat.gallery}
          />

          <DetailProfile 
            name={cat.name}
            origin={cat.profile.origin}
            otherNames={cat.otherNames}
            height={cat.profile.height}
            adultWeight={cat.profile.adultWeight}
            lifeSpan={cat.profile.lifeSpan}
            temperament={cat.profile.temperament}
            existence={cat.profile.existence}
          />
        </div>
    </section>
  )
}

export default ContentDetail;