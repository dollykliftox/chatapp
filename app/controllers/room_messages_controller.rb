class RoomMessagesController < ApplicationController
  before_action :load_entities

  def create
    @room_message = RoomMessage.create(user: current_user, room: @room, message: params[:room_message][:message])
  
    ActionCable.server.broadcast "room_channel",
                                      content: @room_message.message,
                                      updated_at: @room_message.updated_at, 
                                      avatar: @room_message.user.gravatar_url,
                                      room: @room
  end

  private

  def load_entities
    @room = Room.find(params[:room_message][:room_id])
  end
end

