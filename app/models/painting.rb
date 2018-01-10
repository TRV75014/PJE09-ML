class Painting < ActiveRecord::Base
  validates :mark, presence: true
  belongs_to :parameters
end
