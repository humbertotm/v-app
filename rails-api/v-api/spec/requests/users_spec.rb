require 'rails_helper'

RSpec.describe 'Users API', type: :request do
  # Test suite for POST /signup
  describe 'POST /signup' do
    # valid payload
    let(:valid_params) { {
      username: 'valid1',
      email: 'valid1@mail.com',
      password: 'validpassword',
      password_confirmation: 'validpassword'
    } }

    let(:invalid_params) { {
      username: 'valid1',
      email: 'valid1@mail',
      password: 'valid'
    } }

    context 'when signup is valid' do
      before { post '/signup', params: valid_params }

      it 'creates new user and returns it in JSON' do
        expect(json['username']).to eq('valid1')
      end

      it 'responds with a 201 status code' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when signup is invalid' do
      before { post '/signup', params: invalid_params }

      it 'responds with an error message' do
        expect(json['error']).not_to be_empty
      end

      it 'responds with a 422 status code' do
        expect(response).to have_http_status(422)
      end
    end
  end
end
