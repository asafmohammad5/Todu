json.card do
    json.partial! "api/cards/card", card: @card
end

json.checklist do 
  @card.checklists do |checklist|
    json.set! checklist.id do
      json.partial! "api/checklists/checklist", checklist: checklist
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
