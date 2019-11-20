json.lists do
  @lists.each do |list|
    json.set! list.id do
      json.partial! "api/lists/list", list: list
    end
  end
end

if @board 
  json.board do 
    json.partial! "api/boards/board", board: @board
  end
else
  json.board {}
end