class UsersController < ApplicationController
  skip_before_action :authenticate, only: :create

  # POST /users
  def create
    @user = User.create!(user_params)
    json_response(@user, :created)
  end

  private

    def user_params
      # Params whitelist
      params.permit(:username, :email, :password, :password_confirmation)
    end
end
