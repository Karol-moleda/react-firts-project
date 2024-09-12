import { type FC, type ReactNode } from 'react';

interface CourseGoalProps {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
}
const CourseGoal: FC<CourseGoalProps> = ({ title, children, id, onDelete }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};
export default CourseGoal;

// old method
// export default function CourseGoal({title,children}: CourseGoalProps ) {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{children}</p>
//       </div>
//       <button>DocumentHighlightsRequestArgs</button>
//     </article>
//   )
// }
