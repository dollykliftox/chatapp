class RoomMessagesController < ApplicationController
  before_action :load_entities

  def create
    @room_message = RoomMessage.create(user: current_user, room: @room, message: params[:room_message][:message])
    ActionCable.server.broadcast "room_channel",
                                      content: @room,
                                      room_message: @room_message
    # RoomChannel.broadcast_to @room, @room_message
  end

  private

  def load_entities
    @room = Room.find(params[:room_message][:room_id])
  end
end

