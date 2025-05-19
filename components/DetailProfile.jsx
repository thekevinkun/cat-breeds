const DetailProfile = ({name, origin, otherNames, 
    height, adultWeight, lifeSpan, temperament, existence}) => {
  
  return (
    <div className="detail_profile-wrapper">
        <article className="profile">
            {/* PROFILE TITLE */}
            <h2 className="text-profile_title profile_title">
                {name}'s Profile
            </h2>
            
            {/* PROFILE ORIGIN */}
            <div className="profile-part profile_origin">
                <h3 className="text-profile">Origin</h3>

                <p className="text-profile-item">
                    {origin}
                </p>
            </div>

            {/* PROFILE OTHER NAMES */}
            {otherNames &&
                <div className="profile-part profile_other-names">
                    <h3 className="text-profile">Other names</h3>
                
                    <div className="other-names">
                        {otherNames.map((name, index) => (
                            <p 
                                key={`${name}-other-names-${index + 1}`}
                                className="text-profile-item"
                            >
                                {name}{`${(index + 1 < otherNames.length) ? ", " : ""}`}
                            </p>
                        ))}
                    </div>
                </div>
            }

            {/* PROFILE BODY & LIFE */}
            <div className="profile_body-life">
                <div className="profile-part">
                    <h3 className="text-profile">Height</h3>

                    <p className="text-profile-item">
                        {height}
                    </p>
                </div>

                <div className="profile-part">
                    <h3 className="text-profile">Adult Weight</h3>

                    <p className="text-profile-item">
                        {adultWeight}
                    </p>
                </div>

                <div className="profile-part">
                    <h3 className="text-profile">Life Span</h3>

                    <p className="text-profile-item">
                        {lifeSpan}
                    </p>
                </div>
            </div>

            {/* PROFILE TEMPERAMENT */}
            <div className="profile-part profile_temperament">
                <h3 className="text-profile">Temperament</h3>

                <ul className="temperament-list">
                    {temperament.map((item, index) => (
                    <li key={`${name}-temperament-${index + 1}`}>
                        <p className="text-profile-item">{item}</p>
                    </li>
                    ))}
                </ul>
            </div>
            
            {/* PROFILE EXISTENCE */}
            <div className="profile-part profile_existence">
                <h3 className="text-profile">Existence</h3>
                
                <div className="profile_existence-article">
                    {existence.map((article, index) => (
                    <p 
                        key={`${name}-existence-${index + 1}`} 
                        className="text-profile-item"
                    >
                        {article}
                    </p>
                    ))}
                </div>
            </div>
        </article>
    </div>
  )
}

export default DetailProfile;