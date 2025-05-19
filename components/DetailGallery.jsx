import Image from "next/image";

const DetailGallery = ({ name, gallery }) => {
  return (
    <div className="detail_images-container">
        <div className="detail_image-wrapper_1">
            <Image 
                src={gallery[0]}
                alt={`${name} first`}
                fill
                sizes="300px"
                className="detail-image"
            />
        </div>

        <div className="detail_image-wrapper">
            <Image 
                src={gallery[1]}
                alt={`${name} second`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="detail-image"
            />
        </div>

        <div className="detail_image-third-fourth">
            <div className="detail_image-wrapper_3">
                <Image 
                    src={gallery[2]}
                    alt={`${name} third`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="detail-image"
                />
            </div>

            <div className="detail_image-wrapper_4">
                <Image 
                    src={gallery[3]}
                    alt={`${name} fourth`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="detail-image"
                />
            </div>
        </div>
        
        <div className="detail_image-wrapper">
            <Image 
                src={gallery[4]}
                alt={`${name} fifth`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="detail-image"
            />
        </div>
    </div>
  )
}

export default DetailGallery;