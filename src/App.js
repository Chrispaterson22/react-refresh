import React, { useState } from 'react'

import './App.css'
import GoalsList from './components/GoalList/GoalList'
import NewGoal from './components/NewGoal/NewGoal'

const App = () => {
	const [courseGoals, setCourseGoals] = useState([
		{
			id: 'cg1',
			text: 'Finish Course',
		},
		{
			id: 'cg2',
			text: 'Learn all about the Course Main Topic',
		},
		{
			id: 'cg3',
			text: 'Help other students in the course Q&A',
		},
	])

	const addNewGoalHandler = newGoal => {
		// setCourseGoals(courseGoals.concat(newGoal))
		setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newGoal))
	}

	return (
		<div className='course-goals'>
			<h2>Course Coals</h2>
			<NewGoal onAddGoal={addNewGoalHandler} />
			<GoalsList goals={courseGoals} />
		</div>
	)
}

export default App
