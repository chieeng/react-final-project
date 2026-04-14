import { useState } from "react";

function InquiryForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    alert("Inquiry sent!");
    setMessage("");
  };

  return (
    <div className="inquiry-form">

      <h3>Send Inquiry</h3>

      <textarea
        placeholder="Write your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>

    </div>
  );
}

export default InquiryForm;