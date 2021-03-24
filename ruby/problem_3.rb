# frozen_string_literal: true

require 'csv'
require 'json'

# create table from data in the file
table_of_umpires = CSV.parse(File.read('../dataset/umpires.csv'), headers: true)

ipl_umpires = Hash.new(0)

table_of_umpires.each do |table_row|
  ipl_umpires[table_row['Nationality']] += 1 if table_row['Nationality'] != 'India'
end

# Save data into the JSON file
File.write('../json/result_3.json', JSON.dump(ipl_umpires))
