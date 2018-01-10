class SessionsController < ApplicationController
  def new
  end
  def create
    @user = User.find_by_username(params[:session][:username])
    if @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      session[:username] = @user.username
      redirect_to '/home'
    else
      render 'new'
    end
  end
  def destroy
    session[:user_id] = nil
    redirect_to '/'
  end
end
