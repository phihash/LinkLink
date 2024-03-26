import { User } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "./firebase";

export async function saveUserData(user: User) {
  try {
    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      await setDoc(userDocRef, {
        nickname: user.displayName || "",
        profileInfo: "",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      console.log("User data saved successfully.");
    } else {
      console.log("User data already exists.");
    }
  } catch (error) {
    console.error("Error saving user data:", error);
  }
}
