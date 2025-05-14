import { ContentCard } from "@/components";

import { cats } from "@/data/cats";

const ContentList = () => {
  return (
    <section id="content-list" className="content-list">
      <div className="content-list__container">
        {cats.map((cat) => (
          <ContentCard 
            key={cat.name}
            name={cat.name}
            poster={cat.poster}
            bgColor={cat.bgColor}
          />
        ))}
      </div>
    </section>
  )
}

export default ContentList;