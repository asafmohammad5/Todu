@boards.each do |board|
  json.set! board.id do
    json.extract! board, :id, :project_name, :owner_id
  end
end