# frozen_string_literal: true

require 'csv'
require 'json'

# fetch data from the matches file
table_of_teams = CSV.parse(File.read('../dataset/matches.csv'), headers: true)

# create a nested Hash out the data fetched
matches_played = Hash.new { |hash, key| hash[key] = Hash.new(0) }

table_of_teams.each do |table_row|
  matches_played[table_row['season']][table_row['team1']] += 1
  matches_played[table_row['season']][table_row['team2']] += 1
end

# Sort the hash according the Seasons (2008 ..... 2017)
matches_played = matches_played.sort_by { |key, _| -key }.to_h

# Creating hash of matches_by_team_by_season
# also resolving the issue of not getting zero values
hash_of_teams = Hash.new { |hash, key| hash[key] = [0] * matches_played.length }

matches_played.each_with_index do |(_, value), label_index|
  value.each do |team, match|
    hash_of_teams[team][label_index] = match
  end
end

# Save data into the JSON file
File.write('../json/result_4.json', JSON.dump(hash_of_teams))
