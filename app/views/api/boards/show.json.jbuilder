json.board do 
  json.partial! "api/boards/board", board: @board
end

json.lists do 
  @board.lists.each do |list|
    json.set! list.id do 
      json.partial! "api/lists/list", list: list
    end
  end
end

json.cards do 
  @board.cards.each do |card|
    json.set! card.id do 
      json.partial! "api/cards/card", card: card
    end
  end
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