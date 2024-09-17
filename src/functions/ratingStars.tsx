import React from "react";
import Rating from "../types/Rating";

// returns set of ingredients in given recipes array
export default function ratingStars(rating: Rating) : any {
    const filledStars = Math.floor(rating)
    const halfStar: boolean = !(rating === filledStars)
    let emptyStars;
    halfStar ? emptyStars = 5 - filledStars - 1 : emptyStars = 5 - filledStars

    return (
        <div className="flex flex-row gap-2" role="img" aria-label={`${rating} out of 5 stars`}>
            {Array.from(Array(filledStars)).map((_, index) => <span key={index} className="material-symbols-sharp">star</span>)}
            {halfStar && <span className="material-symbols-outlined">star_half</span>}
            {Array.from(Array(emptyStars)).map((_, index) => <span key={index} className="material-symbols-outlined">star</span>)}
        </div>
    )
}