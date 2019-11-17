json.boards do
  @boards.each do |board|
    json.set! board.id do
      json.extract! board, :id, :project_name, :owner_id
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