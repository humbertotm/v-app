require 'rails_helper'

RSpec.describe 'Sessions API', type: :request do
  # Test suite for POST /login
  describe 'POST /login' do
    # user in db
    let!(:test_user) { create(:user) }

    # valid payload
    let(:valid_params) { {
      email: 'example@mail.com',
      password: 'examplepassword'
    } }

    # invalid payload
    let(:invalid_params) { {
      email: 'incorrect@mail.com',
      password: 'wrongpassword'
    } }

    context 'when login is valid' do
      before { post '/login', params: valid_params }

      it 'logs user in' do
        expect(json['jwt']).not_to be_empty
        expect(response).to have_http_status(200)
      end

    end

    context 'when login fails' do
      before { post '/login', params: invalid_params }

      it 'responds with an error message' do
        expect(json['error']).not_to be_empty
        expect(response).to have_http_status(404)
      end
    end
  end
end
