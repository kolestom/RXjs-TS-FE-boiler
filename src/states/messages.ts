import { BehaviorSubject } from "rxjs"

type Message ={
    sender: string,
    receiver: string,
    message:string
  }

export const $messages = new BehaviorSubject<Message[]>([])  //$-lal jeloljuk, h reactive valtozo

export const loadData = () =>{
    $messages.next(
        [
            {sender: "John",receiver: "Jack",message: "Hello, Jack"},
            {sender: "Jane",receiver: "Rob",message: "Hello, Rob"},
            {sender: "Michelle",receiver: "Johanna",message: "Hello, Johanna"},
        ]
    )
}