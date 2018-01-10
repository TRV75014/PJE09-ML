class Parameter < ActiveRecord::Base
  validates :nbRectBlack, presence: true
  validates :nbRectWhite, presence: true

  belongs_to :users
  has_many :paintings
end
