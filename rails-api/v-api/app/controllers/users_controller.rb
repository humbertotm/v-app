class UsersController < ApplicationController
  include Response
  include ExceptionHandler

  # POST /users
  def create
    @user = User.create!(user_params)
    json_response(@user, :created)
  end

  # POST /login
  def login
    # FIND A BETTER WAY TO HANDLE NOT FOUND RECORDS AND THROW EXCEPTION
    # WHEN PARAMS ARE INCOMPLETE  
    @user = User.find_by(email: user_params[:email]).try(:authenticate, user_params[:password])
    if !@user
      json_response(nil, 404)
    else
      json_response(@user, :ok)
    end
  end

  private

  def user_params
    # Params whitelist
    params.permit(:username, :email, :password, :password_confirmation)
  end
end
