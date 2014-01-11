require 'httparty'

module Treehouse
  class Profile
    attr_reader :profile
    def initialize(profile="http://teamtreehouse.com/andrejones.json")
      @profile = HTTParty.get profile
    end
    
    def badge_count
      @profile["badges"].count
    end
    
    def badges
      #pics and title
      list = Array.new
      @profile["badges"].each do |badge|
        list << [badge["name"], badge["icon_url"]]
      end
      list
    end
    
    def points(subject)
      list = ['total','html','css','javascript','ruby','ios','business','android','wordpress','dev tools']
      if list.include? subject
       @profile["points"][subject]
      end
    end
    
  end
end

me = Treehouse::Profile.new
puts me.points('html')
