class User < ActiveRecord::Base
  validates_uniqueness_of :username
  validates :username, presence: true
  validates :email, presence: true
  validates :password, presence: true
  
  has_secure_password # Store the users' passwords as encrypted in the database
  has_many :parameters
  has_many :paintings, through: :parameters
end
