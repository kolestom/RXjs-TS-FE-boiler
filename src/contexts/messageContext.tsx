import { ReactNode, createContext, useContext, useState } from "react";
const MessageContext = createContext<MessageContextType|null>(null)
import type { FC } from "react";


type Message ={
    sender: string,
    receiver: string,
    message:string
  }

  
  const useMessages =() =>{
    const [messages, setMessages] = useState<Message[]>([]);

    const loadData = () => {
        setMessages([
            {sender: "John",receiver: "Jack",message: "Hello, Jack"},
            {sender: "Jane",receiver: "Rob",message: "Hello, Rob"},
            {sender: "Michelle",receiver: "Johanna",message: "Hello, Johanna"},
        ])
    }
    return {messages, loadData}
}

type Props ={
    children: ReactNode
}

type MessageContextType ={
    loadData: () => void,
    messages: Message[]
}

export const MessageProvider: FC<Props>=({children})=>{
    const {messages, loadData} = useMessages()
    return <MessageContext.Provider value={{messages, loadData}}>{children}</MessageContext.Provider>
}

export const useMessageContext =() =>{
    const context = useContext(MessageContext)
    if (!context) throw new Error("useMessageContext must be used in context Provider ")
    return context
}
