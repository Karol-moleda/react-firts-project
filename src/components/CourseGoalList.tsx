import { FC } from 'react';
import CourseGoal from './CourseGoal';
import { type CourseGoalType } from '../App';

type CourseGoalListProps = {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
};

const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDeleteGoal }: CourseGoalListProps) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} onDelete={onDeleteGoal} title={goal.title}>
            {goal.description}
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};
export default CourseGoalList;
