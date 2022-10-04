
import { useCount } from '../hooks/useCount'
import './../App.scss'

export const Counter = () => {
	const { count, setCount } = useCount()

	const onClickDecrease = () => {
		setCount(count - 1)
	}
	const onClickIncrease = () => {
		setCount(count + 1)
	}

	return (
		<div className='container'>
			<div className='title'>Counter:</div>
			<div className='count'>{count}</div>
			<div className='button'>
				<button onClick={onClickDecrease} className='decrease button__count'>
					decrease by one
				</button>
				<button onClick={onClickIncrease} className='increase button__count'>
					increase by one
				</button>
			</div>
		</div>
	)
}
