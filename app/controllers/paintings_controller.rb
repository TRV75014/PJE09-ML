class PaintingsController < ApplicationController
  # new action
  def new
    @painting = Painting.new
    @parameter = Parameter.find_by id: session[:parameter_id]
    @nbRectBlack = @parameter.nbRectBlack
    @nbRectWhite = @parameter.nbRectWhite
    @progressif = @parameter.progressif
  end

  # home action
  def create
    @painting = Painting.new(painting_params)
    if @painting.save
      redirect_to '/generate'
    else
      render 'generate'
    end
  end

  private
  # Method to safely collect data from the user's parameters form and store them in the database
  def painting_params
    params.require(:painting).permit(:mark, :JsonData)
  end
end
