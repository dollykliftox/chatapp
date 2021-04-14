import consumer from "./consumer"

const RoomChannel = consumer.subscriptions.create("RoomChannel", {
  connected() {
    console.log("Connected to the room js!")
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {


    $('[data-channel-subscribe="room"]').each(function(index, element) {
      var $element = $(element)
      var room_id = $element.data('room-id')
      var messageTemplate = $('[data-role="message-template"]');

      $element.animate({ scrollTop: $element.prop("scrollHeight")}, 1000)
      var content = messageTemplate.children().clone(true, true);
      
        content.find('[data-role="user-avatar"]').attr('src', data["avatar"]["name"]);
        content.find('[data-role="message-text"]').text(data["content"]);
        content.find('[data-role="message-date"]').text(data["updated_at"]);
        $element.append(content);
        $element.animate({ scrollTop: $element.prop("scrollHeight")}, 1000);      
    });
  }
});

export default RoomChannel;

