Rails.application.routes.draw do
  namespace :api do
    resources :cart_items, only: [:create, :show, :update, :destroy]
    resources :cart_details, only: [:show, :create]
    resources :reviews, only: [:create, :show, :destroy]
    resources :products
    resources :product_categories
    resources :users do
      resources :cart_details, only: [:show, :index]
    end

    get "/top_producers", to: "users#top_producers"
    get "/me", to: "sessions#show"
    delete "/logout", to: "sessions#destroy"
    post "/signup", to: "users#create"
    post "/login", to: "sessions#create"
    # Routing logic: fallback requests for React Router.
    # Leave this here to help deploy your app later!
  end
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
