# frozen_string_literal: true

require 'csv'
require 'json'

# create table of data out of the given file
table_of_teams = CSV.parse(File.read('../dataset/deliveries.csv'), headers: true)
rcb_batsman = Hash.new(0)

# fetch total runs of each batsman of RCB
table_of_teams.each do |table_row|
  if table_row['batting_team'] == 'Royal Challengers Bangalore'
    rcb_batsman[table_row['batsman']] += table_row['total_runs'].to_i
  end
end

# extract the data of top 10 batsman
rcb_batsman = rcb_batsman.sort_by { |_name, runs| runs }.reverse

top_rcb = {}
no_of_top_batsman = 10
rcb_batsman.each_with_index do |(k, v), i|
  top_rcb[k] = v if i < no_of_top_batsman
  break if i == no_of_top_batsman
end

pp top_rcb

# Save data into the JSON file
File.write('../json/result_2.json', JSON.dump(top_rcb))
