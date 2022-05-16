import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from 'src/app/interfaces/review';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  reviews: Review[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private reviewSerivice: ReviewService
  ) {}

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews(): void {
    let code = this.activatedRoute.snapshot.paramMap.get('code');

    this.reviewSerivice
      .getReviewsByCode(code)
      .subscribe((reviews) => (this.reviews = reviews));
  }
}
