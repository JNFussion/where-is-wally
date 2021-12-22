class LevelController < ApplicationController

  def show
    @level = Level.includes(:characters, {characters: :positions}).find(params[:id])
    render json: @level, :include => [:characters => {:include => :positions}]
  end

end
