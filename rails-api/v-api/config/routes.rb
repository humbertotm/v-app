Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :users, only: :create
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
end
