class Api::ListsController < ApplicationController
   before_action :require_logged_in

  def create
    @list = List.new(list_params)
    @list.board_id = params[:board_id]
    if @list.save 
     @board = Board.find(params[:board_id])
     render :show 
    else  
      render json: @list.errors.full_messages, status: 422
    end
  end


  def show
    @list = List.find(params[:id])
  end


  def index
    @board = Board.find(params[:board_id])
    @lists = @board.lists
    render :index
  end


  def update
    @list = List.find(params[:id])

    if @list.update(list_params)
      render :show 
    else  
      render json: @list.errors.full_messages, status: 422
    end
  end


  def destroy
    @list= List.find(params[:id])
    @list.destroy
    @board = Board.find(params[:board_id])
    @lists = @board.lists
    render :index
  end

  private

  def list_params
    params.require(:list).permit(:list_name)
  end

end