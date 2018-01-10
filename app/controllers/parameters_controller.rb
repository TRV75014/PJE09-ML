class ParametersController < ApplicationController
  def home
    @parameter = Parameter.new
  end

  def create
    @parameter = Parameter.new(parameters_params) #Generate a new User instance using parameters collected from the form
    if @parameter.save
      session[:parameter_id] = @parameter.id
      @parameter.users_id = session[:user_id]
      redirect_to '/generate'
    else
      render 'home'
    end
  end

  def update
    @parameter = Parameter.new(parameters_params) #Generate a new User instance using parameters collected from the form
    @parameter.users_id = session[:user_id]
    if @parameter.save
      session[:parameter_id] = @parameter.id
      redirect_to '/generate'
    else
      render 'home'
    end
  end

  private
  # Method to safely collect data from the user's parameters form and store them in the database
  def parameters_params
    params.require(:parameter).permit(:nbRectBlack, :nbRectWhite, :progressif)
  end
end
