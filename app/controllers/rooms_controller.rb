class RoomsController < ApplicationController
  
  before_action :set_room, only: [:show, :edit, :update]
  before_action :load_entities

  def index
    @rooms = Room.all
  end

  def  show
    @room_message = RoomMessage.new room: @room
    @room_messages = @room.room_messages.includes(:user)
  end

  def new
    @room = Room.new
  end

  def edit
  end

  def create
    @room = Room.new(room_params)
    if @room.save
      flash[:success] = "Room #{@room.name} was created successfully"
      redirect_to rooms_path
    else
      render :new
    end
  end

  private

  def room_params
    params.require(:room).permit(:name)
  end

  def set_room
    @room = Room.find(params[:id])
  end
  
  def load_entities
    @rooms = Room.all
    @room = Room.find(params[:id]) if params[:id]
  end

end
