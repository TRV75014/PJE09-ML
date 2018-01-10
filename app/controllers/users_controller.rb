class UsersController < ApplicationController
  def new
    @user = User.new  # Generates a new User instance and pass it to the view in '/views/users/new.html.erb'
  end

  def create
    @user = User.new(user_params) #Generate a new User instance using parameters collected from the form
    if @user.save
      session[:user_id] = @user.id
      redirect_to '/login'
    else
      render 'new'
    end
  end

  private
  # Method to safely collect data from the user's parameters form and store them in the database
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
