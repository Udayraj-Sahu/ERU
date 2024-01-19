import React from "react";
import "../Review/Review.scss";
import ReviewCard from "../ReviewCard/ReviewCard";
function Review() {

	return (
		<>
			<div className="review-container">
				<div className="review">
					<h1 className="heading">Review</h1>
				</div>
				<div className="Review-card">
					<ReviewCard />
				</div>
			</div>
		</>
	);
}

export default Review;
