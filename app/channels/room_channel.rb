class RoomChannel < ApplicationCable::Channel
  def subscribed
    debugger
    room = Room.find params[:room]
    stream_for room
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
