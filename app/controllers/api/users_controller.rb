class Api::UsersController < ApplicationController

   def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "/api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    sleep (1)
    search_term = params[:searchTerm]
    @users = User.where('lower(username) like ?', "#{search_term.downcase}%")
    render :index
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end

