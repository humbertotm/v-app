Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :users, only: :create
  post 'signup', action: :create, controller: 'users'
  post 'login', action: :login, controller: 'users'
end
