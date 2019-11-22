json.checklist do
    json.partial! "api/checklists/checklist", checklist: @checklist
end

if @card 
  json.card do 
    json.partial! "api/cards/card", card: @card
  end
else
  json.card {}
end
