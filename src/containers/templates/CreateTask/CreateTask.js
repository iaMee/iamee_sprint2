import React, { Component } from 'react';
import style from './CreateTask.css';
import BottomNav from 'components/organisms/BottomNav/BottomNav';
import Circle from 'components/atoms/Circles/Circle';
import BaseButton from 'components/atoms/Buttons/BaseButton';
import Banner from 'components/atoms/Banners/Banner';
import { Link } from 'react-router-dom';
import { Row, Input, Button } from 'react-materialize';
import AddForm from 'components/molecules/InputForms/AddForm';
import { firebase, base } from 'data/firebase';
import Relaxed from 'components/templates/CreateTask/Relaxed';
import Positive from 'components/templates/CreateTask/Positive';

const components = {
	relaxed: Relaxed,
	positive: Positive
};

class CreateTask extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};

	}

	componentDidMount() {
		this.forceUpdate();
		!document.getElementById('materialize-modal-overlay-1')
			? null
			: (document.getElementById('materialize-modal-overlay-1').style.display =
				'none'); //remove modal overlay from previous


		const userId = firebase.auth().currentUser.uid;
		const firebasePath = `users/${userId}/tasks/${this.props.match.params.taskId}/experience`;
		this.binding = base.bindToState(firebasePath, {
			context: this,
			state: 'experience'
		});
	}

	componentWillUnmount() {
		base.removeBinding(this.binding);
	}

	render() {
		// var experiences = this.state.experiences;
		var match = this.props.match;

		if (!this.state.experience) {
			return <div>Loading...</div>;
		}

		console.log(this.state.experience);
		const Component = components[this.state.experience]

		return (
			<div>
				<Component taskId={match.params.taskId} />
				<div className="spacer" />
				<div className="spacer" />
				<Link to={`${match.url}/completion`}>COMPLETE</Link>
			</div>
		);
	}
}

export default CreateTask;
