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
    @painting.parameters_id = session[:parameter_id]
    if @painting.save
      redirect_to '/generate'
    else
      render 'generate'
    end
  end

  def index
    @painting = Painting.find_by id: params[:id]
    @mark = @painting.mark
    @JsonData = @painting.JsonData
    @hash = JSON.parse @JsonData
    @RectBlack = @hash['RectBlack']
    @RectWhite = @hash['RectWhite']
    @nbBlacks = @RectBlack.size
    @nbWhites = @RectWhite.size
  end

  private
  # Method to safely collect data from the user's parameters form and store them in the database
  def painting_params
    params.require(:painting).permit(:mark, :JsonData)
  end
end
