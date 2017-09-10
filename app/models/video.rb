# == Schema Information
#
# Table name: videos
#
#  id           :integer          not null, primary key
#  link         :string(255)
#  title        :string(255)
#  published_at :datetime
#  duration     :string(255)
#  likes        :integer
#  dislikes     :integer
#  uid          :string(255)
#  created_at   :datetime
#  updated_at   :datetime
#  subject_id   :integer
#  yt_description :text

class Video < ActiveRecord::Base
  belongs_to :user
  has_one :user
  has_many :comments
  belongs_to :subject
  validates :link, presence: true
  validates :subject_id, presence: { message: "Title: You already have a subject with that name" }

  def Video.search(params)
    if params[:sort].present?
      get_results(params[:search]).order_results(params[:sort]) 
    else
      get_results(params[:search]).order_results("Most Recently Updated")
    end
  end

  def Video.get_results(search_term)
    search_term.empty? ? Video.where(private: false) : Video.where(private: false).where("lower(title) LIKE ?", "%#{search_term.downcase}%")
  end

  def Video.order_results(sort_request)
    if sort_request == "Most Recently Updated"
      self.order(updated_at: :desc)
    elsif sort_request == "Least Recently Updated"
      self.order(updated_at: :asc)
    elsif sort_request == "Most Recently Created"
      self.order(created_at: :desc)
    elsif sort_request == "Least Recently Created"
      self.order(created_at: :asc)
    elsif sort_request == "Title: A-Z"
      self.order(title: :asc) 
    elsif sort_request == "Title: Z-A"
      self.order(title: :desc) 
    end
  end

end