import { BehaviorSubject } from 'rxjs';
export let boardControlSubject = new BehaviorSubject(null);
export default function initBoards(controlFunctions){
    console.log('init')
     boardControlSubject.next(controlFunctions); 
}
