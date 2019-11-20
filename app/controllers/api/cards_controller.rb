class Api::CardsController < ApplicationController
   before_action :require_logged_in

  def create
    @card = Card.new(card_params)
    @card.list_id = params[:list_id]

    if @card.save 
     @list = List.find(params[:list_id])
     render :show 
    else  
      render json: @card.errors.full_messages, status: 422
    end
  end


  def show
    @card = Card.find(params[:id])
  end


  def index
    @list = List.find(params[:list_id])
    @cards = @list.cards
    render :index
  end


  def update
    @card = Card.find(params[:id])

    if @card.update(card_params)
      render :show 
    else  
      render json: @card.errors.full_messages, status: 422
    end
  end


  def destroy
    @card = Card.find(params[:id])
    @card.destroy
    @list = List.find(params[:list_id])
    @cards = @list.cards
    render :index
  end

  private

  def card_params
    params.require(:card).permit(:card_name, :description, :comments, :due_date)
  end

end