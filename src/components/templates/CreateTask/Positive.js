import React from 'react';
import { firebase, base } from 'data/firebase';

import turtle from './turtle.png'

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		const userId = firebase.auth().currentUser.uid;

		const random = (bottom, top) => Math.floor(Math.random() * top) + bottom

		const questionsPath = "aspirations/positive/turtle-questions";
		base.fetch(questionsPath + "/count", {
			context: this
		}).then(count => {
			this.questionNumber = random(0, count)

			return base.fetch(questionsPath + "/" + this.questionNumber, {
				context: this
			});
		}).then(question => {
			this.setState({
				question
			});
		}).catch(error => {
			console.error(error);
		})

		const firebasePath = `/users/${userId}/tasks/${this.props.taskId}/diaryEntry`;
		base.syncState(firebasePath, {
			context: this,
			state: 'diaryEntry',
			defaultValue: '',
		});
	}

	updateEntry = event => {
		this.setState({
			diaryEntry: event.target.value
		})
	}

	render() {
		return (
			<div>
				<img src={turtle} />
				<div>{this.state.question}</div>
				<textarea value={this.state.diaryEntry} onChange={this.updateEntry} />
			</div>
		)
	}
}