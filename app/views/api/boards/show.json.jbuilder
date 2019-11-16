json.board do 
  json.partial! "api/boards/board", board: @board
end

if @user 
  json.user do 
    json.partial! "api/users/user", user: @user
  end
else
  json.user {}
end

if @users
  json.users do 
    @users.each do |user|
      json.set! user.id do 
        json.partial! "api/users/user", user: user
      end
    end
  end
else 
  json.users {}
end