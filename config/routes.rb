Rails.application.routes.draw do
  # Routes for User's controller (User's management)
  get 'signin' => 'users#new' # Link '/signin' to User's "new" actions
  post 'signin' => 'users#create'
#  get 'account' => 'users#parameters'
#  post 'account' => 'users#update'
#  delete 'account' => 'users#delete'
  resources :users # Create the 7 actions for :users (maps HTTP verbs to controller actions automatically)

  # Routes for Session's controller (controll active user's sessions)
  get 'login' => 'sessions#new' # Link '/login' to Session's "new" actions
  post 'login' => 'sessions#create' # Link '/login' post method to Session's "create" actions
  delete 'logout' => 'sessions#destroy' # Link '/logout' destroy method to Session's "destroy" actions

  # Routes for PaintingParametersController
  get 'home' => 'parameters#home' # Link '/home' to Parameter's "new" actions
  post 'home' => 'parameters#create'# Link '/home' post method to Parameter's "create" actions
  resources :parameters # Create the 7 actions for :parameters (maps HTTP verbs to controller actions automatically)

  # Routes for Painting's controller
  get 'generate' => 'paintings#new' # Link '/generate' to Painting's "new" actions
  post 'generate' => 'paintings#create' # Link '/generate' post method to Painting's "create" actions
  get 'history/:id' => 'paintings#index'
  resources :paintings # Create the 7 actions for :paintings (maps HTTP verbs to controller actions automatically)

#  post 'bookmarks/create' => 'bookmarks#create'
#  get 'bookmarks/index' => 'bookmarks#index'
#  delete 'bookmarks/delete' => 'bookmarks#delete'

  root "sessions#new" # Set the root to get to Session's "new" actions

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
