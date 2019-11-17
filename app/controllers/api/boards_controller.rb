class Api::BoardsController < ApplicationController
  before_action :require_logged_in

  def create
    @board = Board.new(board_params)
    @board.owner_id = current_user.id

    if @board.save 
     @user = current_user
     render :show 
    else  
      render json: @board.errors.full_messages, status: 422
    end
  end


  def show
    @board = Board.find(params[:id])
    @users = @board.members
  end


  def index
    @boards = current_user.created_boards + current_user.boards
    render :index
  end


  def update
    @board = Board.find(params[:id])

    if @board.update(board_params)
      render :show 
    else  
      render json: @board.errors.full_messages, status: 422
    end
  end


  def destroy
    @board = Board.find(params[:id])
    @board.destroy
    @boards = current_user.created_boards + current_user.boards
    @user = current_user
    render :index
  end

  def add_member 
    @board = Board.find(params[:id])
    @user = User.find(params[:userId])
    
    if (@board.owner_id != @user.id && !@user.boards.include?(@board))
      @user.boards << @board  
    end
    render :show
  end


  def remove_member
    @board = Board.find(params[:id])
    @user = User.find(params[:userId])

   if (@board.owner_id != @user.id)
      @user.boards.delete(@board)
   end
    render :show
  end

  private

  def board_params
    params.require(:board).permit(:project_name)
  end
end