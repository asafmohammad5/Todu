json.card do
    json.partial! "api/cards/card", card: @card
end

json.checklist do 
  @card.checklists do |checklist|
    json.set! checklist.id do
      json.extract! checklist, :id, :name, card_id, :checked
    end
  end
end

if @list 
  json.list do 
    json.partial! "api/lists/list", list: @list
  end
else
  json.list {}
end
