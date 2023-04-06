import { BehaviorSubject } from "rxjs"



export const $counter = new BehaviorSubject<number>(0)  //$-lal jeloljuk, h reactive valtozo

export const addOne = () =>{
    $counter.next($counter.value +1)
}