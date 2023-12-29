import store from "../../store/store";
import { setMessages } from "../../store/actions/chatActions";

export const updateDirectChatHistoryIfActive = (data) => {
  const { participants, messages } = data;

  // find id of user from token and id from active conversation
  const receiverId = store.getState().chat.chosenChatDetails?.id;
  const userId = store.getState().auth.userDetails._id;
console.log("getting details for:", receiverId,":", userId);
  if (receiverId && userId) {
    const usersInCoversation = [receiverId, userId];

    updateChatHistoryIfSameConversationActive({
      participants,
      usersInCoversation,
      messages,
    });
  }
};

const updateChatHistoryIfSameConversationActive = ({
  participants,
  usersInCoversation,
  messages,
}) => {

  console.log("update chat history:"+usersInCoversation,":",participants);
  const result = participants.every(function (participant) {
    return usersInCoversation.includes(participant._id);
  });

  if (result) {
    store.dispatch(setMessages(messages));
  }
};
