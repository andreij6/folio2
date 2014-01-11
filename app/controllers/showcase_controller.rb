require 'treehouse'
class ShowcaseController < ApplicationController
  def index
    @tree = Treehouse::Profile.new
  end
end
