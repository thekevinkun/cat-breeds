import Link from "next/link";
import { PiCodesandboxLogoDuotone } from "react-icons/pi";
import { GrFormPreviousLink, GrFormNextLink  } from "react-icons/gr";

import { slugify } from "@/lib/helpers";

const PrevNextPage = ({ prevCat, nextCat }) => {
  if (!prevCat && !nextCat) return null;

  return (
    <div className="prev-next-page__container">
        <div className="prev-next-page">
            { prevCat ?
                <Link
                    href={`/cat/${slugify(prevCat.name)}`}
                    className="prev-page"
                >
                    <GrFormPreviousLink className="page-icon" />
                    Prev Cat
                </Link>
            :
                <div
                    className="prev-page disabled"
                >
                    <GrFormPreviousLink className="page-icon" />
                    Prev Cat
                </div>
            }

            <Link
                href={"/"}
                className="home-page"
            >   
                <PiCodesandboxLogoDuotone className="page-icon" />
            </Link>
            
            {nextCat ?
                <Link
                    href={`/cat/${slugify(nextCat.name)}`}
                    className="next-page"
                >
                    Next Cat
                    <GrFormNextLink className="page-icon" />
                </Link>
            :
                <div
                    className="next-page disabled"
                >
                    Next Cat
                    <GrFormNextLink className="page-icon" />
                </div>
            }
        </div>
    </div>
  )
}

export default PrevNextPage;