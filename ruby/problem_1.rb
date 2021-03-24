# frozen_string_literal: true

require 'csv'
require 'json'

# Create a table out of given file
table_of_teams = CSV.parse(File.read('../dataset/deliveries.csv'), headers: true)
hash_of_teams = Hash.new(0)

# Calculate total runs of each team
table_of_teams.each do |table_row|
  hash_of_teams[table_row['batting_team']] += table_row['total_runs'].to_i
end

# Save data into the JSON file
File.write('../json/result_1.json', JSON.dump(hash_of_teams))
