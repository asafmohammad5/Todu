Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy]
    resources :boards, only: [:show, :create, :destroy, :index, :update] do 
      resources :lists, only: [:show, :create, :destroy, :index, :update]
      member do 
        post :add_member
        delete :remove_member
      end
    end
  end

  root "static_pages#root"
end
