if @card
  json.card do 
    json.partial! "api/cards/card", card: @card
  end
else
  json.card {}
end