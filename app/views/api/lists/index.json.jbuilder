json.lists do
  @lists.each do |list|
    json.set! list.id do
      json.extract! list, :id, :list_name, :board_id
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