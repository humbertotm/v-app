require 'rails_helper'

RSpec.describe User, type: :model do
  # Presence validation tests
  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password) }

  # username validations
  it { should validate_uniqueness_of(:username) }
  it { should validate_length_of(:username).is_at_most(30) }

  # email validations
  it { should validate_uniqueness_of(:email) }
  it { should validate_length_of(:email).is_at_least(3) }
  it { should validate_length_of(:email).is_at_most(254) }
  it { should_not allow_value('test@test').for(:email) }
  it { should allow_value('test@test.com').for(:email) }
end
