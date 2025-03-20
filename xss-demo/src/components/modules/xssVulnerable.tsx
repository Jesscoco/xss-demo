import { useState } from "react";

const XSSVulnerable: React.FC = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

  const submitMessage = () => {
    setMessages([...messages, userInput]);
    setUserInput("");
  };

  return (
    <div>
      <h1>Simulation de test de vulnérabilité XSS </h1>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Écris un message"
      />
      <button onClick={submitMessage}>Envoyer</button>

      <h2>Messages</h2>
      <ul>
        {messages.map((msg, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: msg }}></li>

        ))}
      </ul>
    </div>
  );
};

export default XSSVulnerable;