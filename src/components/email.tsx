import { useState } from "react";
import { db, collection, addDoc, serverTimestamp } from "../firebase";

const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      await addDoc(collection(db, "emails"), {
        email,
        createdAt: serverTimestamp(),
      });
      setSuccess(true);
      setEmail("");
    } catch (err) {
      console.error("Error saving email:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="p-3 rounded-md border border-border flex-1"
        required
      />
      <button
        type="submit"
        className="px-6 py-3 rounded-md bg-primary text-white hover:bg-primary/80 transition"
      >
        Subscribe
      </button>
      {success && <p className="text-green-500 mt-2">Email saved successfully!</p>}
    </form>
  );
};

export default EmailCapture;
