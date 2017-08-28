import React from 'react';
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

export default class extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			emailFormholder: 'Invite a friend to be positive with you!'
		};
		const userId = firebase.auth().currentUser.uid;
		this.firebasePath = `users/${userId}/tasks/${props.taskId}`;
	}

	componentDidMount() {
		this.binding = base.syncState(this.firebasePath, {
			context: this,
			state: 'task',
			then: () => {
				this.setState(state => {
					return {
						stagedFrequency: state.task.reminderFrequency || 'none'
					};
				});
			}
		});
	}

	onFrequencyChange = event => {
		this.setState({
			stagedFrequency: event.target.value
		});
	};

	setReminder = () => {
		this.setState(state => ({
			task: {
				...state.task,
				reminderFrequency: this.state.stagedFrequency
			}
		}));

		this.showMessage('Reminder set!');
	};

	showMessage(message) {
		this.setState({
			message
		});

		setTimeout(
			() =>
				this.setState({
					message: undefined
				}),
			2000
		);
	}

	sendInvite = () => {
		if (this.state.email.length === 0) {
			return;
		}

		base
			.push(`${this.firebasePath}/invites`, {
				data: this.state.email
			})
			.then(() => {
				this.showMessage('Invite sent!');
			})
			.catch(console.error);
	};
	render() {

		return (
			<div>
				{/*<Banner
          id={this.state.task.experience}
          title={this.state.task.experience}
        /> */}

				{/*<div>
								{experiences.tasks.map(task =>
									<Pill
										tasks = {task}
									/>
								)}
							</div>*/}

				{/*{
			 	this.state.message &&
			 	<div>
			 		{this.state.message}
			 	</div>
			 }*/}

				<div className="text-center margin-top">Set Reminder Frequency</div>

				<div className="dropDown margin-top">
					<Input
						className="margin"
						type="select"
						value={this.state.stagedFrequency}
						onChange={this.onFrequencyChange}
					>
						<option className="text-center" value="none">
							None
            </option>
						<option value="daily">Daily</option>
						<option value="weekly">Weekly</option>
						<option value="monthly">Monthly</option>
					</Input>
				</div>

				<div className="exp-button width-80 btn-blue">
					<BaseButton title={'SET REMINDER'} onClick={this.setReminder} />
				</div>

				<br />
				<br />

				<div className="text-center">
					{this.state.emailFormholder}
				</div>

				{/*<div className="margin-top">
              <Input
                  type="email"
                  label="Email"
              />
               <Button
                  floating
                  large
                  className="inputEmail blue"
                  waves='light'
                  icon='add'
                  onClick={this.addNewEmail}
              />*/}
				{/*
              <FormGroup className="no-wrap">
                <Input className="activity-input" onChange={(e)=>this.changeEmail(e)} value={this.state.newEmail} type="activity" name="activity" id="activity" placeholder="Enter your friend's email address" />
                <Button
                  onClick={this.addNewEmail}
                  color="primary"
                  className="circle-button"
                  >
                    <FaPlus />
                  </Button>
              </FormGroup>*/}
				{/*</div>*/}

				<div className="createTaskInput">
					<div className="addInput">
						<Input
							type={'email'}
							label={"Enter your friend's email"}
							value={this.state.email}
							onChange={event => this.setState({ email: event.target.value })}
						/>
					</div>
				</div>

				<br />

				<div className="exp-button width-80 btn-blue">
					<BaseButton onClick={this.sendInvite} title={'INVITE MY FRIEND!'} />
				</div>

				<div className="big-margin-top width-80 btn-blue">
					<Link to={`/experiences/relaxed/show`}>
						<BaseButton title={'NEXT'} />
					</Link>
				</div>
			</div>
		);
	}
}