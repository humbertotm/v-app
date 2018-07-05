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
        expect(json['message']).to include('Validation failed')
      end

      it 'responds with a 422 status code' do
        expect(response).to have_http_status(422)
      end
    end
  end

  describe 'POST /login' do
    # valid payload
    let(:valid_params) { {
      email: 'example@mail.com',
      password: 'examplepassword'
    } }

    let(:invalid_params) { {
      email: 'example@mail.com',
      password: 'examplepass'
    } }

    # Need a record in the DB
    let!(:test_user) { create(:user) }

    context 'when login is valid' do
      before { post '/login', params: valid_params }

      it 'logs user in' do
        expect(json['username']).to eq('exampleuser')
        expect(response).to have_http_status(200)
      end
    end

    context 'when login in invalid' do
      before { post '/login', params: invalid_params }

      it 'responds with a 404 status code' do
        expect(response).to have_http_status(404)
      end
    end
  end
end
