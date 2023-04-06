import { BehaviorSubject } from "rxjs";
import { useState , useEffect} from "react";

const useRXjs = <T>(data: BehaviorSubject<T>): T => {  //BehaviorSubject-tel lesz a data-n pl a getValue fuggveny
    const [val, setVal] = useState<T>(data.getValue());

    useEffect(()=>{
        // data.subscribe((nexValue: T) => setVal(nexValue)) // ua, mint lent
        const subsciption = data.subscribe(setVal)
        return () => subsciption.unsubscribe()  // uriti a subscription-t (leiratkozas)
    },[])
    return val;
}
 
export default useRXjs;