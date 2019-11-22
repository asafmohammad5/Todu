json.extract! card, :id, :card_name, :description, :due_date, :comments, :list_id
json.memberIds card.subteam_member_ids

if card.checklists.length > 0
  json.checklists do
      card.checklists.each do |checklist|
        json.set! checklist.id do
          json.partial! "api/checklists/checklist", checklist: checklist
        end
      end
  end
else 
   json.checklists {}
end



