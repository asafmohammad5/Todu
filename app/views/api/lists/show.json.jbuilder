json.list do
    json.partial! "api/lists/list", list: @list
end

if @board 
  json.board do 
    json.partial! "api/boards/board", board: @board
  end
else
  json.board {}
end

json.cards do 
  @list.cards.each do |card|
    json.set! card.id do 
      json.partial! "api/cards/card", card: card
    end
  end
end

