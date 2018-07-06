require 'jwt'

class Auth


  def self.issue_token(payload)
    JWT.encode(
      payload,
      auth_secret,
      HASHING_ALGORITHM
    )
  end

  def self.decode_token(token)
    JWT.decode(
      token,
      auth_secret,
      true,
      { algorithm: HASHING_ALGORITHM }
    ).first
  end

  def self.refresh_token(token)
  end

  private

    HASHING_ALGORITHM = 'HS256'

    def self.auth_secret
      Rails.application.secrets.auth_secret
    end
end
