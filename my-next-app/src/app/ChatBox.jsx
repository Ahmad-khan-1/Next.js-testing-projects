"use client";

import { useState, useRef, useOptimistic, startTransition } from "react";
import { sendMessage } from "./action";

export default function ChatBox() {
    const [messages, setMessages] = useState([]);
    const inputRef = useRef(null);

    // 🔥 useOptimistic (main concept)
    const [optimisticMessages, addOptimisticMessage] = useOptimistic(
        messages,
        (currentMessages, newText) => [
            ...currentMessages,
            { text: newText, pending: true },
        ]
    );

    async function handleSend() {
        const text = inputRef.current.value;
        if (!text.trim()) return;

        inputRef.current.value = "";

        // ✅ instant UI update
        startTransition(() => {
            addOptimisticMessage(text);
        });

        // ⏳ server call
        const saved = await sendMessage(text);

        // ✅ real state update
        setMessages((prev) => [...prev, { text: saved, pending: false }]);
    }

    return (
        <div className="max-w-sm mx-auto mt-10 p-4 border rounded-lg">
            <h2 className="text-lg font-semibold mb-3">Chat</h2>

            {/* Messages */}
            <div className="space-y-2 mb-4">
                {optimisticMessages.map((msg, i) => (
                    <div
                        key={i}
                        className={`p-2 rounded border ${msg.pending ? "text-gray-400" : "text-black"
                            }`}
                    >
                        {msg.text}
                        {msg.pending && (
                            <span className="ml-2 text-xs">Sending...</span>
                        )}
                    </div>
                ))}
            </div>

            {/* Input */}
            <div className="flex gap-2">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 border px-2 py-1 rounded"
                />
                <button
                    onClick={handleSend}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                    Send
                </button>
            </div>
        </div>
    );
}