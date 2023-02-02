class ReviewsController < ApplicationController

    before_action :find_review, only: [:show, :destroy]

    def show
        render json: @review
    end

    def create
        review = create!(review_params)
        render json: review, status: :created
    end

    def destroy
        @review.destroy
        head :no_content
    end

    private

    def find_review
        @review = Review.find(params[:id])
    end

    def review_params
        params.permit(:review)
    end

end
