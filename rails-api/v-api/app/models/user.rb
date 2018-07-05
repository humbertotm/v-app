class User < ApplicationRecord
  has_secure_password
  # Presence validations
  validates_presence_of :username, :email
  # Uniqueness validations
  validates :username, :email, uniqueness: true
  # Length validations
  validates :username, length: { maximum: 30 }
  validates :email, length: { minimum: 3, maximum: 254 }
  # REGEX validation for email, password
  validates :email, format: { with: /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i, :multiline => true }
  # password with complexity requirements validation still pending
end
