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

