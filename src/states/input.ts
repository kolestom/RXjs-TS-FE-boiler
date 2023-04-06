import { BehaviorSubject } from "rxjs"



export const $input = new BehaviorSubject<string>('')  //$-lal jeloljuk, h reactive valtozo

export const setInput = (value: string) =>{
    $input.next(value)
}