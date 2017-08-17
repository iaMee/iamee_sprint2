import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-materialize';
import Button from 'components/atoms/Button';
import ButtonCircle from 'components/atoms/ButtonCircle';
import LinkButton from 'components/atoms/LinkButton';
import ExperienceModal from './ExperienceModal';
import CirclesWrapper from './CirclesWrapper';
import Wrapper from './Wrapper';
import H2 from './H2';
import { firebase, base } from 'data/firebase';
import { withRouter } from 'react-router-dom';

const circle = {
	height: '10rem',
	radius: '100%',
};

const getModalTrigger = ({ experience: { name } }) => {
	return (
		<ButtonCircle capitalize height={circle.height} backgroundThemeColor={name}>
			{name}
		</ButtonCircle>
	);
};

const makeExperience = (match, experience, history) => () => {
	const userId = firebase.auth().currentUser.uid;
	//`${match.url}/${experience.name}/createtask`
	const thenableReference = base.push(`users/${userId}/tasks`, {
		data: {
			experience: experience,
		},
	});

	thenableReference.catch(console.error);

	history.push(`${match.url}/tasks/${thenableReference.key}`);
};

const Experiences = withRouter(({ experiences, match, history }) => {
	return (
		<div>
			{experiences.map(experience =>
				<Modal key={experience.name} trigger={getModalTrigger({ experience })}>
					<ExperienceModal experience={experience} />
					<button onClick={makeExperience(match, experience.name, history)}>Start to build</button>
				</Modal>
			)}
		</div>
	);
});

const Experience = ({ experiences, match }) => {
	return (
		<Wrapper>
			<H2>Build your aspirations</H2>
			<p>How do you want to feel?</p>
			<CirclesWrapper>
				<Experiences experiences={experiences} match={match} />
				<Button>Customize Your Own</Button>
			</CirclesWrapper>
		</Wrapper>
	);
};

Experience.propTypes = {
	experiences: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			tag: PropTypes.string,
		})
	).isRequired,
	match: PropTypes.shape({
		url: PropTypes.string,
	}).isRequired,
};

export default Experience;
