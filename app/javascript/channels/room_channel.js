import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
     console.log("Connected to the room js!")
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    debugger
    // Called when there's incoming data on the websocket for this channel
     // var content = messageTemplate.children().clone(true, true);
     //  content.find('[data-role="user-avatar"]').attr('src', data.user_avatar_url);
     //  content.find('[data-role="message-text"]').text(data.message);
     //  content.find('[data-role="message-date"]').text(data.updated_at);
     //  $element.append(content);
     //  $element.animate({ scrollTop: $element.prop("scrollHeight")}, 1000);

    // console.log(data)
    // $('#resource_messages').append('<div class="message"> <strong>' + data.user + '</strong>: ' + data.content + '</div>')
    // console.log("Recieving:")
    // console.log(data.content)
  }
});


// $(function() {
//   $('[data-channel-subscribe="room"]').each(function(index, element) {
//     var $element = $(element),
//         room_id = $element.data('room-id')
//         messageTemplate = $('[data-role="message-template"]');

//     $element.animate({ scrollTop: $element.prop("scrollHeight")}, 1000)        

//     App.cable.subscriptions.create(
//       {
//         channel: "RoomChannel",
//         room: room_id
//       },
//       {
//         received: function(data) {
//           var content = messageTemplate.children().clone(true, true);
//           content.find('[data-role="user-avatar"]').attr('src', data.user_avatar_url);
//           content.find('[data-role="message-text"]').text(data.message);
//           content.find('[data-role="message-date"]').text(data.updated_at);
//           $element.append(content);
//           $element.animate({ scrollTop: $element.prop("scrollHeight")}, 1000);
//         }
//       }
//     );
//   });
// });

// let submit_messages;

// $(document).on('turbolinks:load', function () {
//   submit_messages()
// })

// submit_messages = function () {
//   $('#message_body').on('keydown', function (event) {
//     if (event.keyCode == 13) {
//       $('input').click()
//       event.target.value = ''
//       event.preventDefault()
//     }
//   })
// }