FactoryBot.define do
  factory :user do
    username { 'exampleuser' }
    email { 'example@mail.com' }
    password { 'examplepassword' }
  end
end
