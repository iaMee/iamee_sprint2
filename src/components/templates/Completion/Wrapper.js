import styled from 'styled-components';
import { templateWrapper } from 'styles/layout';

export default styled.main`
  ${templateWrapper};
  padding:0 8vw 2rem;

  .rating-text {
  	font-size:20px;
  	margin-top:32px;	
  }
  .rating-slider {
  	margin-top:30px;
  	margin-bottom:20px;
  }
  .btn-submit {
	  border-radius: 30px;
	  border: 0;
	  font-size:20px;
	  font-weight:bold;
	  color : #fff;
	  background : ${props => props.theme.main}

  }
`;
