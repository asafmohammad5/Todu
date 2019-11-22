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
    @card = Card.includes(:checklists).find(params[:id])
  end


  def index
    @list = List.find(params[:list_id])
    @cards = @list.cards
    render :index
  end


  def update
    @card = Card.includes(:checklists).find(params[:id])
    @list = List.find(params[:list_id])

    if @card.update(card_params)
      render :show 
    else  
      render json: @card.errors.full_messages, status: 422
    end
  end


  def destroy
    card = Card.find(params[:id])
    card.destroy
    @list = List.find(params[:list_id])
    @cards = @list.cards
    render :index
  end

  def add_member 
    @card = Card.find(params[:id])
    @user = User.find(params[:userId])
    board = Board.find(params[:board_id])
    
    if (board.owner_id != @user.id && !@user.cards.include?(@card))
      @user.cards << @card 
    end
    render :show
  end


  def remove_member
    @card = Card.find(params[:id])
    @user = User.find(params[:userId])
    board = Board.find(params[:board_id])

   if (board.owner_id != @user.id)
      @user.cards.delete(@card)
   end
    render :show
  end

  private

  def card_params
    params.require(:card).permit(:card_name, :description, :comments, :due_date, :list_id)
  end

end