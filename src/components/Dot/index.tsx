import './styles.css';

interface DotsProps {
   top: number;
   left: number;
}

export function Dot({ top, left }: DotsProps){
   return (
      <span 
         id="dot" 
         style={{ top, left }}
      />
   )
}