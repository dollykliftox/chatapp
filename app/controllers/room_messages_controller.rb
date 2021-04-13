class RoomMessagesController < ApplicationController
  before_action :load_entities

  def create
    @room_message = RoomMessage.create(user: current_user, room: @room, message: params[:room_message][:message])
    ActionCable.server.broadcast "room_channel",
                                      content: @room_message.message,
                                      room: @room
  end

  private

  def load_entities
    @room = Room.find(params[:room_message][:room_id])
  end
end

