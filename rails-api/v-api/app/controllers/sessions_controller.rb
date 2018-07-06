class SessionsController < ApplicationController
  skip_before_action :authenticate

  # POST /login
  def create
    # What if no User is found? How do we recover from this scenario?
    user = User.find_by(email: auth_params[:email])
    if user
      if user.authenticate(auth_params[:password])
        jwt = Auth.issue_token({ user: user.id })
        json_response({ jwt: jwt }, :ok)
      else
        json_response({ error: 'Unable to authenticate user' }, :not_found)
      end
    else
      # Email was not found. What is a better response message?
      json_response({ error: 'Incorrect credentials' }, :not_found)
    end
  end

  private
    def auth_params
      params.permit(:email, :password)
    end
end
