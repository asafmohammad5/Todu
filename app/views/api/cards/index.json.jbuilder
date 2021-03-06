if @cards.length > 0
  json.cards do
      @cards.each do |card|
        json.set! card.id do
          json.partial! "api/cards/card", card: card
        end
      end
  end
else 
   json.cards {}
end

if @list 
  json.list do 
    json.partial! "api/lists/list", list: @list
  end
else
  json.list {}
end