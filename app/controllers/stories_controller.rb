class StoriesController < ApplicationController

  def index
    render json: Story.all
  end

  def show
    render json: Story.find(params[:id])
  end

  def create
    render json: Story.create(story_params)
  end

  private
  
  def story_params
    params[:story].permit(:title, :body)
  end

end
