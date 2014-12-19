json.array!(@items) do |item|
  json.extract! item, :id, :produto, :quantidade, :importante
end

