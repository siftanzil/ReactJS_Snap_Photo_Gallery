import { ref, set } from "firebase/database";
import { Timestamp } from "firebase/firestore";
import { projectDatabase } from "../firebase/config";

export const storeComment = (username, email, imgId, comment) => {
   let createdAt = Timestamp.now().toDate();
   set(ref(projectDatabase, imgId), {
      username: username,
      email: email,
      imgId: imgId,
      comments: { comment },
      created: { createdAt },
   });
};
