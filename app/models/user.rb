class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :username, uniqueness: true, presence: true

  has_many :room_messages, dependent: :destroy
  has_one_attached :avatar

  def gravatar_url

     # url_for(self.avatar)
     self.avatar
    # gravatar_id = Digest::MD5::hexdigest(email).downcase
    # "https://gravatar.com/avatar/#{gravatar_id}.png"
 
  end
end
