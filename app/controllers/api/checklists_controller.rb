class Api::ChecklistsController < ApplicationController
   before_action :require_logged_in

  def create
    @checklist = Checklist.new(checklist_params)
    @checklist.card_id = params[:card_id]

    if @checklist.save 
     @card = Card.find(params[:card_id])
     render :show 
    else  
      render json: @checklist.errors.full_messages, status: 422
    end
  end


  def show
    @checklist = Checklist.find(params[:id])
  end


  def index
    @card = Card.find(params[:card_id])
    @checklists = @card.checklists
    render :index
  end


  def update
    @checklist = Checklist.find(params[:id])
    @card = Card.find(params[:card_id])

    if @checklist.update(checklist_params)
      render :show 
    else  
      render json: @checklist.errors.full_messages, status: 422
    end
  end


  def destroy
    checklist = Checklist.find(params[:id])
    checklist.destroy
    @card = Card.find(params[:card_id])
    @checklists = @card.checklists
    render "api/cards/show"
  end

  private

  def checklist_params
    params.require(:checklist).permit(:name, :checked)
  end

end