class User < ApplicationRecord

  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session

  has_many :created_boards,
  foreign_key: :owner_id,
  class_name: :Board

  has_many :team_memberships,
  foreign_key: :member_id,
  class_name: :TeamMembership

  has_many :boards,
  through: :team_memberships,
  source: :board

  def self.find_by_creds(username, password)
    user = User.find_by(username: username)
    return user if user && user.is_password?(password)
    nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session
    generate_unique_session
    save!
    self.session_token
  end

  private 

  def self.generate_session
    SecureRandom.urlsafe_base64
  end

  def ensure_session
    self.session_token ||= generate_unique_session
  end

  def generate_unique_session
    self.session_token = User.generate_session
    while User.find_by(session_token: self.session_token)
      self.session_token = User.generate_session
    end
    self.session_token
  end
end
