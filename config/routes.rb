Rails.application.routes.draw do
  resources :users, only: [:index, :show, :create]
  resources :markers, only: [:index, :show, :create, :update]
  resources :cats
  resources :sightings, only: [:index, :show, :create]

  post '/login', to: 'sessions#create'
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/hello', to: 'application#hello_world'
  # Defines the root path route ("/")
  # root "articles#index"
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
